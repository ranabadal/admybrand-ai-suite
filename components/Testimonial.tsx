'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import TestimonialCard from './TestimonialCard'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Button from './Button'

const testimonials = [
  {
    quote:
      'ADmyBRAND AI Suite cut our acquisition cost by 42% in the first month!',
    name: 'Sarah Chen',
    role: 'Head of Growth, Wave.io',
    img: '/avatars/img1.jpg',
  },
  {
    quote:
      'The generative creatives are insane—we shipped 10 campaigns without a designer.',
    name: 'Miguel Torres',
    role: 'CMO, Finverse',
    img: '/avatars/img2.jpg',
  },
  {
    quote: 'We replaced three tools and saved $12k a year. Worth every cent.',
    name: 'Elena Smith',
    role: 'CEO, BloomTech',
    img: '/avatars/img3.jpg',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          Customers love us
        </h2>

        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <TestimonialCard {...testimonials[index]} />
        </motion.div>

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="ghost" size="sm" onClick={prev}>
            <ChevronLeft />
          </Button>
          <Button variant="ghost" size="sm" onClick={next}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
