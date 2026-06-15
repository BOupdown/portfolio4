"use client";

import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { EntryGrid } from "@/components/EntryCard";
import { Kicker } from "@/components/primitives";
import { getProjects } from "@/data/portfolio";
import { useLocale } from "@/i18n/provider";

export function ProjectsView() {
  const { locale, t } = useLocale();
  return (
    <Container maxW="3xl" py={{ base: "12", md: "16" }}>
      <Stack gap="3" mb="10" maxW="2xl">
        <Kicker as="h1">{t.projectsPage.kicker}</Kicker>
        <Heading size={{ base: "3xl", md: "4xl" }} letterSpacing="tighter">
          {t.projectsPage.title}
        </Heading>
        <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
          {t.projectsPage.intro}
        </Text>
      </Stack>
      <EntryGrid entries={getProjects(locale)} />
    </Container>
  );
}
