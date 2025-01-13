"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    // Function to handle screen resizing
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowAll(true); // Show all on medium (md) and larger screens
      } else {
        setShowAll(false); // Show less on smaller screens
      }
    };

    // Set initial state based on current screen size
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Display only 2 children if showAll is false
  const visibleChildren = React.Children.toArray(children).slice(
    0,
    showAll ? undefined : 2,
  );

  return (
    <div className="flex flex-col items-center">
      {/* Grid displaying items */}
      <div
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", // Adjusted to show 2 columns on md and 3 on lg
          className,
        )}
      >
        {visibleChildren}
      </div>

      {/* Buttons visible only on small screens */}
      <div className="mt-4 sm:block md:hidden">
        {!showAll && React.Children.count(children) > 2 && (
          <button
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            onClick={() => setShowAll(true)}
          >
            Show All
          </button>
        )}
        {showAll && React.Children.count(children) > 2 && (
          <button
            className="rounded-lg bg-gray-600 px-4 py-2 text-white transition hover:bg-gray-700"
            onClick={() => setShowAll(false)}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento inset-0 flex w-56 flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
