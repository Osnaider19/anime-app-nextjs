"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { IconScale, IconsArrowBB } from "@/icons/Icons";
import LinkN from "next/link";
import { useRouter } from "next/navigation";
import { genres } from "@/const/const";
export function Header() {
  const { push } = useRouter();
  const icons = {
    chevron: <IconScale fill="currentColor" size={16} />,
    scale: <IconScale fill="currentColor" size={16} />,
    lock: <IconScale fill="currentColor" size={16} />,
    activity: <IconScale fill="currentColor" size={16} />,
    flash: <IconScale fill="currentColor" size={16} />,
    server: <IconScale fill="currentColor" size={16} />,
    user: <IconScale fill="currentColor" size={16} />,
  };

  return (
    <Navbar className="bg-transparent absolute left-0 top-0 w-full h-[60px] hover:bg-black transition-background duration-500">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <LinkN href="/">
          <p className="font-bold text-inherit ">NEXANIME</p>
        </LinkN>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<IconsArrowBB />}
                radius="sm"
                variant="light"
              >
                Browse
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
            color="secondary"
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              onClick={() => push("/search/anime/trending")}
            >
              Trending
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              onClick={() => push("/search/anime/popular")}
            >
              All Time Popular
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              onClick={() => push("/search/anime/next-season")}
            >
              Upcoming Next Season
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              onClick={() => push("/search/anime/top-100")}
            >
              Top 100 Anime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              onClick={() => push("/search/anime/this-season")}
            >
              Popular This Season
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<IconsArrowBB />}
                radius="sm"
                variant="light"
              >
                Genres
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {genres.slice(0, 5).map((genre, index) => (
              <DropdownItem
                key={genre}
                className="py-2"
                color="secondary"
                onClick={() => push(`/search/anime?genres=${genre}`)}
              >
                {genre}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="secondary">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="solid">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
