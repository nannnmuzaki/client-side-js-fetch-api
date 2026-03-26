import "../css/style.css";

const content = document.querySelector("#content");
const img = content.querySelector("#img");
const form = content.querySelector("#form");

function getGif(searchParam) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=U3r51LJVi1SQniHri4OnFnC06z92g4SJ&s=${encodeURIComponent(searchParam)}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API Endpoint Error ${response.status}`);
      }

      return response.json();
    })
    .then((response) => {
      if (response.meta.status !== 200) {
        throw new Error(response.meta.msg);
      }
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      console.log(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  getGif("beaver");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchParam = Object.fromEntries(new FormData(form)).gif || "beaver";
  console.log(searchParam);

  getGif(searchParam);
});
