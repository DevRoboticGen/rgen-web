"use client";
import Image from "next/image";
import { Section } from "../../ui/section";
import { useEffect, useState } from "react";

interface Logo {
  id: string;
  name: string;
  logoImage: [
    {
      url: string;
      width: number;
      height: number;
    },
  ];
}

export default function AboutRoboticGen() {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch("/api/airtable/logos"); // Update the endpoint if needed
        if (!response.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const data = await response.json();
        setLogos(data);
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
          <p className="font-instrumentSans bg-clip-text py-4 text-center text-4xl font-bold capitalize text-sky-950 md:text-6xl">
            Learn
            <span className="font-serif text-sky-500">. </span>
            Innovate
            <span className="font-serif text-sky-500">. </span>
            Inspire
            <span className="font-serif text-sky-500">. </span>
          </p>
          <p className="max-w-6xl px-4 py-4 text-center text-base text-slate-600 md:text-lg lg:px-32">
            Let&apos;s drive the future of Robotics and AI together! At
            RoboticGen, we are building a thriving tech community that empowers
            future leaders in Robotics and AI. With free tutorials, engaging
            discussions, and the latest innovation updates, we&apos;re here to
            help you grow, learn, and lead in these exciting fields.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center space-y-6">
          <p className="font-instrumentSans text-center text-base font-medium text-slate-700 sm:text-lg dark:text-neutral-200">
            Backed by Alumni and Ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {logos.length > 0 ? (
              logos.map((logo) =>
                logo.logoImage[0]?.url ? (
                  <Image
                    key={logo.id}
                    src={logo.logoImage[0].url}
                    alt={logo.name}
                    className="h-5 w-auto sm:h-5 md:h-6 lg:h-7"
                    width={logo.logoImage[0].width}
                    height={logo.logoImage[0].height}
                  />
                ) : null,
              )
            ) : (
              <p>No logos available</p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
