import React from 'react'

function Banner() {
  return (
    <section className='py-96 bg-zinc-900'>
        <div className='px-10 space-y-5'>
            <div className='flex flex-col items-center '>
                <h2 className='tracking-wider text-white'>Volleyball Club</h2>
                <h1 className='text-5xl max-w-xl font-serif tracking-wider text-white'>Let's <span className='text-orange-600'>Fly</span> With <span className='text-orange-600'>Us</span></h1>
            </div>
        </div>
    </section>
  )
}

export default Banner