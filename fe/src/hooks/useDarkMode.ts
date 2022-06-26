import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.theme ? localStorage.theme : "light"
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("notransition");
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);

    // This is fucky as hell
    const timer = setTimeout(() => {
      root.classList.remove("notransition");
    }, 1000);

    return () => clearTimeout(timer);
  }, [colorTheme, theme]);

  return { theme: colorTheme, setTheme };
};
export default useDarkMode;
