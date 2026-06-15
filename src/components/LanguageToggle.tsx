"use client";

import { Button } from "@chakra-ui/react";
import { locales } from "@/i18n/config";
import { useLocale } from "@/i18n/provider";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();
  const next = locales[(locales.indexOf(locale) + 1) % locales.length];

  return (
    <Button
      onClick={() => setLocale(next)}
      variant="ghost"
      size="sm"
      fontFamily="mono"
      fontWeight="medium"
      aria-label={`${t.language}: ${locale.toUpperCase()}`}
      title={t.language}
    >
      {locale.toUpperCase()}
    </Button>
  );
}
