import { createContext, useContext } from "react";
import type { ThemeProviderState } from "@/types";

const initialThemeState: ThemeProviderState = ["system",() => null];

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialThemeState);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
