import React, { Component } from "react";
import './Exercise.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>Exercise</h1>
        <p className="para">Ceci est un paragraphe stylé avec CSS</p>
        <a href="https://react.dev/">Lien vers React</a>
        <form>
          <input type="text" placeholder="Votre nom" />
          <button type="submit">Envoyer</button>
        </form>
        <img src="https://picsum.photos/200" alt="Random" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;