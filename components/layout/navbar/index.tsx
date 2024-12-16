import { NavbarLogo } from './navbar-logo'
import { NavbarLinks } from './navbar-links'
import { NavbarContact } from './navbar-contact'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/60">
      <div className="container py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <NavbarLogo />
          <NavbarLinks />
          <NavbarContact />
        </div>
      </div>
    </header>
  )
}