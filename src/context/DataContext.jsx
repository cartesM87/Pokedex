import React,{createContext,useEffect,useState} from 'react'

export let dataContext= createContext();

function DataContext(props) {
  
    async function getPokemon(id){
        try{
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await result.json();
             console.log(data)
             /* -- */
            const image = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`);
            return {...data,image}
        }catch(err){console.error("error catch: "+err)}
    }
    const firstLeterUP= (word)=>{return word.charAt(0).toUpperCase()+word.slice(1)}
    async function getNames(setNames){

        try{
            const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const data = await result.json();
            let names = await data.results.map(dt=>dt.name);
            setNames(names);
        }catch(err){console.error("error cathc names: "+err);}
    }

  

    
  
    return <dataContext.Provider value={{
        getPokemon,
        firstLeterUP,
        getNames
    }} >{props.children}</dataContext.Provider>
}

export default DataContext