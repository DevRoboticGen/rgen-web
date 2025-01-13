import Navbar from "@/components/sections/navbar/default";
import TeamFooter from "@/components/sections/footer/default";
import { TeamSection12 } from "@/components/sections/team/people";

export default function Teams() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <TeamSection12 />
      <TeamFooter />
    </main>
  );
}
