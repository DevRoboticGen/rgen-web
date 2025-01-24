"use client";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  date: string;
  title: string;
  description: string;
  image: string;
  readMore: string;
}

type Props = {
  news: NewsItem[];
};
export function NewsGrid({ news }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-40 pt-24 sm:px-6 lg:px-8">
      <div className="relative z-10 flex flex-col items-center pb-12">
        <p className="font-instrumentSans bg-clip-text pb-2 text-center text-3xl font-bold capitalize text-sky-950 md:pb-2 md:text-4xl">
          Latest News
        </p>
        <p className="px-2 py-2 text-center text-sm text-slate-600 md:px-4 md:py-2 md:text-base lg:px-32">
          Stay up to date with the latest news in technology and innovation.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((content, index) => (
          <NewsCard key={index} blogContent={content} />
        ))}
      </div>
    </div>
  );
}

export function NewsCard({ blogContent }: { blogContent: NewsItem }) {
  return (
    <div className="mx-auto w-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
        <div
          className="relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100"
          style={{ paddingBottom: "66.25%" }}
        >
          <Image
            src={blogContent.image}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className={`transform transition duration-200 group-hover:scale-95 group-hover:rounded-2xl`}
          />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <h2 className="mb-2 text-lg font-bold text-zinc-700">
            {blogContent.title}
          </h2>
          <p className="mb-4 flex-grow text-sm font-normal text-zinc-500">
            {blogContent.description}
          </p>
          <div className="mt-auto flex flex-row items-center justify-between">
            <span className="text-sm text-gray-500">{blogContent.date}</span>
            <Link href={blogContent.readMore} target="_blank">
              <div className="relative z-10 block rounded-full bg-sky-500 px-6 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-600">
                Read More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
