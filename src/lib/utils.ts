export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function externalRel() {
  return { target: "_blank" as const, rel: "noopener noreferrer" };
}
