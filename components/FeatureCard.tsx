'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useState } from 'react'

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  gradient,
}: {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  gradient?: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      <div className="glass-strong p-8 h-full relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${gradient || 'bg-gradient-to-br from-brand to-accent-purple'}`}
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
        />
        
        {/* Icon with animation */}
        <motion.div
          animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-6"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-brand to-accent-purple rounded-2xl flex items-center justify-center shadow-lg">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-brand transition-colors">
            {title}
          </h3>
          <p className="text-white/80 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Floating particles */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-brand rounded-full"
                initial={{ 
                  opacity: 0, 
                  x: Math.random() * 200, 
                  y: Math.random() * 200 
                }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  y: [0, -50] 
                }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  )
}
