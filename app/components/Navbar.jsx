'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from './Tailwind_CSS_Logo.svg.png'
import Person from './person.svg'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav>
        <Image 
          src={Logo}
          alt='navbar logo'
          width={70}
          quality={100}
        />
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Dashboard</Link>
        <Link className={`link ${pathname === '/tickets' ? 'active' : ''}`} href="/tickets">tickets</Link>
        <Link className='link ml-auto' href="/account">
          <Image 
            src={Person}
            alt='person icon'
            width={30}
            quality={30}
          />
        </Link>
    </nav>
  )
}

