function searchPokemon() {
    const pokemonId = document.getElementById("pokemon-id").value;

    if (!pokemonId) {
        alert("Por favor, insira o ID do pokemon.");
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    fetch(url)
    .then(response => {

        if (!response.ok) {
            throw new Error ("Erro na requisição: " + response.status);
        }

        return response.json();
        
    })
    .then(data => {
        console.log(data);
        document.getElementById('pokemon-image').src = data.sprites.front_default;
        document.getElementById('pokemon-id-display').textContent = data.id;
        document.getElementById('pokemon-name').textContent = data.name;
        document.getElementById('pokemon-type').textContent = data.types.map(type => type.type.name).join(", ");
        document.getElementById('pokemon-attack').textContent = data.stats[4].base_stat;
        document.getElementById('pokemon-defense').textContent = data.stats[3].base_stat;
        document.getElementById('pokemon-special-attack').textContent = data.stats[2].base_stat;
        document.getElementById('pokemon-special-defense').textContent = data.stats[1].base_stat;


    })
    .catch (error => {
        console.log("Erro ao buscar o pokemon:", error);
        
    })

}