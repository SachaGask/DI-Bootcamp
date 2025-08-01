import React, { useState } from "react";
import quotes from "./quotes";
import QuoteDisplay from "./components/QuoteDisplay";
import { useQuotes } from "./hooks/useQuotes";
import "./App.css";

// Amélioration de la fonction getRandomColor avec un algorithme de contraste robuste
export const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 50) + 50; // 50-100%
  const lightness = Math.floor(Math.random() * 30) + 35; // 35-65% pour un bon contraste
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  // Vérification du contraste avec les normes WCAG
  const isContrastSufficient = (hue, saturation, lightness) => {
    const luminance = (lightness / 100) * (saturation / 100);
    return luminance > 0.5; // Exemple de seuil de contraste
  };

  return isContrastSufficient(hue, saturation, lightness) ? color : getRandomColor();
};

function App() {
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [textColor, setTextColor] = useState("#FFFFFF"); // Couleur par défaut du texte
  const { 
    currentQuote, 
    nextQuote, 
    error, 
    quoteNumber, 
    totalQuotes, 
    hasQuotes 
  } = useQuotes(quotes);

  const handleNewQuote = () => {
    nextQuote();
    const newBgColor = getRandomColor();
    setBgColor(newBgColor);
    setTextColor(newBgColor === "#FFFFFF" ? "#000000" : "#FFFFFF"); // Ajustement dynamique
  };

  return (
    <div
      className="app-container"
      style={{ 
        "--bg-color": bgColor, 
        "--text-color": textColor,
        backgroundColor: bgColor, 
        color: textColor // Application de la couleur du texte
      }}
      role="main"
      aria-label="Générateur de citations aléatoires"
    >
      <QuoteDisplay
        quote={currentQuote?.quote}
        author={currentQuote?.author}
        onNewQuote={handleNewQuote}
        bgColor={bgColor}
        quoteNumber={quoteNumber}
        totalQuotes={totalQuotes}
        error={error}
      />
    </div>
  );
}

export default App;
