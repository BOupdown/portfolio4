"use client";

import { HStack, Icon, Link, type StackProps } from "@chakra-ui/react";
import { socials } from "@/data/site";
import { asset } from "@/lib/asset";

export function SocialLinks(props: StackProps) {
  return (
    <HStack gap="5" {...props}>
      {socials.map(({ href, label, icon, external, download }) => (
        <Link
          // Plain anchors on purpose: these are external URLs or a static file
          // download, not app routes — using next/link would make Next try to
          // client-navigate/prefetch them (and 404 on the PDF).
          key={label}
          href={download ? asset(href) : href}
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
