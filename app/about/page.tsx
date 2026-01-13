"use client";

import dynamic from "next/dynamic";

// Dynamic imports
const PaahiStory = dynamic(() => import("@/components/about/PaahiStory"), {
  ssr: false,
});

const BelowSec = dynamic(() => import("@/components/about/BelowSec"), {
  ssr: false,
});

const Awards = dynamic(() => import("@/components/about/Awards"), {
  ssr: false,
});

const TeamSection = dynamic(() => import("@/components/about/Team"), {
  ssr: false,
});

// Optional (if re-enabled later)
// const VisionSection = dynamic(
//   () => import("@/components/about/VisionSection"),
//   { ssr: false }
// );

export default function Ecommerce() {
  return (
    <div>
      <PaahiStory />

      <BelowSec
        dec={2}
        title="Who We Are"
        desc="Paahi Productions is a premium visual production studio shaping how modern brands are seen, felt, and remembered. Based in Bengaluru and trusted by emerging and established leaders across fashion, jewellery, lifestyle, F&B, and D2C, we specialise in crafting striking imagery that builds desire and drives business growth. Our approach blends refined aesthetics, deep brand understanding, and world-class production standards to deliver visuals that elevate positioning and convert customers. For brands aiming to scale, differentiate, and look unmistakably premium, Paahi Productions is more than a studio, we’re your creative partner in building a powerful visual identity."
        image="/abt-6.jpg"
      />

      {/* <VisionSection /> */}

      <BelowSec
        title="The Vision That Drives Our Craft"
        desc="Our vision at Paahi Productions is to be Bengaluru’s leading premium media production house, redefining the standards of product photography, videography, and creative visual storytelling. We aspire to shape how modern brands are perceived by crafting visuals that inspire desire, elevate identity, and drive measurable business impact. By consistently innovating and delivering excellence, we aim to become the trusted creative partner for brands that seek to lead, not follow."
        image="/abt.jpg"
      />

      <BelowSec
        dec={2}
        title="Turning Ideas Into Visual Experiences"
        desc="Our mission at Paahi Productions is to transform ideas into powerful visual experiences that amplify brand value and convert audiences. Through specialised expertise in product, fashion, and high-impact video production, we deliver work that blends creativity, precision, and strategic intent. Powered by advanced technology and a passionate, detail-driven team, we are committed to exceeding expectations, enhancing brand presence, and enabling our clients to stand out in an increasingly competitive digital landscape."
        image="/assets/brand/brand_wwo.jpg"
      />

      <BelowSec
        title="Our Creative Code"
        image="/abt-4.jpg"
        desc="We pursue excellence with uncompromising attention to detail, ensuring each project reflects precision, polish, and professionalism. Driven by innovation, we continuously explore new techniques and ideas to craft visuals that remain modern and ahead of industry trends. We believe in collaboration, working closely with clients to bring shared visions to life with intention and clarity. Integrity guides every interaction, built on transparency and trust. Rooted in creativity, we transform ideas into compelling stories that inspire emotion. And through adaptability, we stay agile in a fast-evolving visual landscape, keeping our clients positioned for success."
      />

      <Awards />
      <TeamSection />
    </div>
  );
}
