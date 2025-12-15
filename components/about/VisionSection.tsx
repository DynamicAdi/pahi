import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 transition-colors duration-300">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

        {/* Left Image */}
        <div className="w-full h-full flex justify-center lg:justify-start">
          <Image
            src="/abt.jpg"
            alt="Vision Graphic"
            width={1080}
            height={1080}
            className="w-full max-h-[600px] min-h-full! object-cover"
          />
        </div>

        {/* Right Content Box */}
        <div className="
          bg-gray-100 text-black 
          dark:bg-[#121212] dark:text-white 
           p-10 lg:p-14 shadow-lg 
          border border-black/10 dark:border-white/5
          transition-colors duration-300
        ">
          
          <h2 className="text-2xl md:text-4xl font-serif mb-8">
            The Vision That Drives Our Craft
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            We see a world where brands don't just interrupt, but entertain and inspire.
            Our mission is to turn abstract ideas into tangible, high-fidelity visual
            experiences.
          </p>

          {/* Vision Points */}
          <div className="space-y-7">

            <div className="flex items-center gap-5">
              <span className="h-px w-12 bg-gray-400 dark:bg-gray-600"></span>
              <p className="uppercase tracking-wide text-sm md:text-base text-gray-700 dark:text-gray-300">
                Uncompromising Quality
              </p>
            </div>

            <div className="flex items-center gap-5">
              <span className="h-px w-12 bg-gray-400 dark:bg-gray-600"></span>
              <p className="uppercase tracking-wide text-sm md:text-base text-gray-700 dark:text-gray-300">
                Agile Production
              </p>
            </div>

            <div className="flex items-center gap-5">
              <span className="h-px w-12 bg-gray-400 dark:bg-gray-600"></span>
              <p className="uppercase tracking-wide text-sm md:text-base text-gray-700 dark:text-gray-300">
                Technology Forward
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
