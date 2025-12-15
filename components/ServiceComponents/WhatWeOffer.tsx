import { Check } from "lucide-react";
import ImageSpotlight from "../image-spotlight";

export default function WhatWeOffer({ picture }: { picture: string }) {
  return (
    <section className="w-full bg-white dark:bg-black py-24 px-6 transition-colors duration-300">
      <div className="md:max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 max-md:place-items-center items-end">

        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-black dark:text-gray-200 mb-4 transition-colors duration-300">
            What We Offer
          </h2>

          <p className="text-gray-600 dark:text-gray-400 md:max-w-md mb-10 transition-colors duration-300">
            We bring a specialized approach to e-commerce, combining technical
            expertise with creative vision to deliver assets that perform.
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="border border-gray-300 dark:border-gray-700/60 rounded-xl p-6 hover:border-gray-400 dark:hover:border-gray-500/70 transition">
              <Check className="text-gray-700 dark:text-gray-300 mb-4" size={18} />
              <h3 className="text-lg font-serif text-black dark:text-gray-200 mb-1 transition-colors duration-300">
                Studio-Grade Photography
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                Clean, crisp imagery that highlights product quality.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-300 dark:border-gray-700/60 rounded-xl p-6 hover:border-gray-400 dark:hover:border-gray-500/70 transition">
              <Check className="text-gray-700 dark:text-gray-300 mb-4" size={18} />
              <h3 className="text-lg font-serif text-black dark:text-gray-200 mb-1 transition-colors duration-300">
                360° & Interactive
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                Immersive views to increase conversion rates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-300 dark:border-gray-700/60 rounded-xl p-6 hover:border-gray-400 dark:hover:border-gray-500/70 transition">
              <Check className="text-gray-700 dark:text-gray-300 mb-4" size={18} />
              <h3 className="text-lg font-serif text-black dark:text-gray-200 mb-1 transition-colors duration-300">
                Lifestyle & Context
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                Showing your product in its natural environment.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-300 dark:border-gray-700/60 rounded-xl p-6 hover:border-gray-400 dark:hover:border-gray-500/70 transition">
              <Check className="text-gray-700 dark:text-gray-300 mb-4" size={18} />
              <h3 className="text-lg font-serif text-black dark:text-gray-200 mb-1 transition-colors duration-300">
                Detail Close-Ups
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                Macro shots emphasizing texture and features.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full">
          <ImageSpotlight
            src={picture}
            alt="camera"
            config={{
              className:
                "max-sm:max-h-[300px]! max-sm:max-w-[300px]! max-md:max-h-[400px]! max-md:max-w-[400px]!",
            }}
          />
        </div>

      </div>
    </section>
  );
}
