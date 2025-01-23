import { HeroCareers } from "@/components/sections/hero/hero-image";
import Navbar from "@/components/sections/navbar/default";
import TeamFooter from "@/components/sections/footer/default";
import CareerPositions from "@/components/sections/positions/default";
import { CultureSection } from "@/components/sections/culture/CultureSection";

export default function Careers() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroCareers />
      <CareerPositions />
      <CultureSection />
      <TeamFooter />
    </main>
  );
}
