// Data for each type with title and images
const data = {
  "brand-campaigns": {
    title: "Brand Campaigns",
    titleColor: "white",
    bento: true,
    isVideo: true,
    offerImage: "/assets/brand/brand_wwo.jpg",
    bannerImage: "/brand.mp4",
    internalData: [
      {
        title: "OUR WORK",
        desc: "Narratives that reveal your origin, purpose, and philosophy through compelling visuals and storytelling.",
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
    titleColor: "white",
    bento: false,
    bannerImage: "/assets/ecom/ecom_tp.jpg",
    offerImage: "/assets/ecom/ecom_wwo.jpg",
    internalData: [
      {
        title: "OUR WORK",
        desc: "Clean, crisp images on seamless backgrounds that meet marketplace standards (Amazon, Flipkart, etc.) and enhance your product listings instantly.",
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
    bento: true,
    isVideo: true,
    titleColor: "white",
    bannerImage: "/fashion.mp4",
    offerImage: "/assets/ai/ai_wwo.png",
    internalData: [
      {
        title: "OUR WORK",
        desc: "Photos that feel cinematic, tell a story, and set the tone for magazines, billboards, and high-end campaigns — polished for impact and memorability.",
        images: [
          "/assets/fashion/fashion2.mp4",
          "/assets/fashion/fashion3.jpg",
          "/assets/fashion/fashion4.jpg",
          "/assets/fashion/fashion1.mp4",
          "/assets/fashion/fashion5.png",
          "/assets/fashion/fashion6.png",
        ],
      }
    ],
  },
  "food-and-drink": {
    title: "Food and Drink",
    titleColor: "white",
    bannerImage: "/assets/food/tp_fd.jpg",
    offerImage: "/assets/food/fd_wwo.jpg",
    bento: false,
    internalData: [
      {
        title: "OUR WORK",
        desc: "Beautiful, editorial-level visuals that showcase texture, colour, and composition — perfect for brand campaigns and premium menus.",
        images: [
          "/assets/food/fab1.png",
          "/assets/food/fab2.png",
          "/assets/food/fab3.jpg",
          "/assets/food/fab4.png",
          "/assets/food/fab5.png",
          "/assets/food/fab6.png",
          "/assets/food/fab7.jpg",
          "/assets/food/fab8.jpg",
        ],
      }
    ],
  },
  "ai-services": {
    title: "AI-Enabled Services",
    bento: false,
    bannerImage: "/assets/ai/ai_tp.png",
    offerImage: "/assets/ai/ai_wwo.png",
    internalData: [
      {
        title: "OUR WORK",
        desc: "AI-powered tools help us refine and perfect images with unparalleled precision — from smart retouching and colour correction to seamless background generation and high-volume catalogue editing.",
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
    bento: false,
    titleColor: "white",
    bannerImage: "/assets/jew/jew_wwo.jpg",
    offerImage: "/assets/home/jew.jpg",
    internalData: [
      {
        title: "OUR WORK",
        desc: "Discover every fine cut, curve, and gemstone facet with close-up shots that reveal craftsmanship and beauty.",
        images: [
           "/assets/jew/jew1.jpg",
            "/assets/jew/jew2.jpg",
            "/assets/jew/jew3.jpg",
            "/assets/jew/jew4.jpg",
            "/assets/jew/jew5.jpg",
            "/assets/jew/jew6.png",
            "/assets/jew/jew7.png",
            "/assets/jew/jew8.png",

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
};

export type CategoriesMap = {
  [key: string]: CategoryType;
};

export default data as CategoriesMap;
