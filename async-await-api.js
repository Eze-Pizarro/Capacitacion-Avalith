
const fetch = import('node-fetch');

async function getPokemon(){
    await fetch('https://pokeapi.co/api/v2/pokemon/arturo')              
       .then(response => response.json())
       .then(data => {
        const  Pokemon = 'https://pokeapi.co/api/v2/pokemon/pikachu';
        console.log("---------------------------------------------\n");
        console.log("Pokemon:",data.name);
        console.log("experiencia base:",data.base_experience);
        console.log("Pokedex numero:",data.id);
        /*Pokemon.data.abilities.forEach((element) => {
            let a = element.slot;
            let b = element.type.name;
            console.log(`Tipo ${s}: ${t}`);
        });*/
    })
    .catch(console.error)
}

getPokemon()   
                                                    