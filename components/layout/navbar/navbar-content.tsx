"use client"

import { NavbarLogo } from './navbar-logo'
import { NavbarMenu } from './navbar-menu'
import { MobileMenu } from './mobile-menu'

export function NavbarContent() {
  return (
    <div className="flex items-center justify-between">
      <NavbarLogo />
      <NavbarMenu />
      <MobileMenu />
    </div>
  )
}