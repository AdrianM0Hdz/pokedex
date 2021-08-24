const renderPokemon = async (pokemonData) => {
    const pokemonContainer = document.querySelector('#pokemon');
    const image = document.createElement('img');
    image.src = pokemonData.sprites.front_default;
    const name = document.createTextNode(pokemonData.species.name); 
    const br = document.createElement('br');
    pokemonContainer.appendChild(image);
    pokemonContainer.appendChild(name);
    pokemonContainer.appendChild(br);
}

export default renderPokemon;