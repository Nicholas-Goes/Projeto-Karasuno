import React from 'react'
import Image from 'next/image'

function Team() {
  return (
      <section className='p-16 flex justify-center items-center flex-col bg-hero-pattern bg-center bg-cover'>
        <h1 className='p-16 text-white text-6xl'>Team Members</h1>
        <ul className='grid gap-x-8 gap-y-4 grid-cols-6'>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
              className='md:w-32 md:h-32'
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-2'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
                   
        </ul>        
      </section>
  )
}

export default Team