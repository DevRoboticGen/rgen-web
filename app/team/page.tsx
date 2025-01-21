import Navbar from "@/components/sections/navbar/default";
import TeamFooter from "@/components/sections/footer/default";
import TeamPage from "@/components/sections/team/team-page";

export default function Teams() {
  return (
    <main className="bg-background text-foreground">
      <Navbar state="light" />
      <TeamPage />
      <TeamFooter />
    </main>
  );
}
