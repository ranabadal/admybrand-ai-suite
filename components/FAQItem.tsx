'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQItem({
  q,
  a,
}: {
  q: string
  a: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b border-white/10 py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{q}</h3>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>
      {open && <p className="mt-2 text-white/80">{a}</p>}
    </div>
  )
}
