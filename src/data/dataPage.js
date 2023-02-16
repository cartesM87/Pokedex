export async function getDataPokemon(setPokeData,id,setImages){
    try{
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await result.json();
         setPokeData(data);
         console.log(data)
         /* -- */
        const imgResult = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`);
        setImages(imgResult.url)
    }catch(err){console.error("error catch: "+err)}
}
export async function getImages(setImage,id){
    try{
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await result.json();
         setImage(data.sprites.front_default);
    }catch(err){console.error("error catch: "+err)}
}
