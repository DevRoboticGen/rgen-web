"use client";

import { motion } from "framer-motion";
import TeamMember from "./TeamMember";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export interface Member {
  id: string;
  name: string;
  title: string;
  linkedIn: string;
  image: string;
  team: string;
}

type TeamGroups = {
  [key: string]: Member[];
};

export default function TeamPage() {
  const [, setMembers] = useState<Member[]>([]);
  const [teamGroups, setTeamGroups] = useState<TeamGroups>({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/airtable/team");
        if (!response.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const data: Member[] = await response.json();
        setMembers(data);

        // Group members by team
        const groups = data.reduce((acc: TeamGroups, member) => {
          if (!acc[member.team]) {
            acc[member.team] = [];
          }
          acc[member.team].push(member);
          return acc;
        }, {});

        setTeamGroups(groups);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecords();
  }, []);

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">
        Error loading team members: {error}
      </div>
    );
  }

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
          the way
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {[...Array(8)].map((_, index) => (
            <TeamMemberSkeleton key={index} />
          ))}
        </div>
      ) : (
        Object.entries(teamGroups).map(([teamName, members], index) => (
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
                  className="flex min-w-[200px] justify-center sm:min-w-[240px] md:min-w-[300px]"
                >
                  <TeamMember member={member} />
                </div>
              ))}
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}
function TeamMemberSkeleton() {
  return (
    <div className="flex flex-col items-center text-center">
      <Skeleton className="mb-4 h-48 w-48 rounded-lg" />
      <Skeleton className="mb-2 h-6 w-32" />
      <Skeleton className="mb-3 h-4 w-24" />
      <Skeleton className="h-5 w-5" />
    </div>
  );
}
