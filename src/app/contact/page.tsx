import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return <ContactView />;
}
