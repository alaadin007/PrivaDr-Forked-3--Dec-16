import Link from 'next/link'
import { Stethoscope } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PRIVA Dr.</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Modern healthcare solutions for the next generation
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Portals</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/patient/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="/doctor/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Doctor Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>8-10 Harley Street</li>
              <li>London, UK</li>
              <li>08008600178</li>
              <li>contact@privadr.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PRIVA Dr. All rights reserved.
        </div>
      </div>
    </footer>
  )
}