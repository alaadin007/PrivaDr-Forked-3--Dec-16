import Image from 'next/image'
import Link from 'next/link'
import { Card } from "@/components/ui/card"
import { getDoctorBySlug } from '@/lib/data/doctors'

interface BlogAuthorProps {
  authorSlug: string
}

export function BlogAuthor({ authorSlug }: BlogAuthorProps) {
  const doctor = getDoctorBySlug(authorSlug)
  
  if (!doctor) return null

  return (
    <Card className="p-6 bg-card/50">
      <div className="flex items-start space-x-4">
        <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={doctor.image}
            alt={`${doctor.name} - Profile photo`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <Link 
            href={`/doctors/${doctor.slug}`}
            className="text-lg font-semibold hover:text-primary transition-colors"
          >
            {doctor.name}
          </Link>
          <p className="text-muted-foreground">{doctor.title}</p>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {doctor.about[0]}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {doctor.expertise.slice(0, 3).map((expertise, index) => (
                <span 
                  key={index}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                >
                  {expertise}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}