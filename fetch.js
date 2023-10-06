// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
    <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

async function getPokemonList(url) {
    // Make a fetch request to the url passed in.
    const response = await fetch(url);
    // When the request finishes check to make sure it was ok.
    if (response.ok) {
        // If it was ok then convert the response to json.
        const data = await response.json();
        // Call the doStuffList function, passing in the data.
        doStuffList(data);
    }
}
function compare (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    else if (a.name < b.name) {
        return -1;
    }
    else return 0;
}
function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}
function doStuffList(data) {
    console.log(data);
    const outputList = document.querySelector("#outputList");
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        outputList.innerHTML += html;
    });
}

getPokemon(url);
console.log("second: ", results);
getPokemonList(urlList);