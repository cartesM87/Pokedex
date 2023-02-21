import React,{useContext,useState, useEffect} from 'react';
import {dataContext} from '../../context/DataContext';

function Abilities({id}) {

    const {getDataPokemon} = useContext(dataContext);
    const [abilidades, setAbilidades] = useState([]);
    const [abilitesData, setAbilitesData] = useState({name:"",sprites:{},abilities:[{ability:{name:"",url:""}}]});

    useEffect(()=>{
        getDataPokemon(setAbilitesData,id);
    },[]);
   abilidades.slice(0,abilidades.length)

    
    abilitesData.abilities.map(async(val,i)=>{
        try{
            const response = await fetch(val.ability.url);
            const data = await response.json();
            const description =  data.flavor_text_entries.find((entry) => entry.language.name === "es").flavor_text;
           setAbilidades(abilidades => abilidades.concat(description));
        }catch(err){console.error(err)}
        
    })

  return (
    <div className='bg-white bg-opacity-80 rounded-xl my-7 mx-auto p-3 text-center w-[300px]'>
        <div className='flex flex-row items-center justify-center gap-3 py-3'>
            <span className='bg-blue-600 rounded-full h-3 w-3 block'></span>
            <h3 className='font-bold text-xl'>Habilidades</h3>
            <span className='bg-blue-600 rounded-full h-3 w-3 block'></span>
        </div> 
        {abilitesData.abilities.map((vl,i)=>
        <div key={i}>
            <span className='text-black font-semibold py-1 block' >{vl.ability.name.charAt(0).toUpperCase()+vl.ability.name.slice(2)}</span>
            <p className='font-normal'>{abilidades[i]}</p></div>)}      
        </div>
  )
}


export default Abilities