import Navbar from "@/components/sections/navbar/default";
import TeamFooter from "@/components/sections/footer/default";
import TeamPage from "@/components/sections/team/team-page";
import AdvisoryPanel from "@/components/sections/advisory/AdvisoryPanel";
import {
  fetchAdvisoryPanel,
  fetchTeamMembers,
} from "@/components/data/airtable-data";

export const revalidate = 3600 * 24;

export default async function Teams() {
  const members = await fetchTeamMembers();
  const advisors = await fetchAdvisoryPanel();
  return (
    <main className="bg-background text-foreground">
      <Navbar state="light" />
      <TeamPage members={members} />
      <AdvisoryPanel advisor={advisors} />
      <TeamFooter />
    </main>
  );
}
