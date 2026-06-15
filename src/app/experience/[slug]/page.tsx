import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryDetailView } from "@/components/EntryDetailView";
import { experienceSlugs, getExperienceEntry } from "@/data/portfolio";

export function generateStaticParams() {
  return experienceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // Metadata defaults to English (the default locale).
  const entry = getExperienceEntry(slug, "en");
  if (!entry) return {};
  const title = entry.org ? `${entry.role} · ${entry.org}` : entry.title;
  return { title, description: entry.summary };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getExperienceEntry(slug, "en")) notFound();
  return <EntryDetailView slug={slug} kind="experience" />;
}
