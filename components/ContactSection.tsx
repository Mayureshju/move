"use client"

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  Loader2
} from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    formRef.current?.reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "support@Move.com",
        "sales@Move.com"
      ]
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "123 Fitness Avenue",
        "San Francisco, CA 94105"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9AM - 6PM",
        "Sat - Sun: 10AM - 4PM"
      ]
    }
  ]

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary))_0%,transparent_70%)] opacity-[0.15] dark:opacity-[0.3]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--primary))_0%,transparent_70%)] opacity-[0.15] dark:opacity-[0.3]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-8 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-primary/20 rounded-2xl group-hover:border-primary/40 transition-all duration-300">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        First Name
                      </label>
                      <Input
                        required
                        type="text"
                        placeholder="John"
                        className="bg-gray-50 dark:bg-zinc-800/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Last Name
                      </label>
                      <Input
                        required
                        type="text"
                        placeholder="Doe"
                        className="bg-gray-50 dark:bg-zinc-800/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="bg-gray-50 dark:bg-zinc-800/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white">
                      Subject
                    </label>
                    <Input
                      required
                      type="text"
                      placeholder="How can we help?"
                      className="bg-gray-50 dark:bg-zinc-800/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white">
                      Message
                    </label>
                    <Textarea
                      required
                      placeholder="Your message..."
                      className="min-h-[150px] bg-gray-50 dark:bg-zinc-800/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-primary/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-primary/20 rounded-xl group-hover:border-primary/40 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {info.title}
                          </h3>
                          {info.details.map((detail, i) => (
                            <p
                              key={i}
                              className="text-gray-600 dark:text-gray-400"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Map */}
          
          </motion.div>
        </div>
      </div>
    </section>
  )
}