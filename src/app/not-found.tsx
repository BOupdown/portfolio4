"use client";

import NextLink from "next/link";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Kicker } from "@/components/primitives";
import { useLocale } from "@/i18n/provider";

export default function NotFound() {
  const { t } = useLocale();
  return (
    <Container maxW="xl" py={{ base: "20", md: "32" }} textAlign="center">
      <Stack gap="4" align="center">
        <Kicker>{t.notFound.kicker}</Kicker>
        <Heading size={{ base: "2xl", md: "3xl" }} letterSpacing="tighter">
          {t.notFound.title}
        </Heading>
        <Text color="fg.muted" maxW="md">
          {t.notFound.text}
        </Text>
        <Button colorPalette="blue" asChild mt="2">
          <NextLink href="/">{t.notFound.back}</NextLink>
        </Button>
      </Stack>
    </Container>
  );
}
