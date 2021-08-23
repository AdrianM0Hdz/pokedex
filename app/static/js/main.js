import getPokemon from './utils/getPokemon.js';
import renderPokemon from './utils/renderPokemon.js';

const textBox = document.querySelector('#pokemon-name');
textBox.value = '';
const button = document.querySelector('#submit');
button.addEventListener('click', async (event) => {
    let pokemonName = textBox.value;
    const pokemon = await getPokemon(pokemonName);
    await renderPokemon(pokemon);
    textBox.value = '';
});