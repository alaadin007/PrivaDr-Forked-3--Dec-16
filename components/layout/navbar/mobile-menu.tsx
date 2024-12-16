"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail, LogIn } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link 
            href="/services" 
            className="flex items-center py-2 text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Menu className="h-5 w-5 mr-2" />
            Services
          </Link>
          <a 
            href="tel:08008600178" 
            className="flex items-center py-2 text-lg hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="h-5 w-5 mr-2" />
            08008600178
          </a>
          <a 
            href="mailto:contact@privadr.com" 
            className="flex items-center py-2 text-lg hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Mail className="h-5 w-5 mr-2" />
            contact@privadr.com
          </a>
          <Link 
            href="/auth/signin" 
            className="mt-4"
            onClick={() => setIsOpen(false)}
          >
            <Button className="w-full" variant="outline">
              <LogIn className="h-5 w-5 mr-2" />
              Sign In
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}