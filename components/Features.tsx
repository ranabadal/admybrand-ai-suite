'use client'
import Button from './Button'
import { motion } from 'framer-motion'
import FeatureCard from './FeatureCard'
import {
  BarChart2,
  Cpu,
  Rocket,
  Zap,
  UserCheck,
  TrendingUp,
  Brain,
  Shield,
  Target,
} from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'AI Campaign Genesis',
    description: 'Launch multi-channel campaigns with a single prompt. Our AI understands your brand voice and creates compelling content across all platforms.',
    gradient: 'bg-gradient-to-br from-red-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'Predictive Analytics',
    description: 'See the future of your campaigns before they launch. Advanced ML models predict performance with 94% accuracy.',
    gradient: 'bg-gradient-to-br from-purple-500 to-indigo-500',
  },
  {
    icon: Target,
    title: 'Hyper-Targeting Engine',
    description: 'Reach your perfect audience with laser precision. AI analyzes millions of data points to find your ideal customers.',
    gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart2,
    title: 'Real-time Intelligence',
    description: 'Watch your campaigns optimize themselves in real-time. ROI, CPC, and conversion tracking with millisecond updates.',
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
  },
  {
    icon: Cpu,
    title: 'Creative AI Studio',
    description: 'Generate infinite variations of high-converting ads, copy, and visuals. Never run out of fresh creative content.',
    gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Smart Budget Optimizer',
    description: 'Automatically redistribute spend to winning campaigns and pause underperformers. Maximum ROI, minimum effort.',
    gradient: 'bg-gradient-to-br from-teal-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Connect your entire marketing stack without code. Trigger actions, update CRMs, and sync data automatically.',
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-500',
  },
  {
    icon: UserCheck,
    title: 'Compliance Guardian',
    description: 'Stay compliant with GDPR, CCPA, and platform policies. AI monitors and flags potential issues before they occur.',
    gradient: 'bg-gradient-to-br from-pink-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Fraud Protection',
    description: 'Advanced AI detects and blocks fraudulent clicks, protecting your budget from bots and invalid traffic.',
    gradient: 'bg-gradient-to-br from-gray-500 to-slate-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-accent-purple/5" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="glass px-4 py-2 sm:px-6 sm:py-3 rounded-full inline-flex items-center gap-2 mb-6 sm:mb-8">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent-cyan" />
            <span className="text-xs sm:text-sm font-semibold">Powered by Advanced AI</span>
          </div>
          
          <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight">
            Marketing&nbsp;
            <span className="gradient-text block sm:inline">Superpowers</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Transform your marketing with AI that thinks, learns, and optimizes faster than any human team ever could.
          </p>
        </motion.div>

        {/* Features grid - FIXED mobile responsiveness */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard 
              key={feature.title} 
              delay={i * 0.1} 
              {...feature} 
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="glass-strong p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Ready to experience the future of marketing?
            </h3>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-2">
              Join thousands of marketers who have already transformed their campaigns with AI.
            </p>
            <Button variant="gradient" size="lg" className="w-full sm:w-auto">
              Start Your AI Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
