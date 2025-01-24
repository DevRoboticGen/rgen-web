"use client";

import { Section } from "../../ui/section";
import Image from "next/image";
import { Clock, Users, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
type Props = {
  positions: JobDescription[];
};
export default function CareerPositions({ positions }: Props) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section id="positions">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="font-instrumentSans text-xs font-medium uppercase text-sky-700 md:text-sm">
            We are Hiring
          </h3>
          <p className="font-instrumentSans bg-clip-text py-4 text-center text-4xl font-bold capitalize text-sky-950 md:text-4xl">
            Open Positions
          </p>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Join our team and help shape the future of development. We&apos;re
            looking for passionate individuals who want to make a difference.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {positions.map((content, index) => (
            <JobCard key={index} JobDescription={content} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function JobCard({ JobDescription }: { JobDescription: JobDescription }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={JobDescription.image}
          alt={`${JobDescription.name} thumbnail`}
          layout="fill"
          objectFit="cover"
          className="transform transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-sky-600">
          {JobDescription.name}
        </h3>

        <div className="mb-6 space-y-3">
          <div className="flex items-center text-gray-600">
            <Users className="mr-3 h-5 w-5 text-sky-600" />
            <span>{JobDescription.team}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="mr-3 h-5 w-5 text-sky-600" />
            <span>{JobDescription.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Briefcase className="mr-3 h-5 w-5 text-sky-600" />
            <span>{JobDescription.type}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="mr-3 h-5 w-5 text-sky-600" />
            <span>{JobDescription.mode}</span>
          </div>
        </div>

        <a
          href={JobDescription.notion}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl bg-sky-600 px-6 py-3 text-center font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
        >
          View Position
        </a>
      </div>
    </motion.div>
  );
}
