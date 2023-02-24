import React,{useState,useEffect,useContext} from 'react'
import {dataContext} from '../../context/DataContext';
function Mobimientos({id}) {

  let {getDataPokemon} = useContext(dataContext);
  const [generalData, setGeneralData] = useState({name:"",moves:[{move:{name:"",url:""}}]})
  const [mobments, setMobments] = useState([{accuracy:0,type:{name:""},name:"",names:[{languaje:{name:"",url:""},name:""}],power:0,flavor_text_entries:[{flavor_text: "",language:{ name: "",url: ""}}]}])
  const [desciptions, setdesciptions] = useState([])
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
    }catch(err){console.error(err)}
  }


  return (
    <table className='mx-auto text-center py-5'>
      <thead>
        <tr>
          <th>name</th>
          <th>potencia</th>
          <th>precicion</th>
          <th>descipcion</th>
        </tr>
      </thead>
        <tbody>
        
        <tr>
        <tr>{mobments.map((vl,i)=>vl.names.map((dt,j)=><td className='block' key={j}>{j===5?`${dt.name} - ${vl.type.name}`:""}</td>))}</tr>
        <tr>{mobments.map((vl,i)=><td key={i} className='block'>{!vl.power?" none":vl.power}</td>)}</tr>
        <tr>{mobments.map((vl,i)=><td key={i} className='block'>{!vl.accuracy?"none":`${vl.accuracy}%`}</td>)}</tr>
        <tr>{desciptions.map((vl,i)=><td className='block'>{vl.flavor_text}</td>)}</tr>
        </tr>
      </tbody>
       
       
    </table>
  )
}



export default Mobimientos

