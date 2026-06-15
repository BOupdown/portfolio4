// Prefix for static assets served from /public.
// next/link and next/image handle `basePath` automatically, but plain
// <img>, <a download> and metadata URLs do not — use `asset()` for those.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
