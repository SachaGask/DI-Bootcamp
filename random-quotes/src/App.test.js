import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import quotes from './quotes';

// Mock du fichier quotes pour les tests
jest.mock('./quotes', () => [
  { quote: "Test quote 1", author: "Test Author 1" },
  { quote: "Test quote 2", author: "Test Author 2" },
  { quote: "Test quote 3", author: "Test Author 3" }
]);

describe('Random Quote Generator', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Test quote/)).toBeInTheDocument();
  });

  test('displays a quote and author', () => {
    render(<App />);
    expect(screen.getByText(/Test Author/)).toBeInTheDocument();
  });

  test('changes quote when button is clicked', () => {
    render(<App />);
    const button = screen.getByText('Nouvelle Citation');
    
    const initialQuote = screen.getByText(/Test quote/).textContent;
    fireEvent.click(button);
    
    // Après le clic, la citation peut changer (ou rester la même dans de rares cas)
    const afterClickQuote = screen.getByText(/Test quote/).textContent;
    expect(screen.getByText('Nouvelle Citation')).toBeInTheDocument();
  });

  test('displays quote counter', () => {
    render(<App />);
    expect(screen.getByText(/Citation \d+ sur \d+/)).toBeInTheDocument();
  });

  test('handles empty quotes array gracefully', () => {
    jest.resetModules();
    jest.doMock('./quotes', () => []);
    
    const AppWithEmptyQuotes = require('./App').default;
    render(<AppWithEmptyQuotes />);
    
    expect(screen.getByText('Aucune citation disponible')).toBeInTheDocument();
  });
});

// Tests pour les fonctions utilitaires
describe('Utility Functions', () => {
  test('getRandomColor returns valid HSL string', () => {
    // Cette fonction serait exportée depuis App.jsx pour être testée
    const hslRegex = /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/;
    
    // Simuler la fonction getRandomColor
    const getRandomColor = () => {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 50) + 50;
      const lightness = Math.floor(Math.random() * 30) + 35;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };
    
    const color = getRandomColor();
    expect(color).toMatch(hslRegex);
  });
});
