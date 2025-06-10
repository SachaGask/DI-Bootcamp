document.getElementById("button").addEventListener("click", getRandomCharacter);

async function getRandomCharacter() {
  const infoDiv = document.getElementById("info");
  const loadingDiv = document.getElementById("loading");

  infoDiv.innerHTML = "";
  loadingDiv.style.display = "block";

  const randomId = Math.floor(Math.random() * 83) + 1;

  try {
    const res = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    if (!res.ok) throw new Error("Person not found");
    const data = await res.json();

    const person = data.result.properties;

    const homeworldRes = await fetch(person.homeworld);
    const homeworldData = await homeworldRes.json();
    const homeworldName = homeworldData.result.properties.name;

    infoDiv.innerHTML = `
      <div id="name">${person.name}</div>
      <div id="height">Height: ${person.height}</div>
      <div id="gender">Gender: ${person.gender}</div>
      <div id="birth-year">Birth Year: ${person.birth_year}</div>
      <div id="home-world">Homeworld: ${homeworldName}</div>
    `;

  } catch (e) {
    infoDiv.innerHTML = `<div id="error">Oh no, that person is not available.</div>`;
  } finally {
    loadingDiv.style.display = "none";
  }
}
