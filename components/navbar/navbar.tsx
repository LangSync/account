import React from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { LangSyncLogo } from "../logo";
import { getSession } from "next-auth/react";
import { AvatarC } from "./components/avatar";

export function NavBar() {
  let session = getSession();

  let items = [
    { name: "Home", href: "https://langsync.app/#home" },
    { name: "Features", href: "https://langsync.app/#features" },
    { name: "Pricing", href: "https://langsync.app/#pricing" },
    { name: "Contact", href: "https://langsync.app/#contact" },
    { name: "Documentation", href: "https://docs.langsync.app/" },
  ];

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <LangSyncLogo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {items.map((item) => (
          <NavbarItem key={item.href}>
            <Link target="_blank" color="foreground" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <AvatarC />
      </NavbarContent>
    </Navbar>
  );
}
