"use client";

import NextLink from "next/link";
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import type { Entry } from "@/data/portfolio";
import { TagList } from "@/components/primitives";
import { useLocale } from "@/i18n/provider";

function basePath(entry: Entry): string {
  return entry.type === "Project" ? "/projects" : "/experience";
}

/**
 * Text-forward card. No stock imagery — the focus is on role, summary and
 * stack, which reads as more credible and stays fully legible.
 */
export function EntryCard({ entry }: { entry: Entry }) {
  const { t } = useLocale();
  return (
    <Link
      as={NextLink}
      href={`${basePath(entry)}/${entry.slug}`}
      role="group"
      width="100%"
      _hover={{ textDecoration: "none" }}
      _focusVisible={{
        outline: "2px solid",
        outlineColor: "accent.focusRing",
        outlineOffset: "2px",
      }}
      borderRadius="lg"
    >
      <Flex
        direction="column"
        height="100%"
        gap="3"
        p="6"
        bg="bg.panel"
        borderWidth="1px"
        borderColor="border"
        borderRadius="lg"
        transition="border-color 0.2s ease, background 0.2s ease"
        _groupHover={{ borderColor: "fg.muted" }}
      >
        <HStack justify="space-between" align="center">
          <Text
            fontFamily="mono"
            fontSize="xs"
            letterSpacing="0.08em"
            textTransform="uppercase"
            color="fg.muted"
          >
            {t.types[entry.type]}
          </Text>
          <Text fontFamily="mono" fontSize="xs" color="fg.muted">
            {entry.period}
          </Text>
        </HStack>

        <Box>
          <Text fontWeight="semibold" fontSize="lg" lineHeight="short" color="fg">
            {entry.org ? `${entry.role} · ${entry.org}` : entry.title}
          </Text>
          {entry.org && (
            <Text fontSize="sm" color="fg.muted" mt="0.5">
              {entry.location}
            </Text>
          )}
        </Box>

        <Text color="fg.muted" fontSize="sm" lineHeight="1.65">
          {entry.summary}
        </Text>

        <Box mt="auto" pt="2">
          <TagList tags={entry.stack} max={4} />
        </Box>

        <HStack
          color="fg"
          fontSize="sm"
          fontWeight="medium"
          gap="1"
          opacity={0}
          transform="translateX(-4px)"
          transition="opacity 0.2s ease, transform 0.2s ease"
          _groupHover={{ opacity: 1, transform: "translateX(0)" }}
        >
          <Text>{t.card.viewDetails}</Text>
          <FiArrowUpRight />
        </HStack>
      </Flex>
    </Link>
  );
}

export function EntryGrid({ entries }: { entries: Entry[] }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap="5"
      width="100%"
    >
      {entries.map((entry) => (
        <EntryCard key={entry.slug} entry={entry} />
      ))}
    </Box>
  );
}
