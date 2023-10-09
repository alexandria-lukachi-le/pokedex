const pokemonList = document.querySelector("#pokemonList");
const buttonHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 248; i++) {
    fetch(URL + 1)
        .then((response) => response.json())
        .then(data => showPokemon(data))
}

function showPokemon(poke) {

    let types = poke.types.map((type) => `<p class=${type.type.name}type>${type.type.name}</p>`)
    types = types.join('');

    let pokeId = poke.id.string();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }
}