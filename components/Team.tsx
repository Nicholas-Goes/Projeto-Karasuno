import React from 'react'
import Image from 'next/image'

function Team() {
  return (
      <section className='flex justify-center items-center flex-col bg-zinc-900'>
        <h1 className='p-8 text-white'>Team Members</h1>
        <ul className='flex items-center justify-center list-none'>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
              className='md:w-32 md:h-32'
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>           
        </ul>
        <ul className='flex items-center justify-center list-none'>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>                   
        </ul>
        <h1 className='p-8 text-white'>Management</h1>
        <ul className='flex items-center justify-center list-none'>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li>
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li> 
          <li className='flex flex-col items-center justify-center p-6'>
            <Image
              src="/player.png"
              alt="player icon"
              width="128"
              height="128"
            />
            <a href="#" className='text-white p-6'>Player Name</a>
          </li> 
        </ul>
        <h1 className='p-8 text-white'>Coach</h1>
        <ul className='flex items-center justify-center list-none'>
          <li className='flex flex-col items-center justify-center p-6'>
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