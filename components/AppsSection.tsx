"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Tablet, 
  LayoutDashboard,
  Dumbbell,
  Calendar,
  MessageSquare,
  Users,
  BarChart3,
  Clock,
  Settings,
  Bell,
  CreditCard
} from 'lucide-react'
import { Button } from './ui/button'

const apps = [
  {
    title: "Member Mobile App",
    description: "Empower your members with a powerful mobile app that puts their fitness journey in their hands.",
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1920&auto=format&fit=crop",
    icon: Smartphone,
    features: [
      { icon: Dumbbell, text: "Workout Tracking" },
      { icon: Calendar, text: "Class Booking" },
      { icon: MessageSquare, text: "Trainer Chat" },
      { icon: Bell, text: "Push Notifications" }
    ]
  },
  {
    title: "Instructor App",
    description: "Give your trainers the tools they need to deliver exceptional training experiences.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
    icon: Tablet,
    features: [
      { icon: Users, text: "Client Management" },
      { icon: Calendar, text: "Schedule Control" },
      { icon: Clock, text: "Session Timer" },
      { icon: MessageSquare, text: "Client Messaging" }
    ]
  },
  {
    title: "Admin Dashboard",
    description: "Comprehensive admin panel for complete control over your fitness business.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop",
    icon: LayoutDashboard,
    features: [
      { icon: BarChart3, text: "Analytics" },
      { icon: Settings, text: "Gym Settings" },
      { icon: Users, text: "Staff Management" },
      { icon: CreditCard, text: "Billing Control" }
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function AppsSection() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} className="relative py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Apps for Every Role
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience seamless fitness management with our suite of specialized applications, 
            designed to enhance the journey of members, empower instructors, and streamline 
            administrative tasks.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {apps.map((app, index) => {
            const Icon = app.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-primary/20 bg-gray-50 dark:bg-zinc-950/50 hover:bg-gray-100 dark:hover:bg-zinc-900/50 transition-all duration-300"
              >
                {/* App Image */}
                <motion.div
                  variants={imageVariants}
                  className="relative h-48 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 dark:from-black/80 to-transparent z-[1]" />
                  <motion.img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-[2] p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="p-3 rounded-xl bg-primary/20 text-primary"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{app.title}</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">{app.description}</p>

                  {/* Features */}
                  <motion.div
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                    className="space-y-3 mb-6"
                  >
                    {app.features.map((feature, fIndex) => {
                      const FeatureIcon = feature.icon
                      return (
                        <motion.div
                          key={fIndex}
                          variants={featureVariants}
                          className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <FeatureIcon className="h-5 w-5 text-primary/80" />
                          <span>{feature.text}</span>
                        </motion.div>
                      )
                    })}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-primary/20 hover:bg-primary/30 text-primary dark:text-white border border-primary/30"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}