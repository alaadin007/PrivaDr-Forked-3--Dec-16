import { MessageCircle, Mail } from 'lucide-react'

export function NavbarContact() {
  return (
    <div className="flex items-center space-x-6">
      <a 
        href="mailto:info@privadr.com"
        className="hidden md:flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <Mail className="h-5 w-5" />
        <span>info@privadr.com</span>
      </a>

      <a 
        href="https://wa.me/447778435806"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-sm font-medium text-green-500 hover:text-green-400 transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Quick Chat</span>
      </a>
    </div>
  )
}