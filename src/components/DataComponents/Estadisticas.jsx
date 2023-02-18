import React, { useEffect,useState,useContext } from 'react';
import {dataContext} from "../../context/DataContext"

function Estadisticas({id}) {

    const {getDataPokemon} = useContext(dataContext);

    const [stats, setStats] = useState( {name:"",sprites:{},stats:[{base_stat:0,stat:{name:""}}]});
    useEffect(()=>{getDataPokemon(setStats,id)},[]);
    
    let maxValues = [714,526,658,535,658,548];
    return (

        <div className='grid place-items-center py-10 ' >
            <h3 className='text-2xl font-bold py-6'>Estadisticas (Base)</h3>
            <div>
                {stats.stats.map((vl,i)=>
                    <label htmlFor="" className='grid grid-cols-2 ' key={i}>                        
                        <span className='font-semibold text-base ' >{vl.stat.name.charAt(0).toUpperCase()+vl.stat.name.slice(1)}</span>
                        <div className='flex items-center justify-end'>
                            <progress value={vl.base_stat} max={maxValues[i]}></progress>
                            <span className='absolute pr-3 font-mono text-blue-900'>{vl.base_stat}</span>
                        </div>                       
                    </label>
                )}       
            </div>
        </div>)
  
}

export default Estadisticas