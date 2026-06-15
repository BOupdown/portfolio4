import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryDetailView } from "@/components/EntryDetailView";
import { projectSlugs, getProject } from "@/data/portfolio";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // Metadata defaults to English (the default locale).
  const entry = getProject(slug, "en");
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProject(slug, "en")) notFound();
  return <EntryDetailView slug={slug} kind="project" />;
}
