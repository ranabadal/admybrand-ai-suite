import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const button = cva(
  'relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand/50 overflow-hidden group',
  {
    variants: {
      variant: {
        solid: 'bg-gradient-to-r from-brand to-brand-light text-white shadow-lg hover:shadow-brand/25 hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity',
        outline: 'border-2 border-brand/50 text-brand hover:bg-gradient-to-r hover:from-brand/10 hover:to-brand-light/10 hover:border-brand hover:shadow-lg hover:shadow-brand/20',
        ghost: 'text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 backdrop-blur-sm',
        gradient: 'bg-gradient-to-r from-accent-pink via-accent-purple to-brand text-white shadow-xl hover:shadow-2xl hover:shadow-accent-purple/30 hover:scale-105',
        glow: 'bg-gradient-to-r from-brand to-accent-purple text-white shadow-lg hover:shadow-2xl hover:shadow-brand/40 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity animate-pulse-slow',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-2xl',
        xl: 'px-12 py-5 text-xl rounded-3xl',
      },
    },
    defaultVariants: { variant: 'solid', size: 'md' },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  href?: string
  icon?: boolean
}

export default function Button({
  className,
  variant,
  size,
  href,
  children,
  icon = true,
  ...props
}: ButtonProps) {
 const Comp = href ? Link : 'button'  // ✅ Fixed - let TypeScript infer the type

  return (
    <Comp href={href} className={button({ variant, size, className })} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {variant === 'glow' && <Sparkles size={18} className="animate-spin-slow" />}
        {children}
        {icon && !href && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
      </span>
    </Comp>
  )
}
