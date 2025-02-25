"use client"

import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Lightbulb,
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { Button } from './ui/button'

const stats = [
  {
    value: "10+",
    label: "Years Experience"
  },
  {
    value: "500+",
    label: "Gyms Worldwide"
  },
  {
    value: "98%",
    label: "Client Satisfaction"
  },
  {
    value: "24/7",
    label: "Support Available"
  }
]

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "We believe in building strong, supportive fitness communities that inspire and motivate."
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Every feature is designed with clear objectives to help your business succeed and grow."
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We continuously evolve our platform with cutting-edge technology and industry insights."
  }
]

const achievements = [
  "Best Gym Management Software 2024",
  "Innovation Award in Fitness Tech",
  "Top Rated Support Team",
  "Industry Leading Security"
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_60%)] opacity-[0.15] dark:opacity-[0.25] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0%,transparent_60%)] opacity-[0.15] dark:opacity-[0.25] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Move
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transforming the fitness industry through innovative technology and exceptional service
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-primary/20 rounded-2xl text-center group-hover:border-primary/40 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
                alt="Move Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              At Move, we're passionate about empowering fitness businesses with the tools they need to succeed. Our platform combines cutting-edge technology with deep industry expertise to deliver solutions that drive growth, enhance member experiences, and streamline operations.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group p-8 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-primary/20 rounded-2xl mb-16"
        >
          <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Achievements
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
          >
            Join Our Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}