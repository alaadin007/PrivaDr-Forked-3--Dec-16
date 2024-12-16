import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap, Stethoscope } from "lucide-react"
import { AffiliationLogos } from "./affiliation-logos"

interface DoctorProfileProps {
  name: string
  title: string
  image: string
  about: string[]
  expertise: string[]
  qualifications: string[]
  memberships?: string[]
  registrations?: string[]
}

export function DoctorProfile({ 
  name, 
  title, 
  image, 
  about, 
  expertise, 
  qualifications,
  memberships = [],
  registrations = []
}: DoctorProfileProps) {
  return (
    <>
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            alt="Medical background"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {name}
            </h1>
            <p className="text-xl text-gray-200">
              {title}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="sticky top-24">
                <Image
                  src={image}
                  alt={name}
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
                <div className="mt-6">
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <p className="text-muted-foreground">{title}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">About</h3>
                <div className="prose dark:prose-invert max-w-none">
                  {about.map((paragraph, index) => (
                    <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {expertise.map((item, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center space-x-3">
                        <Stethoscope className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Education & Qualifications</h3>
                <div className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <span>{qualification}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {memberships && memberships.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Professional Memberships</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {memberships.map((membership, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-primary" />
                          <span>{membership}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {registrations && registrations.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Professional Registrations</h3>
                  <div className="space-y-4">
                    {registrations.map((registration, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center space-x-3">
                          <BookOpen className="h-5 w-5 text-primary" />
                          <span>{registration}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <AffiliationLogos />
    </>
  )
}