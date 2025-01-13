"use client";

import Image from "next/image";

interface AboutCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
  isLeft?: boolean;
}

export function AboutCard({
  imageSrc,
  altText,
  isLeft = true,
}: AboutCardProps) {
  return (
    <div
      className={`relative aspect-square w-full rounded-3xl ${
        isLeft ? "rounded-br-none" : "rounded-bl-none"
      } group overflow-hidden shadow-lg`}
    >
      <Image
        src={imageSrc}
        alt={altText}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width={400}
        height={400}
      />
      <div className="absolute inset-0 bg-sky-950 opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
    </div>
  );
}
