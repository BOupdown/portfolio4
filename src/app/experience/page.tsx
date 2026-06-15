import type { Metadata } from "next";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { EntryGrid } from "@/components/EntryCard";
import { Kicker } from "@/components/primitives";
import { experience } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internships and volunteering across cloud, AI, data engineering and full-stack development.",
};

export default function ExperiencePage() {
  return (
    <Container maxW="3xl" py={{ base: "12", md: "16" }}>
      <Stack gap="3" mb="10" maxW="2xl">
        <Kicker as="h1">Career</Kicker>
        <Heading size={{ base: "3xl", md: "4xl" }} letterSpacing="tighter">
          Experience
        </Heading>
        <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
          Internships and volunteering across cloud, AI, data engineering and
          full-stack development.
        </Text>
      </Stack>
      <EntryGrid entries={experience} />
    </Container>
  );
}
