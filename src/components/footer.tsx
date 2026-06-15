"use client";

import { Flex, Text, type FlexProps } from "@chakra-ui/react";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";

export function Footer(props: FlexProps) {
  return (
    <Flex
      as="footer"
      direction={{ base: "column", sm: "row" }}
      align="center"
      justify="space-between"
      gap="4"
      py="8"
      px={{ base: "5", md: "8" }}
      mt="10"
      borderTopWidth="1px"
      borderColor="border"
      {...props}
    >
      <Text fontSize="sm" color="fg.muted">
        © {new Date().getFullYear()} {site.name}
      </Text>
      <SocialLinks />
    </Flex>
  );
}
