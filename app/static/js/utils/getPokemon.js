const getPokemon = async (pokemonName) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;
    const response = await fetch(url);
    if (response.status == 404) {
        return 'Pokemon Not Found';
    }
    const pokemon = response.json();
    return pokemon;
}

export default getPokemon;