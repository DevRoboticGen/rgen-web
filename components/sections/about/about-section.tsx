import { InitiativeSection } from "./initiative-section";
const initiatives = [
  {
    title: "Sri Lanka’s first Industry funded Robotics & AI Lab",
    subtitle: "Our Initiatives",
    description:
      "At RoboticGen Labs, our award-winning team focuses on creating innovative solutions in Robotics & AI. Our focus areas include smart mobile robots with perception capabilities, physical AI applications, STEM tools and kits, and industrial automation solutions. We also collaborate with universities on research projects and open-source initiatives.",
    imageSrc: "/images/innovate-text.jpg",
    altText: "Labs",
  },
  {
    title: "The Best Place to build and \nLearn afterschool",
    subtitle: "Our Initiatives",
    description:
      "At RoboticGen Academy, we're revolutionizing education through our innovative journey-based learning approach! Our passionate mentors guide children through engaging, self-paced projects aligned with Sustainable Development Goals - from core foundations to exciting paths in Robotics, Programming, and AI. Regular team challenges spark creativity and build essential life skills.",
    imageSrc: "/images/learn-text.png",
    altText: "Academy",
  },
];

export function About() {
  return (
    <div className="container mx-auto py-12 sm:px-12 md:px-16 lg:px-24">
      {initiatives.map((initiative, index) => (
        <InitiativeSection
          key={index}
          {...initiative}
          imageOnLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
}
