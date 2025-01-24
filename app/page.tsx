import { Hero } from "../components/sections/hero/hero-image";
import { About } from "@/components/sections/about/about-section";
import YouTubeCarousel from "@/components/sections/youtube-carousel/default";
import AboutRoboticGen from "../components/sections/roboticgen/default";
import Navbar from "@/components/sections/navbar/default";
import TeamFooter from "@/components/sections/footer/default";
import { NewsGrid } from "@/components/sections/news/news-card";
import {
  fetchLogos,
  fetchNews,
  fetchYoutubeVideos,
} from "@/components/data/airtable-data";

export const revalidate = 3600 * 24;

export default async function Home() {
  const logos = await fetchLogos();
  const videos = await fetchYoutubeVideos();
  const news = await fetchNews();
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <AboutRoboticGen logos={logos} />
      <About />
      <YouTubeCarousel videos={videos} />
      <NewsGrid news={news} />
      <TeamFooter />
    </main>
  );
}
