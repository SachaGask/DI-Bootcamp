import React, { useState } from "react";
import quotes from "./quotes";
import QuoteDisplay from "./components/QuoteDisplay";
import { useQuotes } from "./hooks/useQuotes";
import "./App.css";

// Génère une couleur avec un bon contraste pour l'accessibilité
export const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 50) + 50; // 50-100%
  const lightness = Math.floor(Math.random() * 30) + 35; // 35-65% pour un bon contraste
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

function App() {
  const [bgColor, setBgColor] = useState(getRandomColor());
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
    setBgColor(getRandomColor());
  };

  return (
    <div
      className="app-container"
      style={{ 
        "--bg-color": bgColor, 
        "--text-color": bgColor,
        backgroundColor: bgColor 
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
