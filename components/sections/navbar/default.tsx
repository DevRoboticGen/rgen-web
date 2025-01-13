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

export default function Navbar() {
  return (
    <header
      className={`absolute top-0 z-50 -mb-4 w-full px-4 pb-4 text-zinc-50`}
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
              <Roboticgen state={"light"} />
            </Link>
          </NavbarLeft>
          <NavbarRight>
            <Navigation />
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
              <SheetContent side="right">
                <SheetTitle>
                  <Roboticgen state="light" />
                </SheetTitle>
                <nav className="grid gap-6 p-4 pt-8 text-lg font-medium text-zinc-400">
                  {siteConfig.navitems.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="transition-colors duration-200 hover:text-zinc-50"
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
