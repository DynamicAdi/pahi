import React from "react";
import ImageSpotlight from "./image-spotlight";
import Link from "next/link";

function Philosphy() {
  return (
    <section className="py-24 px-6 md:px-12  bg-neutral-950">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-2">
          {/* <h2 className="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">Our Philosophy</h2> */}
          <p className="font-serif text-3xl md:text-5xl leading-tight text-white text-charcoal pb-4">
            For us, it starts by listening to our clients and ends by speaking
            meaningfully to their customers.
          </p>
          <Link href={"/fashion"} className="bg-white w-fit text-black font-medium tracking-wide px-6 py-3 mt-3 hover:bg-neutral-200 transition">
            View our work
          </Link>
        </div>

        <div className="relative justify-center sm:hidden flex">
          <ImageSpotlight
            src="https://picsum.photos/seed/philosophy/800/600"
            alt="Studio Philosophy"
            orientation="landscape"
            width={360}
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
  );
}

export default Philosphy;
