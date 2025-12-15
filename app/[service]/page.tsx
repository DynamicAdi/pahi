"use client";
import Image from "next/image";
import HeroSection from "@/components/ServiceComponents/HeroSection";
import WhatWeOffer from "@/components/ServiceComponents/WhatWeOffer";
import SelectedWorks from "@/components/ServiceComponents/SelectedWorks";
import CTASection from "@/components/ServiceComponents/CTASection";
import { useParams,useRouter } from "next/navigation";
import { notFound} from "next/navigation";
import data from "@/data/data";
import ExpandOnHover from "@/components/ui/ExpandCard";
export default function Service() {
  const {service}:{service:string} = useParams();
  const router = useRouter();
  if(!Object.keys(data).includes(service)){
      notFound();
  }
  return (
      <div>
        <HeroSection service={data[service].title} titleColor={data[service].titleColor ?? "black"} bgPic={data[service].bannerImage as string} isVideo={data[service].isVideo}/>
        <WhatWeOffer picture={data[service].offerImage as string}/>
        {
          data[service].internalData?.map((src, idx) => (
            data[service].bento ?  <SelectedWorks key={idx} service={src.images} /> : <ExpandOnHover key={idx} title={src.title} desc={src.desc} images={src.images} />
          ))
        }
        <CTASection/> 
      </div>
  );
}
