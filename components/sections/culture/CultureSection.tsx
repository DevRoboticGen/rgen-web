"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useMediaQuery from "@/hooks/use-media-query";
import Image from "next/image";

const images = [
  {
    url: "/culture/1.jpeg",
  },
  {
    url: "/culture/2.jpeg",
    title: "Team Collaboration",
    description: "Working together to achieve great things",
  },
  {
    url: "/culture/3.jpeg",
    title: "Fun Fridays",
    description: "Celebrating the end of the week with a little fun",
  },
];

export function CultureSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const ImageCard = ({
    image,
    index,
    className = "",
  }: {
    image: (typeof images)[0];
    index: number;
    className?: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`group relative cursor-pointer ${className}`}
      onClick={() => setSelectedImage(index)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={image.url}
          alt={image.title || "Image"}
          width={800}
          height={600}
          className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end bg-black/40 p-6 opacity-0 opacity-100 transition-opacity duration-300 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100">
          <div className="text-white">
            <h3 className="mb-2 text-xl font-semibold">{image.title}</h3>
            <p className="text-sm opacity-90">{image.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="pb-36">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-instrumentSans bg-clip-text py-4 text-center text-4xl font-bold capitalize text-sky-950 md:text-4xl">
            Our Culture
          </p>
          <p className="mx-auto max-w-2xl text-lg text-zinc-700">
            We believe in fostering an environment where creativity thrives,
            collaboration is celebrated, and every team member can bring their
            authentic self to work.
          </p>
        </motion.div>

        {isDesktop ? (
          <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-16">
            {images.map((image, index) => (
              <ImageCard key={index} image={image} index={index} />
            ))}
          </div>
        ) : (
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <ImageCard image={image} index={index} className="px-1" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        )}

        <AnimatePresence>
          {selectedImage !== null && (
            <Dialog open={true} onOpenChange={() => setSelectedImage(null)}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-4 top-4 text-white transition-colors hover:text-gray-300"
                >
                  <X className="h-8 w-8" />
                </button>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-lg"
                >
                  <Image
                    src={images[selectedImage].url}
                    alt={images[selectedImage].title || "Image"}
                    className="h-full w-full object-contain"
                    width={800}
                    height={450}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {images[selectedImage].title}
                    </h3>
                    <p className="text-white/90">
                      {images[selectedImage].description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
