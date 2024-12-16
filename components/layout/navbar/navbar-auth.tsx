import Link from 'next/link'
import { MessageCircle, Mail, Phone } from 'lucide-react'

export function NavbarAuth() {
  return (
    <div className="flex items-center space-x-6">
      <a 
        href="mailto:contact@privadr.com"
        className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <Mail className="h-5 w-5" />
        <span>contact@privadr.com</span>
      </a>
      
      <a 
        href="tel:08008600178"
        className="hidden md:flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <Phone className="h-5 w-5" />
        <span>0800 860 0178</span>
      </a>

      <a 
        href="https://wa.me/447778435806"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-sm font-medium text-green-500 hover:text-green-400 transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden md:inline">WhatsApp</span>
        <span className="md:hidden">Quick Chat</span>
      </a>
    </div>
  )
}