import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import { siteConfig } from "@/config/site";

export default function Navigation({
  state = "dark",
}: {
  state?: "dark" | "light";
}) {
  const pathname = usePathname(); // Get the current pathname

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {/* Show 'Home' only if not on the root route */}
        {pathname !== "/" && (
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={`font-lg group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors ${
                state === "dark"
                  ? "hover:bg-zinc-700/30 hover:text-zinc-100"
                  : "hover:bg-zinc-700/10"
              } hover:font-semibold disabled:pointer-events-none disabled:opacity-50`}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
        {siteConfig.navitems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              href={item.href}
              target={item.target}
              className={`font-lg group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors ${
                state === "dark"
                  ? "hover:bg-zinc-700/30 hover:text-zinc-100"
                  : "hover:bg-zinc-700/10"
              } hover:font-semibold disabled:pointer-events-none disabled:opacity-50`}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
