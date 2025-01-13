"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function Hero() {
  const images = ["/hero/1.jpg", "/hero/3.jpg"];
  return (
    <section id="hero">
      <ImagesSlider className="h-[100vh]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col items-center justify-center"
        >
          <motion.p className="font-instrumentSans bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-3xl font-bold capitalize text-transparent md:text-7xl">
            Driving The Future Generation <br /> Of Robotics and AI
          </motion.p>
          <motion.p className="px-16 text-center text-base text-zinc-400 md:text-xl">
            The future belongs to those who innovate. How do we prepare the next
            generation?
          </motion.p>
          <button className="relative mx-auto mt-4 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white backdrop-blur-sm">
            <span>Join with us →</span>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}

export function HeroCareers() {
  const images = ["/hero/hero-careers.png"];
  return (
    <section id="hero">
      <ImagesSlider className="h-[100vh]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col items-center justify-center"
        >
          <motion.p className="font-instrumentSans bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-3xl font-bold capitalize text-transparent md:text-7xl">
            Join the Dream Team <br />
            That make it all Happen
          </motion.p>
          <motion.p className="px-16 text-center text-base text-zinc-400 md:text-xl lg:px-56">
            At RoboticGen, we pride ourselves on being more than just a robotics
            startup. we&apos;re a vibrant community of passionate individuals
            dedicated to creating, learning, and having an absolute blast along
            the way
          </motion.p>
          <button className="relative mx-auto mt-4 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white backdrop-blur-sm">
            <span>Open Positions →</span>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
