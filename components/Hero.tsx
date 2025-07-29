'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import { Sparkles, Zap, TrendingUp, Star } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand/30 via-transparent to-accent-purple/30" />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Interactive cursor effect */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-radial from-brand/20 to-transparent rounded-full pointer-events-none blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Main content - REMOVED scroll transforms that were causing disappearing */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass px-6 py-3 mb-8 flex items-center gap-2"
        >
          <Sparkles className="text-accent-pink w-4 h-4" />
          <span className="text-sm font-medium">Now with GPT-4 Turbo Integration</span>
          <Star className="text-accent-cyan w-4 h-4 animate-pulse" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl font-black sm:text-6xl md:text-7xl lg:text-8xl leading-tight max-w-5xl"
        >
          Marketing with&nbsp;
          <span className="gradient-text block">
            AI Superpowers
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-3xl text-lg text-white/90 sm:text-xl font-light leading-relaxed"
        >
          Generate campaigns, optimize spend, and skyrocket ROI with zero manual effort. 
          <span className="text-accent-pink font-semibold"> 10x faster</span> than traditional marketing.
        </motion.p>

        {/* Stats - Better mobile layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center w-full max-w-2xl"
        >
          <div className="glass-strong px-4 py-3 sm:px-6 sm:py-4">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">98%</div>
            <div className="text-xs sm:text-sm text-white/70">Time Saved</div>
          </div>
          <div className="glass-strong px-4 py-3 sm:px-6 sm:py-4">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">5.2x</div>
            <div className="text-xs sm:text-sm text-white/70">ROI Increase</div>
          </div>
          <div className="glass-strong px-4 py-3 sm:px-6 sm:py-4">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">$2M+</div>
            <div className="text-xs sm:text-sm text-white/70">Ad Spend Managed</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Button variant="glow" size="xl" className="group">
            Start Free Trial
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="group">
            Watch Demo
            <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>

        {/* Hero visual - IMPROVED alignment and fixed image path */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, type: "spring", stiffness: 50 }}
          className="mt-16 w-full max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-brand/30 via-accent-purple/30 to-accent-pink/30 rounded-3xl blur-3xl opacity-60 animate-pulse-slow" />
            
            {/* Main image container with better alignment */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              <Image
                src="/dashboard-mock.jpg"  // FIXED: Changed from .jpg to .png
                alt="AI Marketing Dashboard"
                width={1000}
                height={600}
                className="w-full h-auto rounded-xl shadow-2xl"
                style={{ 
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
            
            {/* Floating elements - positioned better for mobile */}
            <motion.div
              className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8 text-accent-cyan" />
            </motion.div>
            
            <motion.div
              className="absolute -top-4 -right-4 sm:-top-12 sm:-right-12 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl"
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-accent-pink" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
