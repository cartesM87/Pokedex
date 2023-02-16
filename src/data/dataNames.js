export async function getNames(setNames){

    try{
        const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const data = await result.json();
        let names = await data.results.map(dt=>dt.name);
        setNames(names);
    }catch(err){console.error("error cathc names: "+err);}
}