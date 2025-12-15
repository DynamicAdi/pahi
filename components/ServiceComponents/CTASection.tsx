export default function CTASection() {
  return (
    <section className="w-full bg-white dark:bg-black py-16 px-4 transition-colors duration-300">
      <div className="md:max-w-7xl mx-auto bg-gray-100 dark:bg-neutral-900 rounded-2xl py-10 px-6 flex flex-col items-center text-center gap-6 transition-colors duration-300">
        
        <h2 className="text-black dark:text-white text-xl md:text-2xl font-light tracking-wide transition-colors duration-300">
          Ready to elevate your e-commerce content?
        </h2>

        <button className="bg-black dark:bg-white text-white dark:text-black font-medium tracking-wide px-6 py-3 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition">
          GET A FREE QUOTE
        </button>

      </div>
    </section>
  );
}
