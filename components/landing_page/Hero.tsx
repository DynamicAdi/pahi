import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='w-screen h-screen relative overflow-hidden'>
        <div className="z-10 w-full h-full absolute inset-0 bg-black/40 flex items-center justify-center flex-col gap-5">
            <h1 className='font-serif sm:text-7xl text-4xl uppercase italic text-center'>Our Work Reflects Our People</h1>
            <h1 className='font-serif sm:text-4xl text-xl uppercase italic text-center'>Passionate, Precise, and Uncompromising.</h1>
              <div className="mt-6">
                <Button className="w-full cursor-pointer bg-black text-white dark:bg-white dark:text-black px-10 min-h-13 text-base font-medium rounded-none hover:bg-black hover:text-white  transition">
                  VIEW OUR WORK
                </Button>
              </div>
        </div>
        <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-full -z-1 object-cover"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
    </div>
  )
}

export default Hero