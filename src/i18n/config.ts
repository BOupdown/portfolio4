export type Locale = "en" | "fr";

export const locales: Locale[] = ["en", "fr"];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "fr";
}
