import { DEFAULT_THEME } from "@/constants/defaultTheme";
import { THEME_KEY } from "@/constants/storageKey";
import type { Theme } from "@/types";
import { useEffect, useState } from "react";

const useThemeContext = (): [Theme,React.Dispatch<React.SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(THEME_KEY) as Theme) || DEFAULT_THEME
  );

  useEffect(() => {
    const rootElement = window.document.documentElement;

    rootElement.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme:dark)")
        .matches
        ? "dark"
        : "light";
      rootElement.classList.add(systemTheme);
      localStorage.setItem(THEME_KEY,systemTheme);
      return;
    }

    rootElement.classList.add(theme);
    localStorage.setItem(THEME_KEY,theme);
  }, [theme]);

  return [theme,setTheme];
};

export { useThemeContext };
