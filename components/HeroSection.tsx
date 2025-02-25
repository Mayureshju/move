"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Dumbbell, Users, Calendar, ArrowRight, Play, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial loading animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }})
      
      tl.from(overlayRef.current, {
        opacity: 1,
        duration: 1.5
      })
      .from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, "-=0.5")
      .from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 1
      }, "-=0.6")
      .from(".hero-description", {
        opacity: 0,
        y: 40,
        duration: 0.8
      }, "-=0.6")
      .from(".hero-buttons", {
        opacity: 0,
        y: 30,
        duration: 0.8
      }, "-=0.4")
      .from(".hero-feature", {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.6
      }, "-=0.4")

      // Parallax effect on video
      gsap.to(".video-container", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })

      // Stats animation
      gsap.from(".stat-item", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      })

      // Counter animation for stats
      const stats = document.querySelectorAll('.stat-number')
      stats.forEach(stat => {
        const target = parseInt(stat.textContent || '0', 10)
        gsap.from(stat, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          stagger: {
            each: 0.2,
            onUpdate: function() {
              stat.textContent = Math.ceil(this.targets()[0].textContent) + '+'
            },
          },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top center+=100"
          }
        })
      })
    }, heroRef)

    // Video loading handler
    const video = videoRef.current
    if (video) {
      video.addEventListener('loadeddata', () => {
        gsap.to(video, {
          opacity: 1,
          duration: 1,
          delay: 0.5
        })
      })
    }

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-black">
        {/* Video Background */}
        <div className="video-container absolute inset-0 w-full h-[120%]">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
            poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          >
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/735428933/rendition/1080p/file.mp4?loc=external&signature=e4ab76e379a53e21bb2c2236ce10fc887d3cb46d1e0c1a3a6ca4f5969bfc0c7c"
              type="video/mp4"
            />
            <source
              src="https://cdn.coverr.co/videos/coverr-working-out-at-the-gym-5244/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/85 to-gray-50/50 dark:from-black dark:via-black/85 dark:to-black/50" />
        </div>

        {/* Loading Overlay */}
        <div ref={overlayRef} className="absolute inset-0 bg-gray-50 dark:bg-black z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48">
          <div className="max-w-3xl">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-medium">New Feature</span>
              <span className="px-2 py-0.5 rounded-full text-sm bg-primary/20 text-primary">AI Powered Insights</span>
            </div>
            
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              The Future of <br />
              <span className="text-primary">
                Gym Management
              </span>
            </h1>
            
            <p className="hero-description text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Transform your fitness business with our AI-powered platform. Streamline operations, boost member engagement, and watch your community thrive.
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-gray-900 dark:text-white border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="space-y-4">
              <div className="hero-feature flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <ChevronRight className="h-5 w-5 text-primary" />
                <span>Advanced member analytics and insights</span>
              </div>
              <div className="hero-feature flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <ChevronRight className="h-5 w-5 text-primary" />
                <span>Automated class scheduling and booking</span>
              </div>
              <div className="hero-feature flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <ChevronRight className="h-5 w-5 text-primary" />
                <span>Real-time performance tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="relative bg-white dark:bg-black z-20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-item group p-8 rounded-2xl bg-gray-50 dark:bg-black/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-black/70 transition-all duration-300 border border-gray-200 dark:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <Dumbbell className="h-8 w-8" />
                </div>
                <div className="stat-number text-4xl font-bold text-gray-900 dark:text-white">500</div>
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400">Gyms Worldwide</div>
            </div>
            
            <div className="stat-item group p-8 rounded-2xl bg-gray-50 dark:bg-black/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-black/70 transition-all duration-300 border border-gray-200 dark:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8" />
                </div>
                <div className="stat-number text-4xl font-bold text-gray-900 dark:text-white">100000</div>
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400">Active Members</div>
            </div>
            
            <div className="stat-item group p-8 rounded-2xl bg-gray-50 dark:bg-black/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-black/70 transition-all duration-300 border border-gray-200 dark:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="stat-number text-4xl font-bold text-gray-900 dark:text-white">1000000</div>
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400">Classes Booked</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}