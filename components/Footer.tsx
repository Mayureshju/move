"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Dumbbell,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Mail,
  CheckCircle2,
  Loader2
} from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Apps", href: "#apps" },
    { name: "Integrations", href: "#integrations" },
    { name: "API", href: "#api" }
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press Kit", href: "#press" },
    { name: "Partners", href: "#partners" },
    { name: "Blog", href: "#blog" }
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Case Studies", href: "#cases" },
    { name: "Webinars", href: "#webinars" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
    { name: "Security", href: "#security" }
  ]
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" }
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeStatus("loading")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubscribeStatus("success")
    setEmail("")
    
    // Reset status after 3 seconds
    setTimeout(() => setSubscribeStatus("idle"), 3000)
  }

  return (
    <footer className="bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-200 dark:border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group max-w-xl mx-auto text-center"
          >
            <div className="relative p-8 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-300">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Stay updated with the latest features, tips, and fitness industry insights.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-50 dark:bg-zinc-800/50"
                />
                <Button 
                  type="submit"
                  disabled={subscribeStatus !== "idle"}
                  className="bg-primary hover:bg-primary/90 text-white min-w-[120px]"
                >
                  {subscribeStatus === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : subscribeStatus === "success" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Move</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Transform your fitness business with our AI-powered platform. Streamline operations, boost member engagement, and watch your community thrive.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (linkIndex * 0.05) }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Move. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span className="select-none">•</span>
              <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
              <span className="select-none">•</span>
              <a href="#cookies" className="hover:text-primary transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}