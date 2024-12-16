import Link from 'next/link'

export function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-3xl md:text-4xl font-bold">
            <span className="text-white">PRIVA</span>
            <span className="text-[#4B7BF5]">Dr</span>
            <span className="text-[#4B7BF5]">.</span>
          </span>
        </div>
        <span className="text-xs md:text-sm text-gray-400 tracking-[0.25em] uppercase">
          OF HARLEY STREET
        </span>
      </div>
    </Link>
  )
}