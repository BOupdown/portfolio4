"use client";

import { EntryDetail } from "@/components/EntryDetail";
import { getProject, getExperienceEntry } from "@/data/portfolio";
import { useLocale } from "@/i18n/provider";

export function EntryDetailView({
  slug,
  kind,
}: {
  slug: string;
  kind: "project" | "experience";
}) {
  const { locale } = useLocale();
  const entry =
    kind === "project" ? getProject(slug, locale) : getExperienceEntry(slug, locale);

  // Slug is guaranteed by generateStaticParams, so this is just a safety net.
  if (!entry) return null;
  return <EntryDetail entry={entry} />;
}
