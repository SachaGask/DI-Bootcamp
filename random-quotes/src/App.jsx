import React, { useState, useEffect } from "react";
import quotes from "./quotes";
import "./App.css";

const getRandomIndex = (max, exclude) => {
  let index;
  do {
    index = Math.floor(Math.random() * max);
  } while (index === exclude);
  return index;
};

const getRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;

function App() {
  const [index, setIndex] = useState(0);
  const [bgColor, setBgColor] = useState(getRandomColor());

  const changeQuote = () => {
    if (quotes.length === 0) {
      console.error("No quotes available");
      return;
    }
    const newIndex = getRandomIndex(quotes.length, index);
    setIndex(newIndex);
    setBgColor(getRandomColor());
  };

  useEffect(() => {
    changeQuote(); // show a first random quote on load
  }, []);

  const current = quotes[index];

  return (
    <div
      className="app-container"
      style={{ "--bg-color": bgColor, "--text-color": bgColor }}
    >
      <div className="quote-card">
        <h1 className="quote-text">{current?.quote || "No quote available"}</h1>
        <p className="quote-author">— {current?.author || "Unknown"}</p>
        <button className="quote-button" onClick={changeQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
