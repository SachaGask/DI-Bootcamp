import { ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CharCounter from "./components/CharCounter";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ maxWidth: 600, margin: '2rem auto', padding: 24 }}>
        <h1>Exercices React</h1>
        <section style={{ marginBottom: '2rem' }}>
          <h2>1. Theme Switcher</h2>
          <ThemeSwitcher />
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2>2. Character Counter</h2>
          <CharCounter />
        </section>
        <section>
          <h2>3. Todo List</h2>
          <TodoList />
        </section>
      </div>
    </ThemeProvider>
  );
}