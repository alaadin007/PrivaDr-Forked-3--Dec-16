import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ContactSection } from "@/components/sections/contact-section"
import { BlogSection } from "@/components/sections/blog-section"
import { DoctorsList } from "@/components/doctors/doctors-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <DoctorsList />
      <BlogSection />
      <ContactSection />
    </div>
  )
}