/** Convert display titles to URL-safe slugs. */
export function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}

export function departmentPath(slug: string): string {
  return `/departments/${slug}`;
}

export function newsPath(slug: string): string {
  return `/news/${slug}`;
}
