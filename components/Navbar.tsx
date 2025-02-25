"use client"

import { useState, useEffect } from 'react'
import { Menu, X, Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-lg py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Move</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" className="text-gray-900 dark:text-white hover:bg-primary/10">
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-900 dark:text-white hover:bg-primary/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden fixed left-0 right-0 px-4 transition-all duration-300 ease-in-out overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-primary/10",
          isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-4 py-6">
            <a
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-2 rounded-md hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-2 rounded-md hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-2 rounded-md hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-2 rounded-md hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-4 border-t border-primary/10">
              <Button variant="ghost" className="text-gray-900 dark:text-white w-full hover:bg-primary/10">
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}