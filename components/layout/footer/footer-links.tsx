import Link from 'next/link'

export function FooterLinks() {
  return (
    <>
      <div className="space-y-4">
        <h4 className="text-sm font-semibold">Quick Links</h4>
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

      <div className="space-y-4">
        <h4 className="text-sm font-semibold">Contact Information</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>8-10 Harley Street</li>
          <li>London, UK</li>
          <li>
            <a 
              href="https://wa.me/447778435806"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              WhatsApp: +44 7778 435806
            </a>
          </li>
          <li>
            <a 
              href="mailto:info@privadr.com"
              className="hover:text-primary transition-colors"
            >
              info@privadr.com
            </a>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold">Patient Resources</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Book an Appointment</li>
          <li>Emergency Care</li>
          <li>Patient Portal</li>
          <li>Provider Portal</li>
        </ul>
      </div>
    </>
  )
}