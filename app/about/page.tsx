import Awards from "@/components/about/Awards";
import BelowSec from "@/components/about/BelowSec";
import PaahiStory from "@/components/about/PaahiStory";
import TeamSection from "@/components/about/Team";
import VisionSection from "@/components/about/VisionSection";
export default function Ecommerce() {
  return (
    <div>
      <PaahiStory />
      <VisionSection />
      <BelowSec
        dec={2}
        title="Turning Ideas Into Visual Experiences"
        desc="Our mission at Paahi Productions is to transform ideas into powerful
            visual experiences that amplify brand value and convert audiences.
            Through specialised expertise in product, fashion, and high-impact
            video production, we deliver work that blends creativity, precision,
            and strategic intent. Powered by advanced technology and a
            passionate, detail-driven team, we are committed to exceeding
            expectations, enhancing brand presence, and enabling our clients to
            stand out in an increasingly competitive digital landscape."
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
