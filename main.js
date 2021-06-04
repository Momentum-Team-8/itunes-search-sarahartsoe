let button = document.querySelector("#submit");
let input = document.querySelector("#search");
let output = document.querySelector("#output");

button.addEventListener("click", (event) => {
  getContent();
});

function getContent() {
  let url = "https://proxy-itunes-api.glitch.me/search?term=" + input.value + "&limit=20&media=music&entity=song";
  fetch(url)
    .then((data) => data.json())
    .then((json) => {
      let allSongs = "";
      json.results.forEach((song) => {
        allSongs += `
            <div class="card">
            <div class="card-image">
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <img src="${song.artworkUrl100}" alt="Album Artwork">
                </div>
                <div class="media-content">
                    <p class="title is-4">${song.artistName}</p>
                    <p class="subtitle is-6">${song.trackName}</p>
                </div>
                </div>

                <div class="content">
                <audio id="audio-player" controls="controls" src="${song.previewUrl}" type="audio/mpeg">
                </div>
            </div>
            </div>
            `;
      });
      output.innerHTML = allSongs
    });
}

let press = document.querySelector('.btn')
press.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
})
