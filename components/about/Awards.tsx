import { FolderOpenDot, LucideAward, Puzzle } from "lucide-react";
import React from "react";

function Awards() {
  return (
    <div className="py-12">
      {/* Title: responsive sizes, lg unchanged */}
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-serif mb-8 md:mb-12 lg:mb-16">
        Crafting world-class visuals for brands that don’t compete — They Lead.
      </h1>

      {/* Container: mobile/tablet stack, lg keeps original flex row + px-48 */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-10 items-center px-6 md:px-12 lg:px-48">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 lg:w-1/3 h-56 md:h-72 bg-neutral-300 dark:bg-neutral-900 flex justify-center items-start flex-col p-6">
          <LucideAward
            size={40}
            className="mb-4 text-black dark:text-white"
            strokeWidth={1.3}
            aria-hidden="true"
          />
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif text-black dark:text-white">100</h1>
          <h3 className="dark:text-neutral-400 text-neutral-700 md:text-3xl lg:text-3xl font-serif">Awards</h3>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 lg:w-1/3 h-56 md:h-72 bg-neutral-300 dark:bg-neutral-900 flex justify-center items-start flex-col p-6">
          <Puzzle
            size={40}
            className="mb-4 text-black dark:text-white"
            strokeWidth={1.3}
            aria-hidden="true"
          />
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif text-black dark:text-white">56</h1>
          <h3 className="dark:text-neutral-400 text-neutral-700 md:text-3xl lg:text-3xl font-serif">Exhibitions</h3>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 lg:w-1/3 h-56 md:h-72 bg-neutral-300 dark:bg-neutral-900 flex justify-center items-start flex-col p-6">
          <FolderOpenDot
            size={40}
            className="mb-4 text-black dark:text-white"
            strokeWidth={1.3}
            aria-hidden="true"
          />
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif text-black dark:text-white">287</h1>
          <h3 className="dark:text-neutral-400 text-neutral-700 md:text-3xl lg:text-3xl font-serif">Projects</h3>
        </div>
      </div>
    </div>
  );
}

export default Awards;
