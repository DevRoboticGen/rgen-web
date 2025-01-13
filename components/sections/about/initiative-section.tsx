import Link from "next/link";
import { AboutCard } from "./about-card";

interface InitiativeSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  altText: string;
  imageOnLeft?: boolean;
}

export function VisitButton({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href}>
      <button className="group relative inline-block cursor-pointer rounded-2xl bg-cyan-800 p-1 text-sm font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
        <span className="absolute inset-0 overflow-hidden rounded-2xl">
          <span className="absolute inset-0 rounded-2xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="bg-cyan-850 relative z-10 flex items-center space-x-2 rounded-xl px-6 py-1 ring-1 ring-white/10">
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

export function InitiativeSection({
  title,
  subtitle,
  description,
  imageSrc,
  altText,
  imageOnLeft = true,
}: InitiativeSectionProps) {
  return (
    <div className="font-instrumentSans container mx-auto px-6 md:px-8 lg:px-12">
      <div className="flex flex-col items-center gap-12 py-12 md:gap-16 lg:flex-row lg:gap-24 lg:py-24">
        <div
          className={`flex w-full justify-center lg:w-1/2 ${
            imageOnLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <AboutCard
              title={altText}
              subtitle={subtitle}
              imageSrc={imageSrc}
              altText={altText}
              isLeft={imageOnLeft}
            />
          </div>
        </div>

        <div
          className={`w-full lg:w-1/2 ${
            imageOnLeft ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"
          } text-left`}
        >
          <h3 className="mb-3 text-xs font-medium uppercase text-sky-700 md:text-sm">
            Our Initiatives
          </h3>
          <h2 className="mb-4 text-2xl font-bold capitalize leading-snug text-sky-950 md:mb-6 md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p
            className={`mb-6 text-sm text-zinc-800 md:mb-8 md:text-base ${imageOnLeft ? "lg:pr-4" : "lg:pl-4"} lg:text-lg`}
          >
            {description}
          </p>
          <VisitButton href="#" text={`Visit ${altText}`} />
        </div>
      </div>
    </div>
  );
}
