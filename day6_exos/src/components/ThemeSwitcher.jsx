import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <button onClick={toggleTheme}>
      Passer en mode {theme === "light" ? "sombre" : "clair"}
    </button>
  );
}
