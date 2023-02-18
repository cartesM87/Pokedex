import React, { useEffect,useState } from 'react';

function Estadisticas({data}) {

    const [stats, setStats] = useState([{base_stat:0,stat:{name:""}}]);
    useEffect(()=>{setStats(data)},[]);
    const [loading, setLoading] = useState(true);
    return <>
        {loading && <span className='loader'></span>}

        <div className='grid place-items-center py-10 ' onLoad={setLoading}>
            <h3 className='text-2xl font-bold py-6'>Estadisticas (Base)</h3>
            <div>
                {stats.map((vl,i)=>
                    <label htmlFor="" className='grid grid-cols-2 ' key={i}>
                        <span className='block' >{vl.stat.name} - {vl.base_stat}</span>
                        <progress className='w-[400xp]' max={300} value={vl.base_stat}></progress>
                    </label>
                )}       
            </div>
        </div>
</>
  
}

export default Estadisticas