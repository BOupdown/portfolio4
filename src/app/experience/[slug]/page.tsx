import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryDetail } from "@/components/EntryDetail";
import { experience, getExperience } from "@/data/portfolio";

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getExperience(slug);
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
  const entry = getExperience(slug);
  if (!entry) notFound();
  return <EntryDetail entry={entry} />;
}
