"use client";
import Image from "next/image";

interface Advisor {
  id: string;
  name: string;
  title: string;
  description: string;
  logo: (string | null)[];
}
type Props = {
  advisor: Advisor[];
};
export default function AdvisoryPanel({ advisor }: Props) {
  return (
    <section className="px-8 pb-36 pt-12 md:px-12 lg:px-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Our Advisory Panel
        </h2>
        <div className="-mx-4 flex flex-wrap justify-center">
          {advisor.map((advisor, index) => (
            <div key={index} className="mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
              <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="relative h-16 w-24 flex-shrink-0">
                    <Image
                      src={advisor.logo[0] || "/placeholder.svg"}
                      alt={`${advisor.name}'s company logo`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{advisor.name}</h3>
                    <p className="text-gray-600">{advisor.title}</p>
                  </div>
                </div>
                <p className="flex-grow text-gray-700">{advisor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
