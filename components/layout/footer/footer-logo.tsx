import { Stethoscope } from 'lucide-react'

export function FooterLogo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Stethoscope className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">PRIVA Dr.</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Modern healthcare solutions for the next generation
      </p>
    </div>
  )
}