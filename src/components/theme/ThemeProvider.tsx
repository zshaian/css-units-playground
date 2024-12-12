import { ThemeProviderContext } from "@/context/ThemeProviderContext";
import type { ThemeProviderProps } from "@/types";
import { useThemeContext } from "@/hooks/useThemeContext";

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useThemeContext();

  return (
    <ThemeProviderContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export default ThemeProvider;
