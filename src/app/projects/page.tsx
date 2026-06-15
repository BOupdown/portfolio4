import type { Metadata } from "next";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { EntryGrid } from "@/components/EntryCard";
import { Kicker } from "@/components/primitives";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal and academic projects spanning cloud infrastructure, real-time systems, applied AI and low-level programming.",
};

export default function ProjectsPage() {
  return (
    <Container maxW="3xl" py={{ base: "12", md: "16" }}>
      <Stack gap="3" mb="10" maxW="2xl">
        <Kicker as="h1">Work</Kicker>
        <Heading size={{ base: "3xl", md: "4xl" }} letterSpacing="tighter">
          Projects
        </Heading>
        <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
          A selection of personal and academic projects spanning cloud
          infrastructure, real-time systems, applied AI and low-level
          programming.
        </Text>
      </Stack>
      <EntryGrid entries={projects} />
    </Container>
  );
}
