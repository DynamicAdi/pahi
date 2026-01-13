export default function HowWeWork() {
  const steps = [
    {
      number: "01.",
      title: "Discover",
      desc: "We listen deeply to your brand goals.",
    },
    {
      number: "02.",
      title: "Design",
      desc: "We conceptualize the visual strategy.",
    },
    {
      number: "03.",
      title: "Produce",
      desc: "We execute with top-tier equipment.",
    },
    {
      number: "04.",
      title: "Amplify",
      desc: "We deliver assets ready for impact.",
    },
  ];

  return (
    <section
      className="
        w-full py-24 px-6
        bg-white text-black
        dark:bg-black dark:text-white
      "
    >
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-serif mb-16">
        How We Work
      </h2>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((item, index) => (
          <div key={index} className="relative">
            {/* Top Divider */}
            <span
              className="
                absolute -top-4 left-0 right-0 h-px
                bg-gray-300 dark:bg-gray-700
              "
            ></span>

            <div className="pt-6">
              <p className="text-neutral-400 dark:text-neutral-700 font-serif text-5xl">{item.number}{" "}</p>
              <p
                className="
                  text-gray-600 dark:text-white
                  text-3xl tracking-wider my-1
                "
              >
                  {item.title}
              </p>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
