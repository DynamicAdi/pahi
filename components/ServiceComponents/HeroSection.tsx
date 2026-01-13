export default function HeroSection({isVideo = false, service, bgPic, titleColor, subTitle}:{isVideo?: boolean, service:string, bgPic: string, titleColor: string, subTitle: string}) {
  return (
    <section className={`bg-no-repeat bg-size-[100%_auto] bg-center  min-h-[450px] w-full py-32 px-6 relative`}>
      {/* <div className="w-full h-full bg-black/60 absolute inset-0"></div> */}
      {
        isVideo ? <video
              style={{filter: "brightness(30%)"}}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-full absolute inset-0 -z-10 object-cover"
            >
              <source src={bgPic} type="video/mp4" />
            </video> : (
              <img 
              style={{filter: "brightness(30%)"}}
              className="w-full h-full absolute inset-0 -z-10 object-cover"
              alt="banne"
              src={bgPic}
              />
            )
      }
      <div className="md:max-w-5xl max-md:w-full mx-auto text-center">
        {/* Main heading */}
        <h1 className={`capitalize text-xl md:text-6xl font-serif ${titleColor==="black" ? "text-black":"text-white"} leading-tight`}>
          {service}
        </h1>

        {/* Subtext */}
        <p className={`${titleColor==="black" ? "text-black":"text-white"} mt-6 text-base md:text-2xl`}>
          {subTitle}
        </p>
      </div>
    </section>
  );
}
