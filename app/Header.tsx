import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-blue-800 text-white'>
            <Link href="/" className='rounded-lg bg-white text-blue-500'>Home</Link>
        </div>
    )
}

export default Header