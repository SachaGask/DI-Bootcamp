import { useState, useEffect } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  return (
    <div>
      <h2>Color Exercise</h2>
      <h1>{favoriteColor}</h1>
      <button onClick={() => setFavoriteColor("blue")}>
        Change color to blue
      </button>
    </div>
  );
}

export default Color;
