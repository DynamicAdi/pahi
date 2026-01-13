"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically imported components
const Hero = dynamic(() => import("@/components/landing_page/Hero"), {
  ssr: false,
});

const Philosphy = dynamic(() => import("@/components/abt"), {
  ssr: false,
});

const SixItemsGrid = dynamic(
  () => import("@/components/landing_page/SixItemsGrid"),
  { ssr: false }
);

const Feedbacks = dynamic(
  () => import("@/components/landing_page/Feedbacks"),
  { ssr: false }
);

const OurClients = dynamic(
  () => import("@/components/landing_page/OurClients"),
  { ssr: false }
);

// Optional (if you plan to re-enable it later)
// const OurWorkSection = dynamic(
//   () => import("@/components/landing_page/OurWorkSection"),
//   { ssr: false }
// );

export default function Home() {
  return (
    <>
      {/* Overlay animations */}
      <div className="absolute min-h-screen! h-full! w-full opacity-0 bg-black! dark:bg-white! z-[999]! inset-0 transition-all animate-click-picture h-full w-full" />
      <div className="absolute min-h-screen! inset-0 h-full! w-full z-[99] animate-load-in transition-all" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 4,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Hero />
        <Philosphy />
        {/* <OurWorkSection /> */}
        <SixItemsGrid />
        <Feedbacks />
        <OurClients />
      </motion.div>
    </>
  );
}
