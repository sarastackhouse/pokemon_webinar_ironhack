let count = 1; 
function renderImage() {
 
  let pokemonContainer = document.getElementById('pokemon');


  pokemonContainer.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let prev = document.getElementById('previous');
let next = document.getElementById('next');


prev.onclick = function() {
  
  if(count > 1) {
    count = count - 1;
    renderImage();
  }
}

next.onclick = function() {
  if(count < 649) {
    count = count + 1;
    renderImage();
  }
}


renderImage();