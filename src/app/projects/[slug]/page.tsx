import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryDetail } from "@/components/EntryDetail";
import { projects, getProject } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getProject(slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getProject(slug);
  if (!entry) notFound();
  return <EntryDetail entry={entry} />;
}
