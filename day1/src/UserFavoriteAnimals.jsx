import React, { Component } from "react";

class UserFavoriteAnimals extends Component {
  render() {
    const { favAnimals } = this.props;
    return (
      <ul>
        {favAnimals.map((animal, i) => (
          <li key={i}>{animal}</li>
        ))}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;