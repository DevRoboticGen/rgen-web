import Roboticgen from "@/components/logos/roboticgen";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function TeamFooter() {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#0A0A0A]">
      {/* Content above the image */}
      <div className="relative z-10 -mb-10 flex flex-col items-center pt-16">
        <p className="font-instrumentSans bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-3xl font-bold capitalize text-transparent md:text-5xl">
          Be Part of the Future with <br />
          RoboticGen
        </p>
        <p className="px-16 text-center text-sm text-zinc-400 md:text-lg">
          Interested in joining a team where innovation happens ?
        </p>
        <Link href="/careers/#hero-careers">
          <button className="relative mx-auto mt-4 rounded-full border border-sky-500/20 bg-sky-300/10 px-4 py-2 text-center text-white backdrop-blur-sm">
            <span>Careers →</span>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </button>
        </Link>
      </div>

      {/* Image Section with Blended Top and Bottom */}
      <div className="relative w-full">
        {/* Image */}
        <div className="relative h-[88vh]">
          <Image
            src="/images/team1.jpg" // Replace with your image path
            alt="RoboticGen Team"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="h-[100vh] opacity-90"
          />
          {/* Gradient overlay to blend with background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="relative z-10 -mt-24 flex flex-col items-center pb-12">
        <div className="mb-6">
          <Roboticgen state="dark" />
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {siteConfig.navitems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-semibold text-white hover:text-[#219cbc]"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="mt-6 text-center text-zinc-300">
          <p>RoboticGen (Pvt) Ltd</p>
          <p>Bay 6, TRACE Expert City, Colombo 10</p>
        </div>
        <a
          href="mailto:hello@roboticgen.co"
          className="mt-2 text-gray-400 hover:text-[#219cbc]"
        >
          hello@roboticgen.co
        </a>
      </footer>
    </div>
  );
}
