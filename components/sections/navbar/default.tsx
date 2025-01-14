"use client";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Roboticgen from "@/components/logos/roboticgen";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const HomeNavbar = ({ state }: { state: "dark" | "light" }) => {
  return (
    <Link
      key={"Home"}
      href={"/"}
      className={`transition-colors duration-200 ${state === "dark" ? "hover:text-zinc-50" : "hover:text-slate-800"} `}
    >
      <span>Home</span>
    </Link>
  );
};

export default function Navbar({
  state = "dark",
}: {
  state?: "dark" | "light";
}) {
  return (
    <header
      className={`absolute top-0 z-50 -mb-4 w-full px-4 pb-4 ${state === "dark" ? "text-zinc-50" : "text-sky-950"}`}
    >
      <div
        className={`absolute left-0 w-full from-background backdrop-blur-sm`}
      ></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Roboticgen state={state} />
            </Link>
          </NavbarLeft>
          <NavbarRight>
            <Navigation state="light" />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={state}>
                <SheetTitle>
                  <Roboticgen state={state} />
                </SheetTitle>
                <nav
                  className={`grid gap-6 p-4 pt-8 text-lg font-medium ${state === "dark" ? "text-zinc-400" : "text-zinc-700"}`}
                >
                  <HomeNavbar state={state} />
                  {siteConfig.navitems.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target={link.target}
                      className={`transition-colors duration-200 ${state === "dark" ? "hover:text-zinc-50" : "hover:text-slate-800"} `}
                    >
                      <span>{link.title}</span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
