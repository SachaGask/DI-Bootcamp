import React from 'react';

const QuoteDisplay = ({ quote, author, onNewQuote, bgColor, quoteNumber, totalQuotes, error }) => {
  if (error) {
    return (
      <div className="quote-card" role="alert" aria-live="assertive">
        <h1 className="error-message">{error}</h1>
        <button 
          className="quote-button" 
          onClick={onNewQuote}
          aria-label="Réessayer de charger une citation"
          style={{ backgroundColor: '#dc3545' }}
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="quote-card">
      <blockquote>
        <h1 
          className="quote-text" 
          aria-label={`Citation: ${quote}`}
          role="text"
        >
          {quote || "Citation non disponible"}
        </h1>
      </blockquote>
      <cite 
        className="quote-author" 
        aria-label={`Auteur: ${author}`}
      >
        — {author || "Auteur inconnu"}
      </cite>
      <button 
        className="quote-button" 
        onClick={onNewQuote}
        aria-label="Afficher une nouvelle citation"
        style={{ backgroundColor: bgColor }}
      >
        Nouvelle Citation
      </button>
      <div 
        className="quote-counter" 
        aria-live="polite"
        role="status"
      >
        Citation {quoteNumber} sur {totalQuotes}
      </div>
    </div>
  );
};

export default QuoteDisplay;
