"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Users, Calendar, ArrowRight, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/mj.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
        </div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48"
        >
          <div className="max-w-3xl">
            <motion.div variants={fadeInUp} className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-medium">New Feature</span>
              <span className="px-2 py-0.5 rounded-full text-sm bg-primary/20 text-primary">
                AI Powered Insights
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="hero-title text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            One app for all things <br />
              <span className="text-primary">fitness & wellness</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="hero-description text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Time's running out to start the new year with access to thousands of fitness studios and gyms around the world.
            </motion.p>

            <motion.div variants={fadeInUp} className="hero-buttons flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
                Learn more about Redtra.fit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-4">
              {["Advanced member analytics and insights", "Automated class scheduling and booking", "Real-time performance tracking"].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp} className="hero-feature flex items-center gap-3 text-gray-300">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      {/* <div ref={statsRef} className="relative bg-white dark:bg-black z-20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Dumbbell className="h-8 w-8" />, number: "500", label: "Gyms Worldwide" },
              { icon: <Users className="h-8 w-8" />, number: "100000", label: "Active Members" },
              { icon: <Calendar className="h-8 w-8" />, number: "1000000", label: "Classes Booked" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="stat-item group p-8 rounded-2xl bg-gray-50 dark:bg-black/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-black/70 transition-all duration-300 border border-gray-200 dark:border-primary/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="stat-number text-4xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}
    </>
  );
}
