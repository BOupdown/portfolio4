"use client";

import { Box, Flex, HStack, Link, Spacer, type FlexProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ColorModeButton } from "@/components/ui/color-mode";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/i18n/provider";
import { site } from "@/data/site";

export function Nav(props: FlexProps) {
  const pathname = usePathname();
  const { t } = useLocale();

  const navLinks = [
    { href: "/projects", label: t.nav.projects },
    { href: "/experience", label: t.nav.experience },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <Flex
      as="nav"
      align="center"
      gap="4"
      py="3.5"
      px={{ base: "5", md: "8" }}
      position="sticky"
      top="0"
      zIndex="docked"
      borderBottomWidth="1px"
      borderColor="border"
      backdropFilter="blur(12px)"
      bg="bg/75"
      {...props}
    >
      <Link
        as={NextLink}
        href="/"
        fontWeight="semibold"
        fontSize="sm"
        letterSpacing="tight"
        _hover={{ textDecoration: "none", color: "accent.fg" }}
      >
        {site.name}
      </Link>
      <Spacer />
      <HStack as="ul" listStyleType="none" gap={{ base: "5", md: "7" }}>
        {navLinks.map(({ href, label }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Box as="li" key={href} m={0}>
              <Link
                as={NextLink}
                href={href}
                fontWeight="medium"
                fontSize="sm"
                color={active ? "fg" : "fg.muted"}
                position="relative"
                _hover={{ color: "fg", textDecoration: "none" }}
                _after={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "-7px",
                  height: "1.5px",
                  width: active ? "100%" : "0%",
                  bg: "fg",
                  transition: "width 0.2s ease",
                }}
              >
                {label}
              </Link>
            </Box>
          );
        })}
      </HStack>
      <LanguageToggle />
      <ColorModeButton />
    </Flex>
  );
}
