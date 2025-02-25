"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Calendar,
  Clock,
  CreditCard,
  Users,
  Activity,
  Brain,
  MessageSquare,
  Bell,
  Smartphone,
  LineChart,
  Shield,
  Settings,
  Zap,
  Award
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain deep insights into member behavior, attendance patterns, and business performance with our comprehensive analytics dashboard."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated class scheduling system with conflict resolution and intelligent capacity management."
  },
  {
    icon: CreditCard,
    title: "Seamless Payments",
    description: "Integrated payment processing for memberships, classes, and additional services with automated billing."
  },
  {
    icon: Users,
    title: "Member Management",
    description: "Comprehensive member profiles with attendance tracking, progress monitoring, and communication history."
  },
  {
    icon: Activity,
    title: "Fitness Tracking",
    description: "Real-time workout tracking and progress monitoring for members with personalized goals and milestones."
  },
  {
    icon: Brain,
    title: "AI Personal Training",
    description: "AI-powered workout recommendations and form correction based on individual member profiles and goals."
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Centralized communication platform for announcements, member feedback, and direct messaging."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated reminders for classes, payments, and important updates through multiple channels."
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Full-featured mobile app for members to book classes, track progress, and access resources on the go."
  },
  {
    icon: LineChart,
    title: "Performance Metrics",
    description: "Detailed reporting on business KPIs, member retention, and revenue analytics."
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "Advanced access control system with digital key cards and biometric authentication options."
  },
  {
    icon: Settings,
    title: "Equipment Management",
    description: "Track equipment maintenance, usage, and scheduling with automated service notifications."
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    description: "Automated check-in system with real-time occupancy monitoring and capacity management."
  },
  {
    icon: Zap,
    title: "Energy Management",
    description: "Smart controls for lighting, HVAC, and equipment to optimize energy usage and reduce costs."
  },
  {
    icon: Award,
    title: "Rewards Program",
    description: "Gamified loyalty program with achievements, challenges, and rewards for member engagement."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function FeaturesSection() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} id="features" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Gyms
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to manage your fitness business efficiently and provide an exceptional experience for your members.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group p-6 rounded-2xl bg-white dark:bg-zinc-950/50 hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-all duration-300 backdrop-blur-sm border border-gray-200 dark:border-zinc-800 hover:border-primary/20 dark:hover:border-primary/20"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}