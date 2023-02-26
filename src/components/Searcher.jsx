import React,{useState,useEffect,useContext} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { AutoComplete } from 'antd';
import "../styles.css";
import {dataContext} from "../context/DataContext"

function Searcher({clases}) {

  const {getNames} = useContext(dataContext)
  let {id} = useParams();

  const [names, setNames] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const setValue = (e)=>{setinputValue(e)};
  useEffect(()=>{getNames(setNames)},[]);

  let namesFiltered= names.filter(val=>val.toLowerCase().includes(inputValue.toLowerCase()))
  
  let history=useNavigate();
  function handleSubmit(e){
    if(inputValue!=namesFiltered){ 
      e.preventDefault();
      alert("wazaa")}  
    else!inputValue? console.error("null"):history(`/pokemon/${inputValue}`)
  }
  
  /**TODO: hacer que el boton de buiscar solo aparezca cuando el useParams no sea undefined */
  return (
    <form action="" onSubmit={handleSubmit} className={`grid grid-rows-2 place-items-center place-content-center h-[100px] py-4 md:py-0    ${clases}`} autoComplete='off'>
        <AutoComplete  placeholder="Busca un pokemon" className='w-[200px] rounded-lg' value={inputValue} onChange={setValue} options={namesFiltered.map((dt)=>({value:dt}))} />
        <button type="submit" className='bg-blue-600  rounded-md px-6 text-white font-semibold'>Busca</button>
        
    </form>
  )
}



export default Searcher