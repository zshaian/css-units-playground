import { useEffect, useState } from "react";

export const useMediaQuery = (breakpoint: string): boolean => {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia(breakpoint).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(breakpoint);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isDesktop;
};
