import React from "react";
import TestimonialCard from "../TestimonialCard";

const Feedbacks = () => {
  return (
    <section
      className="
        md:max-w-7xl mx-auto 
        py-20 max-md:px-5
        bg-white text-black 
        dark:bg-neutral-950 dark:text-white
      "
    >
      <h2 className="text-4xl max-md:text-center md:text-6xl font-extrabold mb-16 leading-tight">
        WHAT OUR <span className="text-gray-600 dark:text-gray-400">CLIENT</span> SAYS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <TestimonialCard
          title="Anshul"
          description="We entrusted Paahi Productions with capturing the essence of our fashion brand, and the results were simply breathtaking. Their Fashion Photography services didn't just document our clothing; they encapsulated the soul of our brand. The team's passion, attention to detail, and ability to create visual narratives that resonate with our audience have been instrumental in elevating our brand's identity."
        />
        <TestimonialCard
          title="Prabhakar"
          description="Our experience with Paahi Productions was transformative for our online store.
Their Ecommerce Photography not only showcased our products flawlessly but also transformed our entire brand image. The level of detail, creativity, and professionalism exceeded our expectations. Paahi Productions' commitment to excellence truly made our products stand out in the competitive digital marketplace."
        />
      </div>
    </section>
  );
};

export default Feedbacks;
