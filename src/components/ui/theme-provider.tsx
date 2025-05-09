"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: string;
  enableSystem?: boolean;
};

export function ThemeProvider({ children, ...props }: Props) {
  return (
    <NextThemesProvider
      defaultTheme="system" // Setting system theme as default
      attribute="class"     // Using class for dark mode toggle
      enableSystem={true}   // Allow system-level dark/light mode preference
      {...props}            // Passing other props for further customization
    >
      {children}
    </NextThemesProvider>
  );
}
