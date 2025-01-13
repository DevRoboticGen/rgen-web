import Image from "next/image";

export default function Roboticgen({ state }: { state?: "dark" | "light" }) {
  return (
    <Image
      src={state === "dark" ? "/logo/dark-logo.svg" : "/logo/light-logo.svg"}
      alt="RoboticGen"
      width={120}
      height={120}
    />
  );
}
