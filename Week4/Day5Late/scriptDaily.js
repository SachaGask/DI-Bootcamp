const gifForm = document.getElementById("gifForm");
const gifContainer = document.getElementById("gifContainer");
const deleteAllButton = document.getElementById("deleteAll");

gifForm.addEventListener("submit", async function(e) {
  e.preventDefault();
  const category = e.target.category.value;

  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    if (!res.ok) throw new Error("GIF fetch error");
    const data = await res.json();
    const gifUrl = data.data.images.fixed_height.url;

    const gifDiv = document.createElement("div");
    gifDiv.className = "gif-block";
    gifDiv.innerHTML = `<img src="${gifUrl}"/><button class="delete">DELETE</button>`;

    gifDiv.querySelector(".delete").addEventListener("click", () => gifDiv.remove());

    gifContainer.appendChild(gifDiv);
  } catch (err) {
    console.error("Error fetching random gif:", err);
  }
});

deleteAllButton.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});