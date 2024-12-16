import Link from 'next/link'

export function NavbarLinks() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link 
        href="/services" 
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        Services
      </Link>
      <Link 
        href="/doctors" 
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        Our Doctors
      </Link>
      <Link 
        href="/blog" 
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        Blog
      </Link>
      <Link 
        href="/contact" 
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        Contact
      </Link>
    </nav>
  )
}