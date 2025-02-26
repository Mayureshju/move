"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, CreditCard, Plus, X } from 'lucide-react'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const currencies = {
  KWD: {
    symbol: 'KWD',
    rate: 1,
    format: (price: number) => `${price.toFixed(3)}`
  },
  AED: {
    symbol: 'AED',
    rate: 12.05,
    format: (price: number) => `${price.toFixed(2)}`
  },
  INR: {
    symbol: '₹',
    rate: 101.89,
    format: (price: number) => `${price.toFixed(0)}`
  },
  USD: {
    symbol: '$',
    rate: 3.28,
    format: (price: number) => `${price.toFixed(2)}`
  }
}

const basePrice = 199 // yearly price
const customizations = [
  { name: 'Gate Management', price: 59 },
  { name: 'Accounting', price: 60 },
  { name: 'CRM', price: 45 },
  { name: 'HR & Payroll', price: 70 },
  { name: 'Helpdesk', price: 40 }
]

export default function PricingSection() {
  const [currency, setCurrency] = useState<keyof typeof currencies>('KWD')
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([])

  const getPrice = (price: number) => {
    const converted = price * currencies[currency].rate
    return `${currencies[currency].symbol} ${currencies[currency].format(converted)}`
  }

  const getTotalPrice = () => {
    const customizationYearlyTotal = selectedCustomizations.reduce((total, name) => {
      const customization = customizations.find(c => c.name === name)
      return total + ((customization?.price || 0) * 12)
    }, 0)
    return getPrice(basePrice + customizationYearlyTotal)
  }

  const getCustomizationYearlyPrice = (price: number) => {
    return getPrice(price * 12)
  }

  const toggleCustomization = (name: string) => {
    setSelectedCustomizations(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose your plan and customize it to your needs
          </p>
          
          <div className="mt-8 flex justify-center">
            <Select value={currency} onValueChange={(value: keyof typeof currencies) => setCurrency(value)}>
              <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-900 border-gray-200 dark:border-primary/20 text-gray-900 dark:text-white">
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-zinc-900 border-gray-200 dark:border-primary/20">
                <SelectItem value="KWD">KWD (Kuwaiti Dinar)</SelectItem>
                <SelectItem value="AED">AED (UAE Dirham)</SelectItem>
                <SelectItem value="INR">INR (Indian Rupee)</SelectItem>
                <SelectItem value="USD">USD (US Dollar)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
              <div 
                className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,hsl(var(--primary)/10%)_40%,hsl(var(--primary)/10%)_60%,transparent_60%)] bg-[length:200%_200%] animate-gradient"
              />
            </div>

            <div className="relative p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Core Plan</h3>
                  <p className="text-gray-600 dark:text-gray-400">Perfect for single location gyms</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="p-3 rounded-lg bg-primary/20 text-primary"
                >
                  <CreditCard className="h-6 w-6" />
                </motion.div>
              </div>
              
              <div className="mb-8">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {getPrice(basePrice)}
                  <span className="text-lg text-gray-500 dark:text-gray-400 ml-2">/year</span>
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400">Per Location</p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Features</h4>
                <ul className="space-y-4">
                  {['Class Management', 'Member Management', 'Instructor Management', 'Point of Sale', 'Inventory Management', 'Online Booking'].map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="mr-3"
                      >
                        <Check className="h-5 w-5 text-primary" />
                      </motion.div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customizations</h4>
                <div className="space-y-3">
                  {customizations.map((customization, index) => (
                    <motion.button
                      key={customization.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => toggleCustomization(customization.name)}
                      className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
                        selectedCustomizations.includes(customization.name)
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 180 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          {selectedCustomizations.includes(customization.name) ? (
                            <X className="h-5 w-5" />
                          ) : (
                            <Plus className="h-5 w-5" />
                          )}
                        </motion.div>
                        <span>{customization.name}</span>
                      </div>
                      <div className="text-right">
                        <div>{getPrice(customization.price)}/month</div>
                        <div className="text-sm text-gray-500">
                          {getCustomizationYearlyPrice(customization.price)}/year
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-8"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Total Yearly</span>
                  <motion.span
                    key={getTotalPrice()}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-primary"
                  >
                    {getTotalPrice()}
                  </motion.span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Includes core plan and selected customizations (yearly)
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}