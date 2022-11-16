import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-blue-500'>

    <Link href="/" className="p-5 text-blue-500 bg-white rounded-lg">
        Header
        </Link>
    
    </header>
  )
}

export default Header