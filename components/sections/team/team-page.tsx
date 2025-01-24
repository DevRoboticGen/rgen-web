"use client";

import { motion } from "framer-motion";
import TeamMember from "./TeamMember";

export interface Member {
  id: string;
  name: string;
  title: string;
  linkedIn: string;
  image: string;
  team: string;
}

type Props = {
  members: Member[];
};

type TeamGroups = {
  [key: string]: Member[];
};

export default function TeamPage({ members }: Props) {
  const teamGroups: TeamGroups = members.reduce((acc: TeamGroups, member) => {
    if (!acc[member.team]) {
      acc[member.team] = [];
    }
    acc[member.team].push(member);
    return acc;
  }, {});

  return (
    <div className="container mx-auto mt-20 px-4 py-16">
      <div className="mb-24 text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-4xl lg:text-5xl">
          Meet the Faces Behind RoboticGen
        </h2>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          At RoboticGen, we pride ourselves on being more than just a robotics
          startup; we&apos;re a vibrant community of passionate individuals
          dedicated to creating, learning, and having an absolute blast along
          the way.
        </p>
      </div>

      {Object.entries(teamGroups).map(([teamName, members], index) => (
        <motion.div
          key={teamName}
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2 className="mb-6 text-center text-3xl font-semibold">
            {teamName}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {members.map((member) => (
              <div
                key={member.name}
                className="flex w-44 justify-center sm:w-[240px] md:w-[300px]"
              >
                <TeamMember member={member} />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
