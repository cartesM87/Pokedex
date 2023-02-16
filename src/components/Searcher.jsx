import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {getNames} from "../data/dataNames"
import { AutoComplete } from 'antd';
import "../styles.css"
function Searcher() {

  const [names, setNames] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const setValue = (e)=>{setinputValue(e)};
  useEffect(()=>{getNames(setNames)},[]);

  let namesFiltered= names.filter(val=>val.toLowerCase().includes(inputValue.toLowerCase()))
  
  let history=useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    history(`/pokemon/${inputValue}`)
  }
  /**TODO: hacer que se cambia el valor del imput al selecionar el <li></li> */
  return (
    <form action="" onSubmit={handleSubmit} className='place-items-center bg-emerald-600 w-full grid grid-cols-1' autoComplete='off'>
        <AutoComplete name={"buscador"} placeholder="Busca un pokemon" className='w-[200px] ' value={inputValue} onChange={setValue} options={namesFiltered.map((dt)=>({value:dt}))} />
        <button type="submit">enviar</button>
    </form>
  )
}

export default Searcher