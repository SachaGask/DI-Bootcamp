import { useState, useEffect } from 'react';

// Mélange un tableau pour éviter les répétitions
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Valide une citation individuelle
const validateQuote = (quote, index) => {
  if (!quote || typeof quote !== 'object') {
    console.warn(`Citation invalide à l'index ${index}: objet manquant`);
    return false;
  }
  if (!quote.quote || typeof quote.quote !== 'string' || quote.quote.trim() === '') {
    console.warn(`Citation invalide à l'index ${index}: texte de citation manquant`);
    return false;
  }
  if (!quote.author || typeof quote.author !== 'string' || quote.author.trim() === '') {
    console.warn(`Citation invalide à l'index ${index}: auteur manquant`);
    return false;
  }
  return true;
};

export const useQuotes = (quotesData) => {
  const [shuffledIndices, setShuffledIndices] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [error, setError] = useState(null);
  const [validQuotes, setValidQuotes] = useState([]);

  // Initialise et valide les citations
  const initializeQuotes = () => {
    try {
      if (!quotesData || quotesData.length === 0) {
        setError("Aucune citation disponible dans la base de données");
        return;
      }

      // Valider toutes les citations
      const valid = quotesData.filter(validateQuote);

      if (valid.length === 0) {
        setError("Aucune citation valide trouvée");
        return;
      }

      if (valid.length < quotesData.length) {
        setError(`Attention: ${quotesData.length - valid.length} citations invalides ont été ignorées`);
      }

      setValidQuotes(valid);
      const indices = Array.from({ length: valid.length }, (_, i) => i);
      setShuffledIndices(shuffleArray(indices));
      setCurrentPosition(0);
      
      // Effacer l'erreur après 3 secondes si c'est juste un avertissement
      if (valid.length > 0 && valid.length < quotesData.length) {
        setTimeout(() => setError(null), 3000);
      } else {
        setError(null);
      }
    } catch (err) {
      setError("Erreur lors du chargement des citations");
      console.error("Erreur d'initialisation:", err);
    }
  };

  // Passe à la citation suivante
  const nextQuote = () => {
    try {
      if (shuffledIndices.length === 0) {
        initializeQuotes();
        return;
      }

      let nextPosition = currentPosition + 1;
      
      // Si on a atteint la fin, remélanger
      if (nextPosition >= shuffledIndices.length) {
        setShuffledIndices(shuffleArray(shuffledIndices));
        nextPosition = 0;
      }

      setCurrentPosition(nextPosition);
      setError(null);
    } catch (err) {
      setError("Erreur lors du changement de citation");
      console.error("Erreur de changement:", err);
    }
  };

  // Initialise au montage du composant
  useEffect(() => {
    initializeQuotes();
  }, [quotesData]);

  const currentIndex = shuffledIndices[currentPosition];
  const currentQuote = validQuotes[currentIndex];

  return {
    currentQuote,
    nextQuote,
    error,
    quoteNumber: currentPosition + 1,
    totalQuotes: shuffledIndices.length,
    hasQuotes: shuffledIndices.length > 0
  };
};

export default useQuotes;
