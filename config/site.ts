
export const siteConfig = {
  name: "RoboticGen",
  url: "/#",
  getStartedUrl:"https://roboticgen.co",
  images: [],
  keywords: ["robotics", "ai", "machine learning", "deep learning", "computer vision", "roboticgen"],
  description:
    "We are a startup based in Sri Lanka with a mission to drive the future generation of Robotics and AI. We are an engineering first team that wants to solve problems effectively using state-of-the-art tools and technologies. We launched in 2023 May and are growing fast. We have two initiatives. RoboticGen Academy and RoboticGen Labs.",
  links: {
    social: {
      facebook: "https://facebook.com/RoboticGenInc",
      instagram: "https://www.instagram.com/roboticgen",
      tiktok: "https://tiktok.com/@roboticgen_inc",
      linkedin: "https://www.linkedin.com/company/roboticgen",
      youtube: "https://youtube.com/@RoboticGen",
    },
  },
  stats: {
    updated: "2025-01-12",
  },
  navitems: [
    {
      key: "careers",
      title: "Careers",
      href: "/careers/",
      target: ""
    },
    {
      key: "our-team",
      title: "Our Team",
      href: "/our-team/",
      target: ""
    },
    {
      key: "labs",
      title: "Labs",
      href: "https://roboticgenlabs.com/",
      target: "_blank"
    },
    {
      key: "academy",
      title: "Academy",
      href: "https://roboticgenacademy.com/",
      target: "_blank"
    },
  ]
};

export type SiteConfig = typeof siteConfig;
