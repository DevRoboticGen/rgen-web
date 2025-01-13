import { InitiativeSection } from "./initiative-section";
const initiatives = [
  {
    title: "Sri Lanka’s first Industry funded Robotics & AI Lab",
    subtitle: "Our Initiatives",
    description:
      "launched in May 2023, we’ve embarked on a journey to redefine learning and research in Sri Lanka Launched in May 2023, we’ve embarked on a journey to redefine learning and research in Sri LankaLaunched in May 2023, we’ve embarked on a journey to redefine learning and research in Sri Lanka",
    imageSrc: "/images/innovate-text.jpg",
    altText: "Labs",
  },
  {
    title: "The Best Place to build and \nLearn afterschool",
    subtitle: "Our Initiatives",
    description:
      "launched in May 2023, we’ve embarked on a journey to redefine learning and research in Sri Lanka Launched in May 2023, we’ve embarked on a journey to redefine learning and research in Sri LankaLaunched in May 2023, we’ve embarked on a journey to redefine learning and research in Sri Lanka",
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
