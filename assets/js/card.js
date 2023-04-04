function loadPokemonInfos(pokemon) {
    return `
    <div class="pokemon-card open ${pokemon.type}" id="${pokemon.name}-card">
        <div class="card-top">
            <div class="details">
                <h2 class="name">${pokemon.name}</h2>
                <span>${pokemon.number}</span>
            </div>
            <!-- tipo do pokemon-->
            ${pokemon.types.map((type) => `<div class="type ${type}">${type}</div>`).join('')}
            <!-- imagem do pokemon-->
            <div class="card-img">
                <img src="${pokemon.photo}" alt="pikachu">
            </div>
        </div>
        <div class="card-info">
            <div class="status">
                <h3>Status</h3>
                <ul>
                    <li>HP: ${pokemon.stats.hp.base_stat}</li>
                    <li>Ataque: 55</li>
                    <li>Defesa: 40</li>
                    <li>Velocidade: 90</li>
                    <li>Total: 220</li>
                </ul>
            </div>
            <div class="ability ${pokemon.abilities}">
                <h3>Habilidades</h3>
                <ul>
                    <li>${pokemon.ability}</li>
                    <li>${pokemon.ability}</li>
                </ul>
            </div>
        </div>
    </div>

    `
}