import { IVHero } from "@/components/services/iv-therapy/iv-hero"
import { IVServices } from "@/components/services/iv-therapy/iv-services"
import { IVMobile } from "@/components/services/iv-therapy/iv-mobile"

export function generateStaticParams() {
  return [{ slug: 'iv-therapy' }]
}

export default function IVTherapyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <IVHero />
      <IVServices />
      <IVMobile />
    </main>
  )
}