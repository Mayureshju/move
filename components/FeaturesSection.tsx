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
    title: "Membership/Member Management",
    description: "Seamlessly manage member profiles, subscriptions, attendance, and renewals.Automate reminders for expired memberships."
  },
  {
    icon: Calendar,
    title: "Classes/service Management",
    description: "Schedule and manage classes, personal training sessions, and group workouts.Set up recurring or one-time classes with instructor assignments."
  },
  {
    icon: CreditCard,
    title: "Instructor Management",
    description: "Manage instructor profiles, schedules, payroll, and performance insights.Set up payment gateways for online payments."
  },
  {
    icon: Users,
    title: "Appointment Booking",
    description: "Allow members to book appointments online for personal training, classes, or consultations."
  },
  {
    icon: Activity,
    title: "Point of Sale",
    description: "Integrated POS system to handle gym merchandise, membership sales, and services."
  },
  {
    icon: Brain,
    title: "HRMS Integration",
    description: "Manage staff attendance, payroll, leave, and recruitment seamlessly."
  },
  {
    icon: MessageSquare,
    title: "CRM for Lead Management",
    description: "Track gym inquiries and convert leads into members with a powerful CRM tool."
  },
  {
    icon: Bell,
    title: "Helpdesk Support",
    description: "Enable a dedicated helpdesk for member queries, complaints, and feedback."
  },
  {
    icon: Smartphone,
    title: "BI & analytic Tool",
    description: "Gain actionable insights with business intelligence dashboards for revenue, attendance, and class performance."
  },
  {
    icon: LineChart,
    title: "Diet Management",
    description: "Create personalized diet plans and track nutrition for members."
  },
  {
    icon: Shield,
    title: "Member Mobile APP",
    description: "Offer a branded mobile app for members to book classes, track progress, and renew memberships."
  },
  {
    icon: Settings,
    title: "Payment Gateway",
    description: "Support multiple payment methods, including card payments, Google Pay, Apple Pay, and more."
  },
  {
    icon: Clock,
    title: "⁠Coupon Management",
    description: "Launch promotional campaigns with coupons and discounts."
  },
  {
    icon: Zap,
    title: "Email & SMS Management",
    description: "Automate communication with members for updates, promotions, and reminders."
  },
  {
    icon: Award,
    title: "Document Management System (DMS)",
    description: "Organize and store important documents securely on the cloud."
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