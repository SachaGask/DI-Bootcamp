import React, { useState, useEffect } from "react";
import quotes from "./quotes";

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
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.4s",
      }}
    >
      <div style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        textAlign: "center",
        maxWidth: "600px"
      }}>
        <h1 style={{ color: bgColor }}>{current.quote}</h1>
        <p style={{ fontWeight: "bold" }}>— {current.author}</p>
        <button
          onClick={changeQuote}
          style={{
            backgroundColor: bgColor,
            color: "#fff",
            border: "none",
            padding: "0.5rem 1.5rem",
            marginTop: "1rem",
            cursor: "pointer",
            borderRadius: "8px"
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
