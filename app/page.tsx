import { Hero } from "../components/sections/hero/hero-image";
import { About } from "@/components/sections/about/about-section";
import YouTubeCarousel from "@/components/sections/youtube-carousel/default";
import AboutRoboticGen from "../components/sections/roboticgen/default";
import Navbar from "@/components/sections/navbar/default";
import TeamFooter from "@/components/sections/footer/default";
import { NewsGrid } from "@/components/sections/news/news-card";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <AboutRoboticGen />
      <About />
      <YouTubeCarousel />
      <NewsGrid />
      <TeamFooter />
    </main>
  );
}
