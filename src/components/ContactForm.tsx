"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Field,
  Fieldset,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { site } from "@/data/site";

type Status = "idle" | "success" | "error";

// Web3Forms access key. These keys are public by design (safe in client-side
// code) and protected by the domain allowlist configured on web3forms.com.
// An env override is supported for local/staging use.
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "930639e7-8ac4-4585-8f25-a3e7474e6ed2";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries()) as Record<
      string,
      string
    >;

    setSubmitting(true);
    setStatus("idle");

    try {
      // Email is sent directly from the browser to Web3Forms — no backend and
      // no email client involved.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${data.name || "a visitor"}`,
          from_name: data.name,
          replyto: data.email,
          name: data.name,
          email: data.email,
          message: data.message,
          // Honeypot — submissions with this field filled are treated as spam.
          botcheck: data.botcheck,
        }),
      });

      const result = (await res.json().catch(() => null)) as
        | { success?: boolean }
        | null;

      if (!res.ok || !result?.success) {
        throw new Error("Request failed");
      }

      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Box
      as="form"
      onSubmit={onSubmit as React.FormEventHandler}
      borderWidth="1px"
      borderColor="border"
      borderRadius="xl"
      bg="bg.panel"
      p={{ base: "6", md: "8" }}
    >
      <Fieldset.Root size="lg">
        <Fieldset.Content>
          <Field.Root required>
            <Field.Label>
              Name or company <Field.RequiredIndicator />
            </Field.Label>
            <Input name="name" required />
          </Field.Root>

          <Field.Root required>
            <Field.Label>
              Email address <Field.RequiredIndicator />
            </Field.Label>
            <Input name="email" type="email" required />
          </Field.Root>

          <Field.Root required>
            <Field.Label>
              Message <Field.RequiredIndicator />
            </Field.Label>
            <Textarea name="message" rows={5} required />
          </Field.Root>

          {/* Honeypot field, hidden from real users. */}
          <Input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            display="none"
          />
        </Fieldset.Content>

        <Button
          type="submit"
          colorPalette="blue"
          alignSelf="flex-start"
          loading={submitting}
          loadingText="Sending…"
          mt="2"
        >
          Send message
        </Button>

        {status === "success" && (
          <Text color="green.500" fontSize="sm" mt="2">
            Thanks — your message has been sent. I&apos;ll reply soon.
          </Text>
        )}
        {status === "error" && (
          <Text color="red.500" fontSize="sm" mt="2">
            Something went wrong while sending. Please try again, or reach me at{" "}
            {site.email}.
          </Text>
        )}
      </Fieldset.Root>
    </Box>
  );
}
