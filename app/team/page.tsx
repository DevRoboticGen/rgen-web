import Navbar from "@/components/sections/navbar/default";
import TeamFooter from "@/components/sections/footer/default";
import TeamPage from "@/components/sections/team/team-page";
import AdvisoryPanel from "@/components/sections/advisory/AdvisoryPanel";

export default function Teams() {
  return (
    <main className="bg-background text-foreground">
      <Navbar state="light" />
      <TeamPage />
      <AdvisoryPanel />
      <TeamFooter />
    </main>
  );
}
