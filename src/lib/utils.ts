const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function img(path: string): string {
  return `${basePath}${path}`;
}
