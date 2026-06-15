"use client";

import NextLink from "next/link";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects, experience } from "@/data/portfolio";
import { site, stackGroups } from "@/data/site";
import { Kicker } from "@/components/primitives";
import { EntryGrid } from "@/components/EntryCard";
import { SocialLinks } from "@/components/SocialLinks";
import { asset } from "@/lib/asset";

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <Container maxW="3xl" py={{ base: "12", md: "20" }}>
      {/* Hero */}
      <Flex
        direction={{ base: "column-reverse", sm: "row" }}
        align={{ base: "flex-start", sm: "center" }}
        justify="space-between"
        gap={{ base: "8", sm: "10" }}
      >
        <Stack gap="5" flex="1">
          <HStack gap="2">
            <Box w="6px" h="6px" borderRadius="full" bg="green.500" />
            <Kicker color="fg.muted">{site.availability}</Kicker>
          </HStack>

          <Heading
            size={{ base: "4xl", md: "5xl" }}
            letterSpacing="tighter"
            lineHeight="1.05"
          >
            {site.name}
          </Heading>

          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" lineHeight="1.6" maxW="2xl">
            {site.tagline} I turn complex problems into clean, reliable,
            maintainable systems.
          </Text>

          <Text fontFamily="mono" fontSize="sm" color="fg.muted">
            {site.location}
          </Text>
        </Stack>

        <Box flexShrink={0}>
          <Image
            src={asset("/profil.jpeg")}
            alt={site.name}
            boxSize={{ base: "96px", sm: "128px", md: "150px" }}
            borderRadius="full"
            objectFit="cover"
            borderWidth="1px"
            borderColor="border"
          />
        </Box>
      </Flex>

      <HStack gap="3" pt="8" wrap="wrap">
        <Button colorPalette="blue" asChild>
          <NextLink href="/projects">
            View projects <Icon as={FiArrowRight} ml="1" />
          </NextLink>
        </Button>
        <Button variant="outline" asChild>
          <NextLink href="/contact">Get in touch</NextLink>
        </Button>
      </HStack>

      <SocialLinks pt="6" />

      {/* Selected work */}
      <Stack gap="6" pt={{ base: "16", md: "24" }}>
        <Flex justify="space-between" align="baseline" gap="4">
          <Stack gap="2">
            <Kicker as="h2">Selected work</Kicker>
            <Heading size={{ base: "xl", md: "2xl" }} letterSpacing="tight">
              Projects
            </Heading>
          </Stack>
          <Link
            as={NextLink}
            href="/projects"
            fontSize="sm"
            fontWeight="medium"
            color="fg.muted"
            display="inline-flex"
            alignItems="center"
            gap="1"
            _hover={{ color: "fg", textDecoration: "none" }}
          >
            All projects <FiArrowUpRight />
          </Link>
        </Flex>
        <EntryGrid entries={featured} />
      </Stack>

      {/* Experience timeline */}
      <Stack gap="6" pt={{ base: "16", md: "24" }}>
        <Flex justify="space-between" align="baseline" gap="4">
          <Stack gap="2">
            <Kicker as="h2">Where I&apos;ve worked</Kicker>
            <Heading size={{ base: "xl", md: "2xl" }} letterSpacing="tight">
              Experience
            </Heading>
          </Stack>
          <Link
            as={NextLink}
            href="/experience"
            fontSize="sm"
            fontWeight="medium"
            color="fg.muted"
            display="inline-flex"
            alignItems="center"
            gap="1"
            _hover={{ color: "fg", textDecoration: "none" }}
          >
            All experience <FiArrowUpRight />
          </Link>
        </Flex>

        <Stack gap="0" separator={<Box borderTopWidth="1px" borderColor="border" />}>
          {experience.map((e) => (
            <Link
              key={e.slug}
              as={NextLink}
              href={`/experience/${e.slug}`}
              role="group"
              py="5"
              _hover={{ textDecoration: "none" }}
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                gap={{ base: "1", sm: "6" }}
                align={{ base: "flex-start", sm: "baseline" }}
              >
                <Text
                  fontFamily="mono"
                  fontSize="sm"
                  color="fg.muted"
                  minW={{ sm: "32" }}
                  flexShrink={0}
                >
                  {e.period}
                </Text>
                <Box flex="1">
                  <HStack justify="space-between" gap="3">
                    <Text fontWeight="semibold" color="fg" _groupHover={{ color: "accent.fg" }}>
                      {e.role} · {e.org}
                    </Text>
                    <Icon
                      as={FiArrowUpRight}
                      color="fg.muted"
                      opacity={0}
                      _groupHover={{ opacity: 1 }}
                      transition="opacity 0.2s ease"
                    />
                  </HStack>
                  <Text fontSize="sm" color="fg.muted" mt="1" lineHeight="1.6">
                    {e.summary}
                  </Text>
                </Box>
              </Flex>
            </Link>
          ))}
        </Stack>
      </Stack>

      {/* Stack */}
      <Stack gap="6" pt={{ base: "16", md: "24" }}>
        <Stack gap="2">
          <Kicker as="h2">Toolbox</Kicker>
          <Heading size={{ base: "xl", md: "2xl" }} letterSpacing="tight">
            Tech stack
          </Heading>
        </Stack>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
          {stackGroups.map((group) => (
            <Stack key={group.label} gap="2.5">
              <Text fontFamily="mono" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em" color="fg.muted">
                {group.label}
              </Text>
              <Wrap gap="1.5">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    size="sm"
                    color="fg.muted"
                    fontFamily="mono"
                    fontWeight="normal"
                    textTransform="none"
                  >
                    {item}
                  </Badge>
                ))}
              </Wrap>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>

      {/* Contact CTA */}
      <Box
        mt={{ base: "16", md: "24" }}
        p={{ base: "8", md: "10" }}
        borderWidth="1px"
        borderColor="border"
        borderRadius="xl"
        bg="bg.panel"
        textAlign="center"
      >
        <Heading size={{ base: "xl", md: "2xl" }} letterSpacing="tight">
          Let&apos;s build something together
        </Heading>
        <Text color="fg.muted" mt="3" maxW="md" mx="auto">
          {site.availability}. The fastest way to reach me is by email or
          LinkedIn.
        </Text>
        <HStack justify="center" gap="3" mt="6" wrap="wrap">
          <Button colorPalette="blue" asChild>
            <NextLink href="/contact">Get in touch</NextLink>
          </Button>
          <Button variant="outline" asChild>
            <a href={asset(site.resume)} download>
              Download CV
            </a>
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}
