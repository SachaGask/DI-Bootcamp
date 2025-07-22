import { useContext, useEffect } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Passer en mode {theme === "light" ? "sombre" : "clair"}
    </button>
  );
}

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', minHeight: '60vh' }}>
      <h1>Bienvenue</h1>
      <ThemeSwitcher />
      <hr style={{ width: '100%', margin: '2rem 0' }} />
      <CharCounter />
    </div>
  );
}
import CharCounter from "./CharCounter";

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}