"use client";

import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection
} from "@heroui/dropdown";
import { link as linkStyles } from "@heroui/theme";
import {
  GithubIcon,
  GlobeIcon
} from "@/components/icons";
import NextLink from "next/link";
import clsx from "clsx";
import { useRouter, usePathname } from '@/i18n/navigation';
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={item.href === usePathname()}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent className="basis-3/5 sm:basis-full" justify="end">
        <Dropdown>
          <DropdownTrigger>
            <GlobeIcon />
          </DropdownTrigger>
          <DropdownMenu onAction={(key) => {
            router.replace(pathname, { locale: key.toString() });
          }}>
            <DropdownSection title={t('languages')}>
              <DropdownItem key={'nl'}>{t('dutch')}</DropdownItem>
              <DropdownItem key={'en'}>{t('english')}</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <NextLink href="https://github.com/DBosDavinci">
          <GithubIcon className="text-default-500" />
        </NextLink>
      </NavbarContent>
    </HeroUINavbar>
  );
};