"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Upload, Wrench, Rocket, ArrowRight, Check } from 'lucide-react'
import { Button } from './ui/button'

const steps = [
  {
    icon: Upload,
    title: "Import Your Data",
    description: "Easily import your existing member data, class schedules, and trainer information with our intuitive data migration tools.",
    features: [
      "Automated data validation",
      "Smart field mapping",
      "Historical data preservation",
      "Real-time import progress"
    ]
  },
  {
    icon: Wrench,
    title: "Configure Your Studio",
    description: "Customize your workspace settings, branding, and preferences to match your gym's unique requirements.",
    features: [
      "Brand customization",
      "Role permissions setup",
      "Payment gateway integration",
      "Notification preferences"
    ]
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Launch your fully configured gym management system and start delivering an exceptional experience to your members.",
    features: [
      "Staff onboarding tools",
      "Member communication",
      "System health checks",
      "24/7 launch support"
    ]
  }
]

export default function GetStartedSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_60%)] opacity-[0.15] dark:opacity-[0.25] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0%,transparent_60%)] opacity-[0.15] dark:opacity-[0.25] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 dark:from-transparent dark:via-black/30 dark:to-black/50" />
      </div>
      
      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your gym management experience with our streamlined setup process
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Enhanced Card Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 dark:from-primary/30 dark:via-primary/20 dark:to-primary/30" />
                
                {/* Card Content */}
                <div className="relative h-full p-8 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-primary/20 rounded-2xl group-hover:border-primary/40 transition-all duration-300 dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 dark:bg-primary/20 dark:group-hover:bg-primary/30">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
                      >
                        <div className="flex-shrink-0 p-1 rounded-full bg-primary/10 dark:bg-primary/20">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-primary font-medium cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}