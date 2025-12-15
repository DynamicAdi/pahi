import React from 'react'
import ImageSpotlight from './image-spotlight'

function Philosphy() {
  return (
          <section className="py-24 px-6 md:px-12 bg-offwhite dark:bg-neutral-950">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* <h2 className="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">Our Philosophy</h2> */}
            <p className="font-serif text-3xl md:text-5xl leading-tight dark:text-white text-charcoal">
              For us, it starts by listening to our clients...
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
              We believe that true luxury lies in the details. At Paahi, we don't just capture images; we translate your brand's essence into visual narratives that resonate. From the initial concept to the final color grade, our process is collaborative, meticulous, and driven by a vision of perfection.
            </p>
          </div>

                    <div className="relative justify-center sm:hidden flex">
             <ImageSpotlight
                src="https://picsum.photos/seed/philosophy/800/600"
                alt="Studio Philosophy"
                orientation="landscape"
                width={390}
                height={400}
                config={{ spotlightSize: 120 }}
             />
          </div>

          <div className="relative justify-center hidden sm:flex">
             <ImageSpotlight
                src="https://picsum.photos/seed/philosophy/800/600"
                alt="Studio Philosophy"
                orientation="landscape"
                width={600}
                height={400}
                config={{ spotlightSize: 120 }}
             />
          </div>

        </div>
      </section>
  )
}

export default Philosphy