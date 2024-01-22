import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from './Tailwind_CSS_Logo.svg.png'

export default function Navbar() {
  return (
    <nav>
        <Image 
          src={Logo}
          alt='navbar logo'
          width={70}
          quality={100}
        />
        <h1>navbar</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">tickets</Link>
    </nav>
  )
}

