
export const siteConfig = {
  name: "RoboticGen",
  url: "/#",
  getStartedUrl:"https://roboticgen.co",
  images: [],
  keywords: ["robotics", "ai", "machine learning", "deep learning", "computer vision", "roboticgen"],
  description:
    "RoboticGen",
  links: {
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com",
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
    },
    {
      key: "our-team",
      title: "Our Team",
      href: "/#",
    },
    {
      key: "labs",
      title: "Labs",
      href: "https://roboticgenlabs.com/",
    },
    {
      key: "academy",
      title: "Academy",
      href: "https://roboticgen.co/",
    },
  ]
};

export type SiteConfig = typeof siteConfig;
