import Image from "next/image";

export default function Roboticgen({ state }: { state?: "dark" | "light" }) {
  return (
    <Image
      src={state === "dark" ? "/logo/light-logo.svg" : "/logo/dark-logo.svg"}
      alt="RoboticGen"
      width={120}
      height={120}
    />
  );
}
