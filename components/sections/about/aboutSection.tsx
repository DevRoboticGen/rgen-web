"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about">
      <div className="font-instrumentSans container mx-auto max-w-container px-8 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">
        <InitiativeSection
          title="Sri Lanka's first Industry funded Robotics & AI Lab"
          subtitle="Our Initiatives"
          description="At RoboticGen Labs, our award-winning team focuses on creating innovative solutions in Robotics & AI. Our focus areas include smart mobile robots with perception capabilities, physical AI applications, STEM tools and kits, and industrial automation solutions. We also collaborate with universities on research projects and open-source initiatives."
          imageSrc="/images/innovate.png"
          altText="Labs"
          action="https://roboticgenlabs.com/"
          imageOnLeft={true}
        />
        <InitiativeSection
          title="The Best Place to build and Learn afterschool"
          subtitle="Our Initiatives"
          description="At RoboticGen Academy, we're revolutionizing education through our innovative journey-based learning approach! Our passionate mentors guide children through engaging, self-paced projects aligned with Sustainable Development Goals - from core foundations to exciting paths in Robotics, Programming, and AI. Regular team challenges spark creativity and build essential life skills."
          imageSrc="/images/learn.jpg"
          altText="Academy"
          action="https://roboticgenacademy.com/"
          imageOnLeft={false}
        />
      </div>
    </section>
  );
}

interface InitiativeSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  altText: string;
  imageOnLeft: boolean;
  action: string;
}

function InitiativeSection({
  title,
  subtitle,
  description,
  imageSrc,
  altText,
  imageOnLeft,
  action,
}: InitiativeSectionProps) {
  return (
    <div className="flex flex-col items-center gap-8 py-8 sm:gap-12 md:gap-16 lg:flex-row lg:gap-24 lg:py-16">
      <div
        className={`w-full lg:w-1/2 ${imageOnLeft ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg">
          <AboutCard
            imageSrc={imageSrc}
            altText={altText}
            isLeft={imageOnLeft}
            href={action}
          />
        </div>
      </div>

      <div
        className={`w-full lg:w-1/2 ${
          imageOnLeft ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"
        } mt-8 text-left lg:mt-0`}
      >
        <h3 className="mb-2 text-xs font-medium uppercase text-sky-700 sm:text-sm">
          {subtitle}
        </h3>
        <h2 className="mb-3 text-xl font-bold capitalize leading-snug text-sky-950 sm:text-2xl md:mb-4 md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p
          className={`mb-4 text-sm text-zinc-800 sm:text-base md:mb-6 ${
            imageOnLeft ? "lg:pr-4" : "lg:pl-4"
          } lg:text-lg`}
        >
          {description}
        </p>
        <VisitButton href={action} text={`Visit ${altText}`} />
      </div>
    </div>
  );
}

function VisitButton({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} passHref target="_blank">
      <button className="group relative inline-block cursor-pointer rounded-2xl bg-cyan-800 p-1 text-sm font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
        <span className="absolute inset-0 overflow-hidden rounded-2xl">
          <span className="absolute inset-0 rounded-2xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="bg-cyan-850 relative z-10 flex items-center space-x-2 rounded-xl px-4 py-1 ring-1 ring-white/10 sm:px-6">
          <span>{text}</span>
          <svg
            fill="none"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </Link>
  );
}

function AboutCard({
  imageSrc,
  altText,
  isLeft = true,
  href,
}: {
  imageSrc: string;
  altText: string;
  isLeft: boolean;
  href: string;
}) {
  return (
    <Link href={href} passHref target="_blank">
      <div
        className={`relative aspect-square w-full rounded-3xl ${
          isLeft ? "rounded-br-none" : "rounded-bl-none"
        } group overflow-hidden shadow-lg`}
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={altText}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
          width={400}
          height={400}
        />
        <div className="absolute inset-0 bg-zinc-950 opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <motion.p className="font-instrumentSans bg-gradient-to-b from-neutral-50/70 to-neutral-400/70 bg-clip-text py-4 text-center text-3xl font-bold capitalize text-transparent md:text-7xl">
            {altText}
          </motion.p>
        </div>
      </div>
    </Link>
  );
}
