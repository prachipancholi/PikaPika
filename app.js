const pokeContainer = document.getElementById("pokeContainer");

const fetchPoke = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    displayPoke(pokemon);
    
}

const displayPoke = (pokemon) => {
    "use strict";
    const pokeEl = document.createElement('div');
    pokeEl.classList.add("pokemon");
    const pokeInnerHtml =
        `
        
        <div class=" cardDesign" style="width: 16rem; ">
            <img class="card-img-top" src="${pokemon.sprites["front_default"]}" id="imagePoke" alt="Pokemon Image">
            <div class="card-body">
                <h5 class="card-title" id="title">Name: ${pokemon.name}</h5>
                <p class="card-text" id="height">Height: ${pokemon.height}</p>
                
            </div>
            </div>

   `
    pokeEl.innerHTML = pokeInnerHtml;
    pokeContainer.appendChild(pokeEl);
}
const handleClick = (name) => {
    fetchPoke(name);
}
// for (var i = 1; i <= 150; i++){
//     fetchPoke(i);
// }
