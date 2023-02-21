import React, { useEffect,useState,useContext } from 'react';
import {dataContext} from "../../context/DataContext"

function Estadisticas({id}) {

    const {getDataPokemon} = useContext(dataContext);

    const [stats, setStats] = useState( {name:"",sprites:{},stats:[{base_stat:0,stat:{name:""}}]});
    useEffect(()=>{getDataPokemon(setStats,id)},[]);
    
    let maxValues = [714,526,658,535,658,548];
    return (

        <div className='grid grid-cols-1 place-items-center py-10 bg-white bg-opacity-80 rounded-2xl w-[500px] mx-auto ' >
            <div className='flex flex-row justify-center gap-7 items-center  py-3'>
                <span className='bg-rose-600 rounded-full h-3 w-3 block'></span>
                <h3 className='text-2xl font-bold '>Estadisticas (Base)</h3>
                <span className='bg-rose-600 rounded-full h-3 w-3 block'></span>
            </div>
            <div>
                {stats.stats.map((vl,i)=>
                    <label htmlFor="" className='grid grid-cols-2 ' key={i}>                        
                        <span className='font-semibold text-base ' >{vl.stat.name.charAt(0).toUpperCase()+vl.stat.name.slice(1).replace("-"," ")}</span>
                        <div className='flex items-center justify-end'>
                            {/* colocar styles y pasarle los colres por parametro */}
                            <progress value={vl.base_stat*2.8} max={maxValues[i]}></progress>
                            <span className='absolute pr-3 font-mono text-blue-900'>{vl.base_stat}</span>
                        </div>                       
                    </label>
                )}       
            </div>
        </div>)
  
}

export default Estadisticas