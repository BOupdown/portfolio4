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
import { useLocale } from "@/i18n/provider";

type Status = "idle" | "success" | "error";

// Web3Forms access key. These keys are public by design (safe in client-side
// code) and protected by the domain allowlist configured on web3forms.com.
// An env override is supported for local/staging use.
// Use `||` (not `??`): the deploy workflow injects an empty string when the
// optional WEB3FORMS_KEY secret is unset, and an empty key must fall back too.
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "930639e7-8ac4-4585-8f25-a3e7474e6ed2";

export function ContactForm() {
  const { t } = useLocale();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries()) as Record<
      string,
      string
    >;

    setSubmitting(true);
    setStatus("idle");
    setErrorMsg(null);

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
          name: data.name,
          email: data.email,
          message: data.message,
          // Honeypot — submissions with this field filled are treated as spam.
          botcheck: data.botcheck,
        }),
      });

      const result = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!res.ok || !result?.success) {
        // Surface the actual reason (e.g. "Domain not allowed") to make
        // misconfiguration obvious instead of hiding it behind a generic error.
        throw new Error(result?.message || `Request failed (${res.status})`);
      }

      setStatus("success");
      formEl.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : null);
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
              {t.contact.nameLabel} <Field.RequiredIndicator />
            </Field.Label>
            <Input name="name" required />
          </Field.Root>

          <Field.Root required>
            <Field.Label>
              {t.contact.emailLabel} <Field.RequiredIndicator />
            </Field.Label>
            <Input name="email" type="email" required />
          </Field.Root>

          <Field.Root required>
            <Field.Label>
              {t.contact.messageLabel} <Field.RequiredIndicator />
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
          loadingText={t.contact.sending}
          mt="2"
        >
          {t.contact.send}
        </Button>

        {status === "success" && (
          <Text color="green.500" fontSize="sm" mt="2">
            {t.contact.success}
          </Text>
        )}
        {status === "error" && (
          <Text color="red.500" fontSize="sm" mt="2">
            {errorMsg
              ? `${t.contact.errorPrefix}: ${errorMsg}. `
              : `${t.contact.errorGeneric}. `}
            {t.contact.errorTail} {site.email}.
          </Text>
        )}
      </Fieldset.Root>
    </Box>
  );
}
