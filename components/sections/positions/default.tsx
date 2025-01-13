"use client";
import Link from "next/link";
import { Section } from "../../ui/section";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface JobDescription {
  name: string;
  team: string;
  duration: string;
  type: string;
  mode: string;
  notion: string;
  apply: string;
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
    <Section id="about-roboticgen">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="relative z-10 flex flex-col items-center pt-16">
          <h3 className="font-instrumentSans text-xs font-medium uppercase text-sky-700 md:text-sm">
            We are Hiring
          </h3>
          <p className="font-instrumentSans bg-clip-text py-4 text-center text-4xl font-bold capitalize text-sky-950 md:text-4xl">
            Open Positions
          </p>
        </div>

        <div className="grid gap-6 pt-12 sm:grid-cols-1 lg:grid-cols-2">
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
    <div className="mx-auto w-full">
      <div className="group relative h-auto overflow-hidden rounded-2xl border border-zinc-100 bg-white p-4 transition duration-200 hover:shadow-xl">
        {/* Header */}
        <h3 className="font-instrumentSans py-2 text-xs font-medium uppercase text-sky-700 md:text-sm">
          We are Hiring
        </h3>

        {/* Job Name */}
        <h2 className="mb-3 text-lg font-bold text-zinc-700 lg:text-xl">
          {JobDescription.name}
        </h2>

        {/* Job Details */}
        <p className="space-y-1 text-base font-medium text-zinc-600">
          <span>
            <strong>Team:</strong> {JobDescription.team}
          </span>
          <br />
          <span>
            <strong>Duration:</strong> {JobDescription.duration}
          </span>
          <br />
          <span>
            <strong>Type:</strong> {JobDescription.type}
          </span>
          <br />
          <span>
            <strong>Mode:</strong> {JobDescription.mode}
          </span>
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          {/* View Details */}
          <Link
            href={JobDescription.notion}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-sky-600 hover:underline"
          >
            View Details <FaExternalLinkAlt className="ml-1" />
          </Link>

          {/* Apply Now */}
          <Link
            href={JobDescription.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-xl bg-black px-6 py-2 text-sm font-bold text-white transition duration-200 hover:bg-gray-800"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
