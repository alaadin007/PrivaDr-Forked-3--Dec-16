"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, Phone, Mail } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">PRIVA Dr.</span>
              <span className="text-sm text-muted-foreground">OF HARLEY STREET</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center">
              <Menu className="h-5 w-5 mr-2" />
              <span>Services</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>08008600178</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>contact@privadr.com</span>
            </div>
            <Link href="/auth/signin">
              <Button variant="outline" className="flex items-center">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}