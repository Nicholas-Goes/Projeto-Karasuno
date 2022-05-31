import React from 'react'

function Banner() {
  return (
    <div className='py-96 bg-hero-pattern bg-center bg-cover'>
        <div className='px-10 space-y-5'>
            <div className='flex flex-col items-center '>
                <h2 className='tracking-wider text-white'>Volleyball Club</h2>
                <h1 className='text-6xl max-w-xl font-serif tracking-wider text-white'>Let's <span className='text-orange-600'>Fly</span> With <span className='text-orange-600'>Us</span></h1>
                <button className='px-10 py-4 my-6 bg-orange-600  text-xl rounded-lg '>View More</button>
            </div>
        </div>
    </div>
  )
}

export default Banner