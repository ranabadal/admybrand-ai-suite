'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import PricingCard, { Tier } from './PricingCard'
import { Crown, Zap, Rocket } from 'lucide-react'

const tiers: Tier[] = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI marketing',
    features: [
      '1 workspace',
      '5 AI campaigns per month',
      'Basic analytics dashboard',
      'Email support',
      'Standard templates',
    ],
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Everything you need to scale your marketing with AI',
    features: [
      'Everything in Starter',
      'Unlimited AI campaigns',
      'Advanced A/B testing',
      'Real-time optimization',
      'Priority support',
      'Custom integrations',
      'Advanced analytics',
    ],
    highlighted: true,
    icon: Rocket,
    gradient: 'from-purple-500 to-pink-500',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Advanced features and dedicated support for large teams',
    features: [
      'Everything in Professional',
      'Custom AI model training',
      'Dedicated account manager',
      'SSO & advanced security',
      '24/7 phone support',
      'White-label options',
      'API access',
      'Custom reporting',
    ],
    icon: Crown,
    gradient: 'from-yellow-500 to-orange-500',
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-transparent to-brand/10" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl font-black md:text-7xl mb-6">
            Simple&nbsp;
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your business. All plans include our core AI features.
          </p>

          {/* Billing toggle */}
          <div className="glass p-2 rounded-2xl inline-flex items-center gap-4">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                !isAnnual 
                  ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all relative ${
                isAnnual 
                  ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-accent-pink text-xs px-2 py-1 rounded-full text-white font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <PricingCard tier={tier} isAnnual={isAnnual} />
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">14 Days</div>
                <div className="text-white/70">Free Trial</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">No Lock-in</div>
                <div className="text-white/70">Cancel Anytime</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-white/70">Expert Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
