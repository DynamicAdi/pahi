"use client";

import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import data from "@/data/data";

// Dynamic imports
const HeroSection = dynamic(
  () => import("@/components/ServiceComponents/HeroSection"),
  { ssr: false }
);

const WhatWeOffer = dynamic(
  () => import("@/components/ServiceComponents/WhatWeOffer"),
  { ssr: false }
);

const SelectedWorks = dynamic(
  () => import("@/components/ServiceComponents/SelectedWorks"),
  { ssr: false }
);

const CTASection = dynamic(
  () => import("@/components/ServiceComponents/CTASection"),
  { ssr: false }
);

const ExpandOnHover = dynamic(
  () => import("@/components/ui/ExpandCard"),
  { ssr: false }
);

const BelowSec = dynamic(
  () => import("@/components/about/BelowSec"),
  { ssr: false }
);

export default function Service() {
  const { service }: { service: string } = useParams();
  const router = useRouter();

  if (!Object.keys(data).includes(service)) {
    notFound();
  }

  return (
    <div>
      <HeroSection
        subTitle={data[service].subTitle}
        service={data[service].title}
        titleColor={data[service].titleColor ?? "black"}
        bgPic={data[service].bannerImage as string}
        isVideo={data[service].isVideo}
      />

      <WhatWeOffer picture={data[service].offerImage as string} />

      <BelowSec
        title={data[service].section.title}
        desc={data[service].section.desc}
        image={data[service].section.image}
        isVideo={data[service].isVideo}
      />

      {data[service].internalData?.map((src, idx) =>
        data[service].bento ? (
          <SelectedWorks
            key={idx}
            service={src.images}
            subTitle={src.desc}
          />
        ) : (
          <ExpandOnHover
            key={idx}
            title={src.title}
            desc={src.desc}
            images={src.images}
          />
        )
      )}

      <CTASection />
    </div>
  );
}
