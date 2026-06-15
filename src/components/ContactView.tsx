"use client";

import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Kicker } from "@/components/primitives";
import { site } from "@/data/site";
import { useLocale } from "@/i18n/provider";

export function ContactView() {
  const { t } = useLocale();
  return (
    <Container maxW="xl" py={{ base: "12", md: "16" }}>
      <Stack gap="3" mb="8">
        <Kicker as="h1">{t.contact.kicker}</Kicker>
        <Heading size={{ base: "3xl", md: "4xl" }} letterSpacing="tighter">
          {t.contact.title}
        </Heading>
        <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
          {t.availability}. {t.contact.introA}
          <Text as="span" color="fg" fontWeight="medium">
            {site.email}
          </Text>
          {t.contact.introB}
        </Text>

        <SocialLinks pt="1" />
      </Stack>

      <ContactForm />
    </Container>
  );
}
