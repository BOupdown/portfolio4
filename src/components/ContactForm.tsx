"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { site } from "@/data/site";

type Status = "idle" | "success" | "error";

// Optional: set NEXT_PUBLIC_WEB3FORMS_KEY (free, from web3forms.com) to receive
// submissions by email without a backend. Without it, the form gracefully falls
// back to opening the visitor's email client — so it always works on a static host.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

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

    if (!WEB3FORMS_KEY) {
      // Fallback: compose an email in the visitor's mail client.
      const subject = encodeURIComponent(`Portfolio enquiry — ${data.name ?? ""}`);
      const body = encodeURIComponent(
        `Name / company: ${data.name ?? ""}\nEmail: ${data.email ?? ""}\n\n${data.message ?? ""}`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setSubmitting(true);
    setStatus("idle");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${data.name ?? "visitor"}`,
          ...data,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
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

          <Field.Root>
            <Field.Label>Message</Field.Label>
            <Textarea name="message" rows={5} />
          </Field.Root>
        </Fieldset.Content>

        <Button
          type="submit"
          colorPalette="blue"
          alignSelf="flex-start"
          loading={submitting}
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
            Something went wrong. Please email me directly at {site.email}.
          </Text>
        )}
      </Fieldset.Root>
    </Box>
  );
}
