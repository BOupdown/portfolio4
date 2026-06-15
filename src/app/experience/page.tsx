import type { Metadata } from "next";
import { ExperienceView } from "@/components/ExperienceView";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internships and volunteering across cloud, AI, data engineering and full-stack development.",
};

export default function ExperiencePage() {
  return <ExperienceView />;
}
