import type { NextConfig } from "next";

// `NEXT_PUBLIC_BASE_PATH` is injected by the GitHub Pages deploy workflow
// (e.g. "/portfolio4"). It stays empty for local development and custom domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export — no server runtime required. Deployable to any static host.
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    // next/image optimization needs a server; disable it for static export.
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react", "next-themes", "react-icons"],
  },
};

export default nextConfig;
