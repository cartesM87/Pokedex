import React,{useState,useEffect,useContext} from 'react'
import {dataContext} from '../../context/DataContext';
function Mobimientos({id}) {

  let {getDataPokemon} = useContext(dataContext);
  const [generalData, setGeneralData] = useState({name:"",moves:[{move:{name:"",url:""}}]})
  const [mobments, setMobments] = useState([{accuracy:0,type:{name:""},names:[{language:{name:"",},name:""}],power:0,flavor_text_entries:[{flavor_text: "",language:{ name: "",}}]}])
  const [desciptions, setdesciptions] = useState([])
  const [names, setnames] = useState([])
  useEffect(()=>{
    getDataPokemon(setGeneralData,id);

  },[])

  generalData.moves.map((dt,j)=>getDataMobments(dt.move.url,j));

  async function getDataMobments(url,j){
    try{
        const results = await fetch(url);
        const data = await results.json();
        mobments[j]= data;

        const dataDescriptions = data.flavor_text_entries.find(valor => valor.language.name==="es")
        desciptions[j]=dataDescriptions;
        const namesEsp = data.names.find(valor => valor.language.name==="es")
        names[j]=namesEsp;
    }catch(err){console.error(err)}
  }


  return (
    <div>
      <h3 className='font-bold text-3xl text-center py-10 text-slate-900'>Mobimientos que {generalData.name.charAt(0).toUpperCase()+generalData.name.slice(1)} puede aprender.</h3>
      <div className='bg-white bg-opacity-70 w-auto md:w-[600px] lg:w-[800px] rounded-xl mx-auto text-center'>
      <div className='grid grid-cols-3 py-2'>
          <span className='block font-semibold text-lg text-gray-900'>Nombre</span>
          <span className='block font-semibold text-lg text-gray-900'>Potencia</span>
          <span className='block font-semibold text-lg text-gray-900'>Precision</span>
      </div>
      <div className='p-2 '>  
        {mobments.map((vl,i)=>
         <div className='border-y-[1.5px] border-slate-900 ' key={i}>
          
          <div className=' grid grid-cols-3  '>
            {names.map((dt,j)=>j===i?<span className='block' key={j}>{dt.name}</span>:"")}
            <span className='block text-gray-800'>{!vl.power?"--":vl.power}</span>
            <span  className='block '>{!vl.accuracy?"none":`${vl.accuracy}%`}</span>
          </div>
          <div className="">
           {desciptions.map((des,k)=> <span className='block font-sans text-slate-800 text-start pl-5 text-sm' key={k}>{k===i?des.flavor_text:""}</span>)}
          </div>
          
          </div> 
         
        )}

      </div>
 
       
       
    </div>
    </div>
  )
}



export default Mobimientos

