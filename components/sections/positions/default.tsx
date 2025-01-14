"use client";
import { Section } from "../../ui/section";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, Users, Briefcase, MapPin } from "lucide-react";

interface JobDescription {
  name: string;
  team: string;
  duration: string;
  type: string;
  mode: string;
  notion: string;
  apply: string;
  image: string;
}

export default function CareerPositions() {
  const [positions, setPositions] = useState<JobDescription[]>([]);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch("/api/airtable/careers");
        if (!response.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const data = await response.json();
        setPositions(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      }
    };

    fetchRecords();
  }, []);

  return (
    <Section id="positions">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="relative z-10 flex flex-col items-center pt-16">
          <h3 className="font-instrumentSans text-xs font-medium uppercase text-sky-700 md:text-sm">
            We are Hiring
          </h3>
          <p className="font-instrumentSans bg-clip-text py-4 text-center text-4xl font-bold capitalize text-sky-950 md:text-4xl">
            Open Positions
          </p>
        </div>

        <div className="grid gap-6 pt-12 sm:grid-cols-1 lg:grid-cols-3">
          {positions.map((content, index) => (
            <JobCard key={index} JobDescription={content} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export function JobCard({
  JobDescription,
}: {
  JobDescription: JobDescription;
}) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
        <div
          className="relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100"
          style={{ paddingBottom: "66.25%" }}
        >
          <Image
            src={JobDescription.image}
            alt={`${JobDescription.name} thumbnail`}
            layout="fill"
            objectFit="cover"
            className="transform transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
          />
        </div>
        <div className="flex flex-grow flex-col p-4">
          <h2 className="mb-4 text-lg font-bold text-zinc-700">
            {JobDescription.name}
          </h2>
          <div className="flex flex-col space-y-2 text-sm text-zinc-500">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              <span>{JobDescription.team}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{JobDescription.duration}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              <span>{JobDescription.type}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{JobDescription.mode}</span>
            </div>
          </div>
        </div>
        <div className="mt-auto p-4">
          <a
            href={JobDescription.notion}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl bg-sky-500 px-6 py-2 text-center text-sm font-bold text-white transition duration-200 hover:bg-sky-600"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
