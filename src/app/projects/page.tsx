import type { Metadata } from "next";
import { ProjectsView } from "@/components/ProjectsView";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal and academic projects spanning cloud infrastructure, real-time systems, applied AI and low-level programming.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
