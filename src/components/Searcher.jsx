import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {getNames} from "../data/dataNames"
import { AutoComplete } from 'antd';
import { GoSearch } from "react-icons/go";
import "../styles.css";

function Searcher({clases}) {

  const [names, setNames] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const setValue = (e)=>{setinputValue(e)};
  useEffect(()=>{getNames(setNames)},[]);

  let namesFiltered= names.filter(val=>val.toLowerCase().includes(inputValue.toLowerCase()))
  
  let history=useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    !inputValue? console.error("null"):history(`/pokemon/${inputValue}`)

  }
  
  /**TODO: hacer que se cambia el valor del imput al selecionar el <li></li> */
  return (
    <form action="" onSubmit={handleSubmit} className={`flex items-center gap-2 flex-col justify-center w-full   ${clases}`} autoComplete='off'>
        <AutoComplete placeholder="Busca un pokemon" className='w-[200px] rounded-lg' value={inputValue} onChange={setValue} options={namesFiltered.map((dt)=>({value:dt}))} />
        <button type="submit" className='bg-blue-600 rounded-md px-6 text-white font-semibold'>Busca</button>
        
    </form>
  )
}



export default Searcher