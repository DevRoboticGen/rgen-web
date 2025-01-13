
export const siteConfig = {
  name: "RoboticGen",
  url: "/#",
  getStartedUrl:
    "https://roboticgen.co",
  ogImage: "https://roboticgen.com/og.jpg",
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
      key: "about",
      title: "About",
      href: "/#about-roboticgen",
    },
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
      href: "/#",
    },
    {
      key: "academy",
      title: "Academy",
      href: "/#",
    },
  ]
};

export type SiteConfig = typeof siteConfig;
