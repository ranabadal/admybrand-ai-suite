import Image from 'next/image'
import Card from './Card'

export default function TestimonialCard({
  quote,
  name,
  role,
  img,
}: {
  quote: string
  name: string
  role: string
  img: string
}) {
  return (
    <Card className="text-left">
      <p className="text-lg italic">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-4">
        <Image
          src={img}
          alt={name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <span className="text-sm text-white/60">{role}</span>
        </div>
      </div>
    </Card>
  )
}
