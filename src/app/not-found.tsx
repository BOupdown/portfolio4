import NextLink from "next/link";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Kicker } from "@/components/primitives";

export default function NotFound() {
  return (
    <Container maxW="xl" py={{ base: "20", md: "32" }} textAlign="center">
      <Stack gap="4" align="center">
        <Kicker>404</Kicker>
        <Heading size={{ base: "2xl", md: "3xl" }} letterSpacing="tighter">
          Page not found
        </Heading>
        <Text color="fg.muted" maxW="md">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </Text>
        <Button colorPalette="blue" asChild mt="2">
          <NextLink href="/">Back home</NextLink>
        </Button>
      </Stack>
    </Container>
  );
}
