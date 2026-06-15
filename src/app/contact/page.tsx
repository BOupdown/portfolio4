import type { Metadata } from "next";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
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
          {site.availability}. Send a message below — it reaches me directly, no
          email app required. You can also write to{" "}
          <Text as="span" color="fg" fontWeight="medium">
            {site.email}
          </Text>
          .
        </Text>

        <SocialLinks pt="1" />
      </Stack>

      <ContactForm />
    </Container>
  );
}
