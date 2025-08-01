import React, { useState, useEffect } from "react";
import quotes from "./quotes";
import "./App.css";

// Génère une couleur avec un bon contraste pour l'accessibilité
const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 50) + 50; // 50-100%
  const lightness = Math.floor(Math.random() * 30) + 35; // 35-65% pour un bon contraste
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

function App() {
  const [index, setIndex] = useState(0);
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [usedQuotes, setUsedQuotes] = useState(new Set());
  const [error, setError] = useState(null);

  const changeQuote = () => {
    // Vérification robuste des données
    if (!quotes || quotes.length === 0) {
      setError("Aucune citation disponible");
      return;
    }

    // Vérifier que toutes les citations ont été utilisées
    if (usedQuotes.size >= quotes.length) {
      setUsedQuotes(new Set());
    }

    let newIndex;
    let attempts = 0;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
      attempts++;
      // Éviter une boucle infinie
      if (attempts > quotes.length * 2) break;
    } while (usedQuotes.has(newIndex) && usedQuotes.size < quotes.length);

    // Vérifier que la citation sélectionnée est valide
    const selectedQuote = quotes[newIndex];
    if (!selectedQuote || !selectedQuote.quote || !selectedQuote.author) {
      setError("Citation invalide détectée");
      return;
    }

    setIndex(newIndex);
    setUsedQuotes(prev => new Set(prev).add(newIndex));
    setBgColor(getRandomColor());
    setError(null);
  };

  useEffect(() => {
    changeQuote(); // Affiche une première citation aléatoire au chargement
  }, []);

  const current = quotes[index];

  // Affichage d'erreur si nécessaire
  if (error) {
    return (
      <div className="app-container error-container">
        <div className="quote-card">
          <h1 className="error-message">{error}</h1>
          <button className="quote-button" onClick={changeQuote}>
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="app-container"
      style={{ "--bg-color": bgColor, "--text-color": bgColor }}
    >
      <div className="quote-card">
        <h1 className="quote-text">{current?.quote || "Citation non disponible"}</h1>
        <p className="quote-author">— {current?.author || "Auteur inconnu"}</p>
        <button className="quote-button" onClick={changeQuote}>
          Nouvelle Citation
        </button>
        <div className="quote-counter">
          Citation {usedQuotes.size} sur {quotes.length}
        </div>
      </div>
    </div>
  );
}

export default App;
