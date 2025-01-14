"use client";

import { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

interface Member {
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

function TeamMember({ name, title, linkedIn, image, team }: Member) {
  const isDirector = team === "Directors";
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`relative mb-4 overflow-hidden rounded-lg ${isDirector ? "h-56 w-56" : "h-48 w-48"}`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className={`font-semibold ${isDirector ? "text-2xl" : "text-xl"}`}>
        {name}
      </h3>
      <p className="mb-3 text-muted-foreground">{title}</p>
      {linkedIn && (
        <Link
          href={linkedIn}
          className="flex flex-row gap-2 text-muted-foreground hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
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

export default function TeamSection() {
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
    <section className="px-4 py-32 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Meet the Faces Behind RoboticGen
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
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
          Object.entries(teamGroups).map(([teamName, teamMembers]) => (
            <div key={teamName} className="mb-12 last:mb-0">
              <h3 className="mb-8 text-center text-3xl font-bold text-sky-950 md:text-3xl">
                {teamName} of RoboticGen
              </h3>
              <div
                className={`grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:grid-cols-${Math.min(teamMembers.length, 4)} lg:gap-12`}
              >
                {teamMembers.map((member) => (
                  <TeamMember key={`${teamName}-${member.id}`} {...member} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
