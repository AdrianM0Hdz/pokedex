import getPokemon from './utils/getPokemon.js';
import renderPokemon from './utils/renderPokemon.js';

const searchForm = document.querySelector('#search-query');
const input = document.querySelector('#pokemon-name');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    let pokemonName = input.value;
    const pokemonData = await getPokemon(pokemonName);
    renderPokemon(pokemonData);
    input.value = '';
});