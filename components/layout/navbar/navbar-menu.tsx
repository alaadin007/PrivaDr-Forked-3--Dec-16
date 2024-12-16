"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, Phone, Mail } from 'lucide-react'

export function NavbarMenu() {
  return (
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
  )
}