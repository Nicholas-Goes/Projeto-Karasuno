import React from 'react'
import Image from 'next/image'

function Games() {
  return (
    <section id='Games' className='flex items-center justify-center flex-col bg-zinc-900 p-16'>
      <h1 className='text-4xl text-white p-8'>Games</h1>
      <ul className='grid gap-x-8 gap-y-4 grid-cols-1 lg:grid-cols-3'>
        <li className='bg-white text-center pb-4'>
          <Image
            src='/player.png'
            alt='Games image'
            width='512'
            height='256'       
          />
          <h3 className='text-2xl'>Game Title</h3>
          <sub>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque, porro nostrum ipsum, est enim libero aliquam quam quod vero fuga quidem doloremque voluptates at odit, repellat unde sint tenetur!</sub>         
        </li>
        <li className='bg-white text-center pb-4'>
          <Image
            src='/player.png'
            alt='Games image'
            width='512'
            height='256'       
          />
          <h3 className='text-2xl'>Game Title</h3>
          <sub>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque, porro nostrum ipsum, est enim libero aliquam quam quod vero fuga quidem doloremque voluptates at odit, repellat unde sint tenetur!</sub>         
        </li>
        <li className='bg-white text-center pb-4'>
          <Image
            src='/player.png'
            alt='Games image'
            width='512'
            height='256'       
          />
          <h3 className='text-2xl'>Game Title</h3>
          <sub>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque, porro nostrum ipsum, est enim libero aliquam quam quod vero fuga quidem doloremque voluptates at odit, repellat unde sint tenetur!</sub>         
        </li>
      </ul>
    </section>
  )
}

export default Games