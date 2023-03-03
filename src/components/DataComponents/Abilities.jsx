import React,{useState, useEffect} from 'react';

function Abilities({data}) {

    const [abilidades, setAbilidades] = useState([]);
    const [dataGeneral, setDataGeneral] = useState({name:"",abilities:[{ability:{name:"",url:""}}]});
    
    let updateData=async ()=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            const description =  data.flavor_text_entries.find((entry) => entry.language.name === "es").flavor_text;
           abilidades[i]=description;
        }catch(err){console.error(err)}
    }

    useEffect(()=>{
       setDataGeneral(data);
    },[]);

  return (<span>dlhj</span>
   /*  <div className='bg-white bg-opacity-80 rounded-xl my-7 mx-auto p-3 text-center w-[300px]'>
        <div className='flex flex-row items-center justify-center gap-3 py-3'>
            <span className='bg-blue-600 rounded-full h-3 w-3 block'></span>
            <h3 className='font-bold text-xl'>Habilidades</h3>
            <span className='bg-blue-600 rounded-full h-3 w-3 block'></span>
        </div> 
        {abilitesData.abilities.map((vl,i)=><div key={i}>
            <span className='text-black font-semibold py-1 block' >{vl.ability.name.charAt(0).toUpperCase()+vl.ability.name.slice(2)}</span>
            <p className='font-normal'>{abilidades[i]}</p></div>)}      
        </div> */
  )
}


export default Abilities