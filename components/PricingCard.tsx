'use client'
import { motion } from 'framer-motion'
import { Check, LucideIcon } from 'lucide-react'
import Button from './Button'

export interface Tier {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  badge?: string
  icon: LucideIcon
  gradient: string
}

export default function PricingCard({ 
  tier, 
  isAnnual = false 
}: { 
  tier: Tier
  isAnnual?: boolean 
}) {
  const Icon = tier.icon

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`relative ${tier.highlighted ? 'z-10' : ''}`}
    >
      {/* Popular badge */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className={`bg-gradient-to-r ${tier.gradient} px-6 py-2 rounded-full text-white text-sm font-bold shadow-lg`}>
            {tier.badge}
          </div>
        </div>
      )}

      <div className={`glass-strong p-8 h-full relative overflow-hidden ${
        tier.highlighted ? 'border-2 border-brand shadow-2xl shadow-brand/20' : ''
      }`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-5`} />
        
        {/* Header */}
        <div className="relative z-10 text-center mb-8">
          <div className={`w-16 h-16 bg-gradient-to-br ${tier.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
          <p className="text-white/70 text-sm mb-6">{tier.description}</p>
          
          <div className="flex items-baseline justify-center gap-2">
            {tier.price !== 'Custom' ? (
              <>
                <span className="text-5xl font-black gradient-text">
                  {isAnnual && tier.price !== 'Custom' ? 
                    `$${Math.round(parseInt(tier.price.replace('$', '')) * 0.8)}` : 
                    tier.price
                  }
                </span>
                <span className="text-white/60">{tier.period}</span>
              </>
            ) : (
              <span className="text-4xl font-black gradient-text">Contact Us</span>
            )}
          </div>
          
          {isAnnual && tier.price !== 'Custom' && (
            <div className="text-sm text-accent-pink font-semibold mt-2">
              Save ${Math.round(parseInt(tier.price.replace('$', '')) * 0.2 * 12)}/year
            </div>
          )}
        </div>

        {/* Features */}
        <div className="relative z-10 mb-8">
          <ul className="space-y-4">
            {tier.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className={`bg-gradient-to-br ${tier.gradient} rounded-lg p-1 mt-1`}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-white/90 text-sm leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="relative z-10">
          <Button 
            variant={tier.highlighted ? 'gradient' : 'outline'} 
            size="lg" 
            className="w-full"
          >
            {tier.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
