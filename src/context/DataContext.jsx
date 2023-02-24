import React,{createContext,useEffect,useState} from 'react'

export let dataContext= createContext();

function DataContext(props) {
  
    async function getDataPokemon(setPokeData,id,setImages){
        try{
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await result.json();
             setPokeData(data);
             console.log(data)
             /* -- */
            if(!setImages) ""
            else{
                const imgResult = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`);
                setImages(imgResult.url)
            }
        }catch(err){console.error("error catch: "+err)}
    }
    async function getNames(setNames){

        try{
            const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const data = await result.json();
            let names = await data.results.map(dt=>dt.name);
            setNames(names);
        }catch(err){console.error("error cathc names: "+err);}
    }

  

    
  
    return <dataContext.Provider value={{getDataPokemon,getNames}} >{props.children}</dataContext.Provider>
}

export default DataContext