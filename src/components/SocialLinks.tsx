"use client";

import NextLink from "next/link";
import { HStack, Icon, Link, type StackProps } from "@chakra-ui/react";
import { socials } from "@/data/site";

export function SocialLinks(props: StackProps) {
  return (
    <HStack as="ul" listStyleType="none" gap="5" {...props}>
      {socials.map(({ href, label, icon, external, download }) => (
        <Link
          key={label}
          as={NextLink}
          href={href}
          aria-label={label}
          color="fg.muted"
          _hover={{ color: "fg" }}
          transition="color 0.2s ease"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(download ? { download: true } : {})}
        >
          <Icon as={icon} boxSize="5" />
        </Link>
      ))}
    </HStack>
  );
}
