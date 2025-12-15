"use client";
import React from "react";
// import IntroAnimation from '../scroll-morph-hero'
import dynamic from "next/dynamic";
const IntroAnimation = dynamic(() => import("../scroll-morph-hero"), {
  // loading: () => <p>Loading...</p>, // Optional custom loading indicator
  ssr: false, // Optional: set to false to render only on the client side
});
const OurWorkSection = () => {
  return (
    <div className="w-full h-[800px] border rounded-lg overflow-hidden relative">
      <IntroAnimation />
    </div>
  );
};

export default OurWorkSection;
