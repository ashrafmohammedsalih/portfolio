const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function p(path: string): string {
  if (path.startsWith("http") || path.startsWith("mailto") || path.startsWith("tel") || path.startsWith("#")) {
    return path;
  }
  return `${basePath}${path}`;
}
