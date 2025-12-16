// Data for each type with title and images
const data = {
  "brand-campaigns": {
    title: "Brand Campaigns",
    subTitle: "Big Ideas. Bold Visuals. Impact That Lasts.",
    titleColor: "white",
    bento: true,
    isVideo: true,
    offerImage: "/assets/brand/brand_wwo.jpg",
    bannerImage: "/brand.mp4",
    internalData: [
      {
        title: "OUR WORK",
        desc: "For brands ready to lead with narrative, emotion, and excellence, we’re here to create a film that speaks volumes.",
        images: [
          "/assets/brand/brand1.mp4",
          "/assets/brand/brand4.png",
          "/assets/brand/brand2.mp4",
          "/assets/brand/brand5.png",
          "/assets/brand/brand3.mp4",
          "/assets/brand/brand6.png",
        ],
      }
    ],
  },
  ecommerce: {
    title: "Ecommerce",
    subTitle: "Clean, consistent, conversion-focused imagery optimised for marketplaces and D2C brands.",
    titleColor: "white",
    bento: false,
    bannerImage: "/assets/ecom/ecom_tp.jpg",
    offerImage: "/assets/ecom/ecom_wwo.jpg",
    internalData: [
      {
        title: "OUR WORK",
        desc: "Elevate your catalogue with premium imagery that drives engagement, boosts conversion, and positions your brand as a leader.",
        images: [
          "/assets/ecom/ecom1.jpg",
          "/assets/ecom/ecom2.jpg",
          "/assets/ecom/ecom3.jpg",
          "/assets/ecom/ecom4.jpg",
          "/assets/ecom/ecom5.jpg",
          "/assets/ecom/ecom6.jpg",
          "/assets/ecom/ecom7.jpg",
          "/assets/ecom/ecom8.jpg"
        ],
      }
    ],
  },
  fashion: {
    title: "Fashion",
    subTitle: "Runway-level storytelling and editorial visuals crafted for high-impact campaigns.",
    bento: true,
    isVideo: true,
    titleColor: "white",
    bannerImage: "/fashion.mp4",
    offerImage: "/assets/fashion/fashion6.jpg",
    internalData: [
      {
        title: "OUR WORK",
        desc: "Stand out in fashion’s competitive landscape with visuals that don’t just showcase style, they define it.",
        images: [
          "/assets/fashion/fashion2.mp4",
          "/assets/fashion/fashion3.jpg",
          "/assets/fashion/fashion4.jpg",
          "/assets/fashion/fashion1.mp4",
          "/assets/fashion/fashion5.jpg",
          "/assets/fashion/fashion6.jpg",
        ],
      }
    ],
  },
  "food-and-drink": {
    title: "Food and Drink",
    subTitle: "Great food deserves to be seen and felt.",
    titleColor: "white",
    bannerImage: "/assets/food/tp_fd.jpg",
    offerImage: "/assets/food/fd_wwo.jpg",
    bento: false,
    internalData: [
      {
        title: "OUR WORK",
        desc: "Let’s create imagery that turns lookers into diners and diners into loyal customers.",
        images: [
          "/assets/food/fab1.jpg",
          "/assets/food/fab2.jpg",
          "/assets/food/fab3.jpg",
          "/assets/food/fab4.jpg",
          "/assets/food/fab5.jpg",
          "/assets/food/fab6.jpg",
          "/assets/food/fab7.jpg",
          "/assets/food/fab8.jpg",
        ],
      }
    ],
  },
  "ai-services": {
    title: "AI-Enabled Services",
    bento: false,
    subTitle: "Reimagining Content Creation With Intelligent Creativity",
    bannerImage: "/assets/ai/ai_tp.png",
    offerImage: "/assets/ai/ai_wwo.png",
    internalData: [
      {
        title: "OUR WORK",
        desc: "Let’s elevate your brand with next-generation photo, video, and digital content.",
        images: [
          "/assets/ai/ai1.png",
          "/assets/ai/ai2.png",
          "/assets/ai/ai3.png",
          "/assets/ai/ai4.png",
          "/assets/ai/ai5.png",
          "/assets/ai/ai6.png",
          "/assets/ai/ai7.png",
          "/assets/ai/ai8.png",
        ],
      }
    ],
  },
  jewellery: {
    title: "Jewellery",
    subTitle: "Precision lighting, macro clarity, and premium presentation that enhance perceived value.",
    bento: false,
    titleColor: "white",
    bannerImage: "/assets/jew/jew_wwo.jpg",
    offerImage: "/assets/home/jew.jpg",
    internalData: [
      {
        title: "OUR WORK",
        desc: "Jewellery photography isn’t just about pictures. It’s about creating visuals that reflect emotion, value, and desirability. Every shot becomes a touchpoint that brings your audience closer to purchase.",
        images: [
           "/assets/jew/jew1.jpg",
            "/assets/jew/jew2.jpg",
            "/assets/jew/jew3.jpg",
            "/assets/jew/jew4.jpg",
            "/assets/jew/jew5.jpg",
            "/assets/jew/jew6.jpg",
            "/assets/jew/jew7.jpg",
            "/assets/jew/jew8.jpg",

        ],
      }
    ],
  },
  home: {
    title: "Jewellery",
    bento: false,
    images: [
      "/assets/home/food.jpg",
      "/assets/home/gold.png",
      "/assets/home/jew.jpg",
      "/assets/home/hon.jpg",
      "/assets/home/shoe.jpg",
      "/assets/home/ser.png",
    ],
  },
};

export type CategoryType = {
  title: string;
  images?: string[];
  titleColor?: string;
  bento?: boolean;
  isVideo?: boolean;
  internalData?: { title: string; desc: string; images: string[] }[];
  bannerImage?: string;
  offerImage?: string;
  subTitle: string;
};

export type CategoriesMap = {
  [key: string]: CategoryType;
};

export default data as CategoriesMap;
