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

let button = document.querySelector("#submit")
let input = document.querySelector("#search")
let output = document.querySelector("#output")

button.addEventListener('click', (event) => {
    getContent()
})

function getContent(){
    let url = 'https://proxy-itunes-api.glitch.me/search?term='+input.value
    fetch(url)
    .then( data => data.json())
    .then( json => {

    })
}