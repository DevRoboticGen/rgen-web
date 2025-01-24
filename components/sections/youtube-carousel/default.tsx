"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface Video {
  id: string;
  thumbnail: string;
  url: string;
}

type Props = {
  videos: Video[];
};

export default function YouTubeCarousel({ videos }: Props) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });

  return (
    <section id="youtube-carousel">
      <div className="mx-auto w-full max-w-7xl gap-4 px-4 py-12">
        <div className="relative z-10 flex flex-col items-center py-8 sm:px-4 lg:px-12">
          <h3 className="font-instrumentSans text-xs font-medium uppercase text-sky-700 md:text-sm">
            Connect with Us
          </h3>
          <p className="font-instrumentSans py-4 text-center text-xl font-bold capitalize text-sky-950 md:text-2xl">
            We are building a vibrant tech community to empower future tech
            leaders. Follow us for free tutorials, thought-provoking
            discussions, and innovative updates.
          </p>
        </div>

        <Carousel
          plugins={[plugin]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem
                key={video.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card
                    className="cursor-pointer overflow-hidden"
                    onClick={() => setSelectedVideo(video.url)}
                  >
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <Image
                        src={video.thumbnail}
                        alt={"RoboticGen Youtube Video"}
                        className="absolute left-0 top-0 h-full w-full object-cover transition-transform hover:scale-105"
                        layout="fill"
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="relative z-10 flex flex-col items-center px-12 py-8">
          <p className="font-instrumentSans py-4 text-center text-lg font-bold capitalize text-sky-950 md:text-xl">
            Stay Updated with the latest in Tech and Education
          </p>
          <div className="flex flex-row items-center space-x-4">
            <Link
              href={siteConfig.links.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-800 hover:text-zinc-800"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href={siteConfig.links.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-800 hover:text-zinc-800"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href={siteConfig.links.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 hover:text-zinc-800"
            >
              <FaTiktok size={24} />
            </Link>
            <Link
              href={siteConfig.links.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-800 hover:text-zinc-800"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href={siteConfig.links.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-zinc-800"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>

        <Dialog
          open={!!selectedVideo}
          onOpenChange={() => setSelectedVideo(null)}
        >
          <DialogContent className="p-0 sm:max-w-[800px]">
            <DialogTitle className="hidden"></DialogTitle>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={
                  selectedVideo
                    ? `https://www.youtube.com/embed/${selectedVideo}`
                    : "https://www.youtube.com/embed/9eUpSM4YD-M"
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
