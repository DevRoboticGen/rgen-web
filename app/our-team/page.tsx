import Navbar from "@/components/sections/navbar/default";
import TeamFooter from "@/components/sections/footer/default";
import TeamSection from "@/components/sections/team/team-section";

export default function Teams() {
  return (
    <main className="bg-background text-foreground">
      <Navbar state="light" />
      <TeamSection />
      <TeamFooter />
    </main>
  );
}
