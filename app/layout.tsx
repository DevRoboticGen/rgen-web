import type { Metadata } from "next";
import "@/app/globals.css";
import { instrumentSans } from "@/lib/fonts";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.getStartedUrl),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "RoboticGen",
      url: "https://www.linkedin.com/company/roboticgen",
    },
    {
      name: "Nayantha Nethsara",
      url: "https://www.linkedin.com/in/nayanthanethsara",
    },
  ],
  creator: "nayanthanethsara",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph:
  {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "https://www.roboticgen.co/logo/dark-logo.svg",
        alt: siteConfig.name,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${instrumentSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
