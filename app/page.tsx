"use client";
import Feedbacks from "@/components/landing_page/Feedbacks";
// import Hero from "@/components/landing_page/HeroSection";
import OurClients from "@/components/landing_page/OurClients";
import OurWorkSection from "@/components/landing_page/OurWorkSection";
import SixItemsGrid from "@/components/landing_page/SixItemsGrid";
import Image from "next/image";
import {motion} from "framer-motion";
import dynamic from "next/dynamic";
import Philosphy from "@/components/abt";
const Hero = dynamic(() => import('@/components/landing_page/Hero'), {
  // loading: () => <p>Loading...</p>, // Optional custom loading indicator
  ssr: false // Optional: set to false to render only on the client side
});
export default function Home() {
  return (
    <>
    <div className="absolute opacity-0 bg-black! dark:bg-white! z-40! inset-0 transition-all animate-click-picture h-full w-full"></div>
        <div className="absolute inset-0 h-full w-full z-9999 animate-load-in transition-all"></div>
    <motion.div
    initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly down)
      animate={{ opacity: 1, y: 0 }}   // Animate to this state (visible and in place)
      transition={{ 
        delay: 4,                   // Wait for 4 seconds before starting the animation
        duration: 1,                // The animation itself lasts 1 second
        ease: "easeInOut"           // Optional: smooth easing
      }}>
        <Hero/>
        <Philosphy />
        {/* <OurWorkSection/> */}
        <SixItemsGrid/>
        <Feedbacks/>
        <OurClients/>
    </motion.div>
    </>
  );
}
