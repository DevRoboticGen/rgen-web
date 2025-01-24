import { HeroCareers } from "@/components/sections/hero/hero-image";
import Navbar from "@/components/sections/navbar/default";
import TeamFooter from "@/components/sections/footer/default";
import CareerPositions from "@/components/sections/positions/default";
import { CultureSection } from "@/components/sections/culture/CultureSection";
import { fetchCareers } from "@/components/data/airtable-data";

export const revalidate = 3600 * 24;

export default async function Careers() {
  const careers = await fetchCareers();
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroCareers />
      <CareerPositions positions={careers} />
      <CultureSection />
      <TeamFooter />
    </main>
  );
}
