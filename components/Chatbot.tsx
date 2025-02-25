"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, X, Loader2, Bot, User } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

type Message = {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm here to help you with any questions about Move. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(inputValue),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('pricing') || lowerInput.includes('cost')) {
      return "Our pricing starts at $199/month for the core plan. Would you like me to show you our detailed pricing options?"
    }
    if (lowerInput.includes('features') || lowerInput.includes('what can')) {
      return "Move offers comprehensive features including member management, class scheduling, payment processing, and analytics. Which feature would you like to learn more about?"
    }
    if (lowerInput.includes('trial') || lowerInput.includes('try')) {
      return "Yes! We offer a 14-day free trial with full access to all features. Would you like me to help you get started?"
    }
    if (lowerInput.includes('support') || lowerInput.includes('help')) {
      return "We provide 24/7 support through chat, email, and phone. Our average response time is under 5 minutes!"
    }
    
    return "I'd be happy to help you with that. Could you please provide more details about what you'd like to know?"
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-primary/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Move Assistant
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Online • Replies instantly
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`p-2 rounded-lg ${
                    message.type === 'user' ? 'bg-primary/10' : 'bg-gray-100 dark:bg-zinc-800'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-5 w-5 text-primary" />
                    ) : (
                      <Bot className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : ''}`}>
                    <div className={`px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white'
                    }`}>
                      {message.content}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-gray-100 dark:bg-zinc-800">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="bg-gray-50 dark:bg-zinc-800/50"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}