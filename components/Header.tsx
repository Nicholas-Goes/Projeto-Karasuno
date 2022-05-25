import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function Header() {
  const [black, setBlack] = useState(false);

  const changeBackground = () => {
      if(window.scrollY >= 40) {
          setBlack(true);
      } else {
          setBlack(false);
      }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])
  
  return (
    <header className={black ? 'bg-black flex justify-between p-5 max-w-7xl mx-auto' : 'bg-transparent flex justify-between max-w-7xl p-5 mx-auto'}>
        <div className='flex items-center space-x-5'>
            <Link href="/">
                <Image 
                    className='w44 object-contain cursor-pointer'
                    src="/volleyball.png" 
                    alt="logo"
                    width="44"
                    height="44"
                />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5'>
                <h3>About</h3>
                <h3>Team</h3>
                <h3>Players</h3>
            </div>
        </div>
        <div className='flex items-center space-x-5 text-orange-600'>
            <h3>Sign in</h3>
            <h3 className='border px-4 py-1 rounded-full border-orange-600'>Contact Us</h3>
        </div>
    </header>
  )
}

export default Header