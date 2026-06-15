"use client";

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/**
 * Sober, near-monochrome design system.
 * A single restrained accent (slate-blue) is used sparingly for emphasis,
 * focus rings and primary actions. Everything else relies on a neutral
 * gray scale and generous spacing for a premium, readable feel.
 */
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-sans), sans-serif" },
        body: { value: "var(--font-sans), sans-serif" },
        mono: { value: "var(--font-mono), monospace" },
      },
      letterSpacings: {
        tighter: { value: "-0.03em" },
      },
    },
    semanticTokens: {
      colors: {
        accent: {
          solid: { value: { base: "{colors.blue.600}", _dark: "{colors.blue.500}" } },
          contrast: { value: "white" },
          fg: { value: { base: "{colors.blue.700}", _dark: "{colors.blue.300}" } },
          muted: { value: { base: "{colors.blue.50}", _dark: "{colors.blue.950}" } },
          emphasized: { value: { base: "{colors.blue.700}", _dark: "{colors.blue.400}" } },
          focusRing: { value: { base: "{colors.blue.600}", _dark: "{colors.blue.500}" } },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      fontFamily: "var(--font-sans), sans-serif",
      bg: "bg",
      color: "fg",
    },
    "::selection": {
      bg: "accent.solid",
      color: "white",
    },
    "*": {
      scrollBehavior: "smooth",
    },
    a: {
      textUnderlineOffset: "3px",
    },
  },
});

export const system = createSystem(defaultConfig, config);
