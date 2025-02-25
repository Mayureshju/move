"use client"

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from './ui/button'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Studio Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop",
    quote: "Move has revolutionized how we manage our studio. The automated scheduling and member engagement features have saved us countless hours, and our members love the mobile app!",
    rating: 5,
    metrics: {
      memberGrowth: "+45%",
      revenueIncrease: "+38%",
      timesSaved: "15hrs/week"
    }
  },
  {
    name: "Michael Chen",
    role: "CrossFit Box Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop",
    quote: "The analytics and insights provided by Move have helped us make data-driven decisions that boosted our revenue by 40%. The platform is intuitive and our trainers picked it up quickly.",
    rating: 5,
    metrics: {
      memberGrowth: "+52%",
      revenueIncrease: "+40%",
      timesSaved: "20hrs/week"
    }
  },
  {
    name: "Emma Rodriguez",
    role: "Yoga Studio Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&h=250&auto=format&fit=crop",
    quote: "Switching to Move was the best decision we made. The class booking system is flawless, and the integrated payment processing has simplified our billing process tremendously.",
    rating: 5,
    metrics: {
      memberGrowth: "+35%",
      revenueIncrease: "+42%",
      timesSaved: "12hrs/week"
    }
  },
  {
    name: "David Thompson",
    role: "Gym Chain Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop",
    quote: "Managing multiple locations has never been easier. The centralized dashboard gives us complete oversight, and the customization options let each location maintain its unique identity.",
    rating: 5,
    metrics: {
      memberGrowth: "+60%",
      revenueIncrease: "+45%",
      timesSaved: "25hrs/week"
    }
  },
  {
    name: "Lisa Patel",
    role: "Personal Training Studio Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop",
    quote: "The client tracking and progress monitoring features have transformed how we deliver personal training. Our trainers can focus more on clients and less on paperwork.",
    rating: 5,
    metrics: {
      memberGrowth: "+48%",
      revenueIncrease: "+35%",
      timesSaved: "18hrs/week"
    }
  }
]

const autoplayOptions = {
  delay: 5000,
  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
}

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay(autoplayOptions)]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary))_0%,transparent_60%)] opacity-[0.15] dark:opacity-[0.25] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--primary))_0%,transparent_60%)] opacity-[0.15] dark:opacity-[0.25] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 dark:from-transparent dark:via-black/30 dark:to-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-3 rounded-2xl bg-primary/20 text-primary dark:bg-primary/30"
            >
              <Quote className="h-8 w-8" />
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories from Our Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how Move is transforming fitness businesses worldwide
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Navigation */}
          <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:bg-primary/10 dark:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:bg-primary/10 dark:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6"
                >
                  <div className="relative group h-full">
                    {/* Enhanced Card Glow Effect */}
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 dark:from-primary/30 dark:via-primary/20 dark:to-primary/30" />
                    
                    {/* Card Content */}
                    <div className="relative p-8 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-primary/20 rounded-2xl group-hover:border-primary/40 transition-all duration-300 h-full flex flex-col dark:shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -right-4 p-2 bg-primary text-white rounded-full shadow-lg">
                        <Quote className="h-4 w-4" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-gray-700 dark:text-gray-200 mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50/50 dark:bg-black/40 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-800/50">
                        <div className="text-center">
                          <div className="text-primary font-bold text-lg">
                            {testimonial.metrics.memberGrowth}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            Members
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-primary font-bold text-lg">
                            {testimonial.metrics.revenueIncrease}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            Revenue
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-primary font-bold text-lg">
                            {testimonial.metrics.timesSaved}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            Time Saved
                          </div>
                        </div>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="relative group">
                          <div className="absolute -inset-px rounded-full bg-gradient-to-r from-primary to-primary/50 blur opacity-50 group-hover:opacity-100 transition-opacity" />
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="relative w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-lg"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-primary/50'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}