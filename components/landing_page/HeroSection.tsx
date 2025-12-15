import { Button } from "../ui/button";
import { ArrowDown, LayoutGrid, Store } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen gap-5 overflow-hidden flex flex-col items-center justify-center px-6 lg:px-20 text-black dark:text-white">
      {/* RIGHT CONTROLS */}
      <div className="absolute right-5 top-24 hidden lg:block">
        <div className="relative max-w-14 border border-black/40 dark:border-white/40 flex items-center rounded-md p-2">
          <Button
            variant="ghost"
            className="w-7 flex justify-end items-start text-xl border border-black/40 dark:border-white/40 text-black dark:text-white [clip-path:polygon(0%_0%,_0%_100%,_100%_100%)]"
          >
            +
          </Button>

          <Button
            variant="ghost"
            className="absolute flex w-7 items-end justify-start text-xl bg-black/10 dark:bg-white/20 text-black dark:text-white [clip-path:polygon(100%_0,_0_0,_100%_100%)]"
          >
            −
          </Button>
        </div>

        {/* SIDE TICKS */}
        <div className="mt-4 flex flex-col items-center space-y-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className={`h-0.5 ${
                i % 2 === 0 ? "w-6" : "w-3"
              } bg-black/50 dark:bg-white/60`}
            />
          ))}
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="w-full md:max-w-xl lg:max-w-7xl grid grid-cols-1 md:grid-cols-auto items-center gap-5">
        <div className="flex flex-col">
          <h1 className="font-[Didot] tracking-wide text-center lg:text-left leading-tight text-black dark:text-white">
            <span className="block text-6xl md:text-7xl">TAKE A</span>

            <span className="block text-7xl md:text-8xl mt-4">
              PERFECT
              <span className="inline-block mx-4 text-5xl">→</span>
              SHOT
            </span>
          </h1>
        </div>

        {/* LEFT TEXT + VIDEO */}
        <div className="grid md:grid-cols-2 max-sm:place-items-center">
          <div className="flex flex-col justify-between max-sm:items-center">

            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="max-md:flex hidden w-[380px] md:w-[480px] lg:w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <source src="/mobile.mp4" type="video/mp4" />
            </video>

            <p className="text-lg max-w-md mt-10 opacity-80 leading-relaxed mx-auto lg:mx-0 text-black dark:text-white">
              Our Work Reflects Our People  <br />
              Passionate, Precise, and Uncompromising.
            </p>

            {/* BUTTON */}
            <div className="max-w-80 gap-5 flex flex-col w-full">
              <div className="mt-12">
                <Button className="w-full bg-black text-white dark:bg-white dark:text-black px-10 min-h-13 rounded-full text-base font-medium shadow-lg transition">
                  VIEW OUR WORK
                </Button>
              </div>

              {/* DOWN ARROW */}
              <Button
                variant="ghost"
                className="self-center w-14 h-14 max-md:mt-6 border border-black/40 dark:border-white/40 rounded-full"
              >
                <ArrowDown size={50} />
              </Button>
            </div>
          </div>

          {/* RIGHT VIDEO + MARKS */}
          <div className="relative md:flex-row flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="hidden md:flex w-[380px] md:w-[480px] lg:w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <source src="/desktop.mp4" type="video/mp4" />
            </video>

            {/* LEFT marks */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-3">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-[2px] ${
                    i % 2 === 0 ? "w-10" : "w-6"
                  } bg-black/50 dark:bg-white/60`}
                />
              ))}
            </div>

            {/* RIGHT marks */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-3">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-[2px] ${
                    i % 2 === 0 ? "w-10" : "w-6"
                  } bg-black/50 dark:bg-white/60`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DESCRIPTION */}
      {/* <p className="self-end text-xs max-w-md opacity-70 leading-relaxed hidden lg:block text-black dark:text-white">
        For us, it starts by listening to our clients and ends by speaking meaningfully to their customers.
      </p> */}
    </section>
  );
}
