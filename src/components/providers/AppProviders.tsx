"use client";

import { ThemeProvider } from "next-themes";
import { HashScroll } from "@/components/layout/HashScroll";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="light"
      enableSystem={false}
      storageKey="sudhith-theme"
    >
      <HashScroll />
      {children}
    </ThemeProvider>
  );
}
