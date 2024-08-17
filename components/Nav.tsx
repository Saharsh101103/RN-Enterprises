import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const companyName = "RN-Enterprises"

function Nav() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md">
    <div className="flex items-center space-x-4">
      <img
        src="/placeholder.svg"
        alt="LOGO"
        width={40}
        height={40}
        style={{ aspectRatio: "40/40", objectFit: "cover" }}
      />
      <span className="text-xl font-bold">{companyName}</span>
    </div>
    <nav className="flex space-x-6">
      <Link href="#" className="text-lg font-semibold" prefetch={false}>
        Home
      </Link>
      <Link href="#" className="text-lg text-gray-600" prefetch={false}>
        Small business
      </Link>
      <Link href="#" className="text-lg text-gray-600" prefetch={false}>
        Partners
      </Link>
      <Link href="#" className="text-lg text-gray-600" prefetch={false}>
        About us
      </Link>
      <Link href="#" className="text-lg text-gray-600" prefetch={false}>
        Case studies
      </Link>
    </nav>
    <Button variant="outline" className="px-4 py-2">
      Sign in
    </Button>
  </header>
  )
}

export default Nav
