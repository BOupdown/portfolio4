"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  List,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import type { Entry } from "@/data/portfolio";
import { Kicker, TagList } from "@/components/primitives";

export function EntryDetail({ entry }: { entry: Entry }) {
  const isExperience = entry.type !== "Project";
  const backHref = isExperience ? "/experience" : "/projects";
  const backLabel = isExperience ? "Back to experience" : "Back to projects";

  const metaParts = [entry.org, entry.location, entry.period].filter(Boolean);

  return (
    <Container maxW="2xl" py={{ base: "10", md: "16" }}>
      <Link
        as={NextLink}
        href={backHref}
        display="inline-flex"
        alignItems="center"
        gap="2"
        color="fg.muted"
        fontSize="sm"
        fontWeight="medium"
        mb="10"
        _hover={{ color: "fg", textDecoration: "none" }}
      >
        <FiArrowLeft />
        {backLabel}
      </Link>

      <Stack gap="4" mb="10">
        <Kicker>{entry.type}</Kicker>
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          lineHeight="1.15"
          letterSpacing="tighter"
        >
          {entry.headline}
        </Heading>
        <Text fontFamily="mono" fontSize="sm" color="fg.muted">
          {metaParts.join("  ·  ")}
        </Text>
        <Text fontSize={{ base: "lg", md: "xl" }} color="fg" lineHeight="1.6">
          {entry.summary}
        </Text>
      </Stack>

      <Separator mb="8" />

      <Stack gap="3" mb="10">
        <Kicker as="h2">Highlights</Kicker>
        <List.Root gap="3" ps="0" listStyleType="none">
          {entry.highlights.map((h, i) => (
            <List.Item
              key={i}
              display="flex"
              gap="3"
              color="fg.muted"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.7"
            >
              <Box
                flexShrink={0}
                mt="2.5"
                w="6px"
                h="6px"
                borderRadius="full"
                bg="accent.solid"
              />
              <Text as="span">{h}</Text>
            </List.Item>
          ))}
        </List.Root>
      </Stack>

      <Stack gap="3" mb="10">
        <Kicker as="h2">Stack</Kicker>
        <TagList tags={entry.stack} />
      </Stack>

      {entry.links && entry.links.length > 0 && (
        <HStack gap="5" wrap="wrap" mb="10">
          {entry.links.map((l) => (
            <Link
              key={l.href}
              as={NextLink}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap="2"
              fontWeight="medium"
              color="accent.fg"
              _hover={{ textDecoration: "underline" }}
            >
              {l.label}
              <Icon as={FiArrowUpRight} />
            </Link>
          ))}
        </HStack>
      )}

      <Separator mb="6" />

      <Link
        as={NextLink}
        href={backHref}
        display="inline-flex"
        alignItems="center"
        gap="2"
        color="fg.muted"
        fontSize="sm"
        fontWeight="medium"
        _hover={{ color: "fg", textDecoration: "none" }}
      >
        <FiArrowLeft />
        {backLabel}
      </Link>
    </Container>
  );
}
