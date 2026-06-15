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
import { getProjects, getExperience } from "@/data/portfolio";
import { site, stackGroups, education } from "@/data/site";
import { Kicker } from "@/components/primitives";
import { EntryGrid } from "@/components/EntryCard";
import { SocialLinks } from "@/components/SocialLinks";
import { useLocale } from "@/i18n/provider";
import { asset } from "@/lib/asset";

export default function Home() {
  const { locale, t } = useLocale();
  const featured = getProjects(locale).slice(0, 4);
  const experience = getExperience(locale);

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
            <Kicker color="fg.muted">{t.availability}</Kicker>
          </HStack>

          <Heading
            size={{ base: "4xl", md: "5xl" }}
            letterSpacing="tighter"
            lineHeight="1.05"
          >
            {site.name}
          </Heading>

          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" lineHeight="1.6" maxW="2xl">
            {t.tagline}
            {t.taglineExtra}
          </Text>

          <Text fontFamily="mono" fontSize="sm" color="fg.muted">
            {t.location}
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
            {t.actions.viewProjects} <Icon as={FiArrowRight} ml="1" />
          </NextLink>
        </Button>
        <Button variant="outline" asChild>
          <NextLink href="/contact">{t.actions.getInTouch}</NextLink>
        </Button>
      </HStack>

      <SocialLinks pt="6" />

      {/* Selected work */}
      <Stack gap="6" pt={{ base: "16", md: "24" }}>
        <Flex justify="space-between" align="baseline" gap="4">
          <Stack gap="2">
            <Kicker as="h2">{t.home.selectedWork}</Kicker>
            <Heading size={{ base: "xl", md: "2xl" }} letterSpacing="tight">
              {t.home.projects}
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
            {t.actions.allProjects} <FiArrowUpRight />
          </Link>
        </Flex>
        <EntryGrid entries={featured} />
      </Stack>

      {/* Experience timeline */}
      <Stack gap="6" pt={{ base: "16", md: "24" }}>
        <Flex justify="space-between" align="baseline" gap="4">
          <Stack gap="2">
            <Kicker as="h2">{t.home.whereIveWorked}</Kicker>
            <Heading size={{ base: "xl", md: "2xl" }} letterSpacing="tight">
              {t.home.experience}
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
            {t.actions.allExperience} <FiArrowUpRight />
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
          <Kicker as="h2">{t.home.toolbox}</Kicker>
          <Heading size={{ base: "xl", md: "2xl" }} letterSpacing="tight">
            {t.home.techStack}
          </Heading>
        </Stack>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
          {stackGroups.map((group) => (
            <Stack key={group.label} gap="2.5">
              <Text fontFamily="mono" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em" color="fg.muted">
                {t.stackGroups[group.label] ?? group.label}
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

      {/* Background: education & languages */}
      <Stack gap="6" pt={{ base: "16", md: "24" }}>
        <Stack gap="2">
          <Kicker as="h2">{t.about.kicker}</Kicker>
        </Stack>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
          <Stack gap="2.5">
            <Text fontFamily="mono" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em" color="fg.muted">
              {t.about.educationTitle}
            </Text>
            <Text fontWeight="medium" color="fg">
              {t.about.degree}
            </Text>
            <Text fontFamily="mono" fontSize="sm" color="fg.muted">
              {education.school} · {education.period}
            </Text>
          </Stack>
          <Stack gap="2.5">
            <Text fontFamily="mono" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em" color="fg.muted">
              {t.about.languagesTitle}
            </Text>
            <Text color="fg.muted" lineHeight="1.7">
              {t.about.languages}
            </Text>
          </Stack>
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
          {t.home.ctaHeading}
        </Heading>
        <Text color="fg.muted" mt="3" maxW="md" mx="auto">
          {t.availability}. {t.home.ctaTail}
        </Text>
        <HStack justify="center" gap="3" mt="6" wrap="wrap">
          <Button colorPalette="blue" asChild>
            <NextLink href="/contact">{t.actions.getInTouch}</NextLink>
          </Button>
          <Button variant="outline" asChild>
            <a href={asset(site.resume)} download>
              {t.actions.downloadCV}
            </a>
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}
