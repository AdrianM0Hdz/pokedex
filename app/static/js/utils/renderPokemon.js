const renderPokemon = async (pokemonData) => {
    const pokemon = document.querySelector('#pokemon');
    pokemon.firstChild.innerHTML = pokemonData.name;
    pokemon.lastChild.src = pokemonData.sprites.front_default;
}

export default renderPokemon;