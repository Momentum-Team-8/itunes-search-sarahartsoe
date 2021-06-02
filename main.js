// creating a music search field. when a use hits "search", the page will be fetching data
// from the itunes API. The search results will then be diaplying on the page with
// some info like: Song Title, Artist, Name of Album

// fetch will make a GET request then use POST method to display results
//  1. create a function to render search results (getContent)
// 2. add event listener to call on search results function
// 3. create a function which will play a song once it is a click on
// 4.? cerate a function to clear results or will searching a new artist just clear and display?

// const url = 'https://itunes.apple.com/search?term='
// const form = document.querySelector('#search-form')

// form.addEventListener('submit', event => {
//     event.preventDefault()
//     getContent()
// })

// function getContent(search, artist) {
//     const artist = document.getElementById('search-form').value
//     fetch(url + artist)
//     .then((response) => response.json())
//     .then((data) => {
//         for (let artist of data) {
//             console.log(data)
//         }
//     })
// }

// function getContent(search) {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         for (let song of data) {
//             renderSongs()
//         }
//     })
// }

// Try 2 starts here:

let button = document.querySelector("#submit");
let input = document.querySelector("#search");
let output = document.querySelector("#output");

button.addEventListener("click", (event) => {
  getContent();
});

function getContent() {
  let url = "https://proxy-itunes-api.glitch.me/search?term=" + input.value + "&limit=15&media=music&entity=song";
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
                    <img src="${song.artworkUrl100}" alt="Placeholder image">
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


// // <figure class="image is-48x48">
// <img src="${song.artworkUrl100}" alt="Placeholder image">
// </figure>