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
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { IconsArrowBB } from "@/icons/Icons";
import { Browse } from "@/const/const";
import { useRouter } from "next/navigation";
import { genres } from "@/const/const";
import LinkN from "next/link";
import { useState } from "react";
export function Header() {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { NextSeason, ThisSeason, popular, topAnimes, treding } = Browse;
  const menuItems = [
    {
      title: "Treding",
      link: treding.slug,
    },
    {
      title: "Popular",
      link: popular.slug,
    },
    {
      title: "Upcoming Next Season",
      link: NextSeason.slug,
    },
    {
      title: "Top 100 Anime",
      link: topAnimes.slug,
    },
    {
      title: "Popular This Season",
      link: ThisSeason.slug,
    },
  ];

  return (
    <Navbar
      className="bg-transparent absolute left-0 top-0 w-full h-[60px] hover:bg-black transition-background duration-500"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent className="relative">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <LinkN href={"/"}>
            <p className="font-bold text-inherit">NEXANIME</p>
          </LinkN>
        </NavbarBrand>
      </NavbarContent>
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
      <NavbarMenu className="-mt-1">
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <LinkN
            href={`/`}
            className="w-full hover:text-[#854DBE] transition-colors duration-250 block h-full py-1 "
          >
            Home
          </LinkN>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <LinkN
            href={`/search/anime`}
            className="w-full hover:text-[#854DBE] transition-colors duration-250 block h-full py-1 "
          >
            Search
          </LinkN>
        </NavbarMenuItem>
        {menuItems.map(({ link, title }, index) => (
          <NavbarMenuItem
            key={`${title}-${index}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <LinkN
              href={`/search/anime/${link}`}
              className="w-full hover:text-[#854DBE] transition-colors duration-250 block h-full py-1 "
            >
              {title}
            </LinkN>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
