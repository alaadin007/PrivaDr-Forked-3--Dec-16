import { FooterLinks } from './footer-links'
import { FooterLogo } from './footer-logo'

export function FooterContent() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FooterLogo />
        <FooterLinks />
      </div>
      <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Healthcare Platform. All rights reserved.
      </div>
    </div>
  )
}