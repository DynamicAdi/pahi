import Image from "next/image";

export default function BelowSec({
  dec,
  title,
  desc,
  image,
}: {
  dec?: number;
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 transition-colors duration-300">
      {/* 
        - Mobile: stacked column (image above content)
        - md/tablet: side-by-side
        - lg/desktop: EXACTLY your original layout (including reverse when `dec` is truthy)
      */}
      <div
        className={`flex flex-col md:flex-row justify-start gap-5 items-center ${
          dec ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Left Image (keeps your original lg justification) */}
        <div className={`w-full md:w-1/2 lg:w-full h-auto flex justify-center lg:justify-start`}>
          <Image
            src={image}
            alt="Vision Graphic"
            width={1080}
            height={1080}
            // Fixed invalid classname and made sizing responsive without altering lg behavior
            className="w-full md:w-[90%] lg:w-auto max-h-[60vh] lg:max-h-none object-cover"
          />
        </div>

        {/* Right Content Box (keeps your original w-5/6 at lg) */}
        <div
          className="
            w-full
            md:w-1/2
            lg:w-5/6
            bg-gray-100 text-black
            dark:bg-[#121212] dark:text-white
            p-8 md:p-10 lg:p-14 shadow-lg
            border border-black/10 dark:border-white/5
            transition-colors duration-300
          "
        >
          <h2 className="text-2xl md:text-4xl font-serif mb-8">{title}</h2>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
}
