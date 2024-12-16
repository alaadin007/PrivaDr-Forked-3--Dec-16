import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap, Stethoscope } from "lucide-react"
import { AffiliationLogos } from "./affiliation-logos"

export function DoctorProfiles() {
  const qualifications = [
    "F.R.C.P.C.H. Fellow of the Royal College of Paediatrics and Child Health (UK), 1997",
    "F.R.C.P. Fellow of the Royal College of Physicians in Ireland, 1996",
    "M.R.C.P.I. (Paediatrics) Member of the Royal College of Physicians in Ireland, 1986",
    "D.C.H. Diploma in Child Health, University College Dublin, 1980",
    "M.B.B.S. Bachelor of Medicine and Bachelor of Surgery, Nishtar Medical College, 1973"
  ]

  const expertise = [
    "Autism Spectrum Disorder (ASD)",
    "ADHD",
    "Developmental Delays",
    "Learning Disabilities",
    "Speech and Language Disorders",
    "Multidisciplinary Development Assessments"
  ]

  return (
    <>
      {/* Hero Section */}
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
              Meet Our Expert Doctor
            </h1>
            <p className="text-xl text-gray-200">
              Dedicated to providing exceptional care with decades of experience
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Profile Image Column */}
            <div>
              <div className="sticky top-24">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
                  alt="Dr. M. Anwar Haq"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
                <div className="mt-6">
                  <h2 className="text-2xl font-bold">Dr. M. Anwar Haq</h2>
                  <p className="text-muted-foreground">
                    MBBS, DCH, MRCPI, FRCPI, FRCPCH (UK)
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-2 space-y-12">
              {/* About Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6">About</h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every child is unique, with their own strengths and challenges. In understanding 
                    conditions like autism and ADHD, it's not just about diagnosing a disorder; it's 
                    about recognizing each child's potential and supporting their journey to thrive. 
                    With the right guidance and compassion, we can help them unlock doors to a brighter future.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    Dr. Anwar Haq is a distinguished pediatrician with over 40 years of clinical experience, 
                    specializing in developmental and neurodevelopmental disorders such as autism spectrum 
                    disorder (ASD), ADHD, and learning disabilities. He is a Fellow of the Royal College 
                    of Physicians in Ireland and the Royal College of Paediatrics and Child Health (UK), 
                    reflecting his dedication to advancing child healthcare.
                  </p>
                </div>
              </div>

              {/* Experience Section */}
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

              {/* Education Section */}
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

              {/* Professional Memberships */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Professional Memberships</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Member, Royal College of Physicians of Ireland (MRCPI)</span>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Fellow, Royal College of Paediatrics and Child Health (FRCPCH), UK</span>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Fellow, Royal College of Physicians of Ireland (FRCP)</span>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Member, British Association of Community Child Health (BACCH)</span>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Registrations */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Professional Registrations</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>GMC UK Full Registration (Specialist in Paediatrics), GMC No. 5109985</span>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Specialist Register in Paediatrics, Ireland, Reg. No. 10269</span>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <AffiliationLogos />
    </>
  )
}