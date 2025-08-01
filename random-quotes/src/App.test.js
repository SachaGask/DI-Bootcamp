import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App, { getRandomColor } from './App';
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
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('displays a quote and author', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Test quote/)).toBeInTheDocument();
      expect(screen.getByText(/Test Author/)).toBeInTheDocument();
    });
  });

  test('changes quote when button is clicked and ensures no immediate repetition', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText(/Test quote/)).toBeInTheDocument();
    });
    
    const button = screen.getByLabelText('Afficher une nouvelle citation');
    const initialQuote = screen.getByText(/Test quote/).textContent;
    
    fireEvent.click(button);
    
    await waitFor(() => {
      const afterClickQuote = screen.getByText(/Test quote/).textContent;
      // Avec 3 citations différentes, la nouvelle devrait être différente
      if (quotes.length > 1) {
        expect(afterClickQuote).not.toBe(initialQuote);
      }
    });
  });

  test('displays quote counter correctly', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Citation \d+ sur \d+/)).toBeInTheDocument();
    });
  });

  test('handles empty quotes array gracefully', () => {
    jest.resetModules();
    jest.doMock('./quotes', () => []);
    
    const AppWithEmptyQuotes = require('./App').default;
    render(<AppWithEmptyQuotes />);
    
    expect(screen.getByText('Aucune citation disponible dans la base de données')).toBeInTheDocument();
  });

  test('handles malformed quotes data', () => {
    jest.resetModules();
    jest.doMock('./quotes', () => [
      { quote: "", author: "Test Author" }, // Citation vide
      { quote: "Valid quote", author: "" }, // Auteur vide
      null, // Objet null
      { quote: "Valid quote 2", author: "Valid Author 2" } // Citation valide
    ]);
    
    const AppWithBadData = require('./App').default;
    render(<AppWithBadData />);
    
    // Devrait afficher un avertissement mais continuer à fonctionner
    expect(screen.getByText(/citations invalides ont été ignorées/)).toBeInTheDocument();
  });

  test('button has proper accessibility attributes', async () => {
    render(<App />);
    
    await waitFor(() => {
      const button = screen.getByLabelText('Afficher une nouvelle citation');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('aria-label');
    });
  });

  test('quote counter updates correctly on multiple clicks', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Citation 1 sur 3')).toBeInTheDocument();
    });
    
    const button = screen.getByLabelText('Afficher une nouvelle citation');
    
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText('Citation 2 sur 3')).toBeInTheDocument();
    });
    
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText('Citation 3 sur 3')).toBeInTheDocument();
    });
  });
});

// Tests pour les fonctions utilitaires
describe('Utility Functions', () => {
  test('getRandomColor returns valid HSL string with proper contrast', () => {
    const hslRegex = /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/;
    
    // Tester plusieurs générations
    for (let i = 0; i < 10; i++) {
      const color = getRandomColor();
      expect(color).toMatch(hslRegex);
      
      // Extraire les valeurs pour vérifier les contraintes
      const matches = color.match(/hsl\((\d+), (\d+)%, (\d+)%\)/);
      const [, hue, saturation, lightness] = matches.map(Number);
      
      expect(hue).toBeGreaterThanOrEqual(0);
      expect(hue).toBeLessThan(360);
      expect(saturation).toBeGreaterThanOrEqual(50);
      expect(saturation).toBeLessThanOrEqual(100);
      expect(lightness).toBeGreaterThanOrEqual(35);
      expect(lightness).toBeLessThanOrEqual(65);
    }
  });

  test('getRandomColor generates different colors', () => {
    const colors = new Set();
    
    // Générer 20 couleurs et vérifier qu'on a de la variété
    for (let i = 0; i < 20; i++) {
      colors.add(getRandomColor());
    }
    
    // On devrait avoir plusieurs couleurs différentes
    expect(colors.size).toBeGreaterThan(1);
  });
});
