import type { Metadata } from "next";
import { Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Kicker } from "@/components/primitives";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <Container maxW="xl" py={{ base: "12", md: "16" }}>
      <Stack gap="3" mb="8">
        <Kicker as="h1">Contact</Kicker>
        <Heading size={{ base: "3xl", md: "4xl" }} letterSpacing="tighter">
          Get in touch
        </Heading>
        <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
          {site.availability}. Reach me directly at{" "}
          <Link href={`mailto:${site.email}`} color="accent.fg" fontWeight="medium">
            {site.email}
          </Link>{" "}
          or send a message below.
        </Text>

        <SocialLinks pt="1" />
      </Stack>

      <ContactForm />
    </Container>
  );
}
