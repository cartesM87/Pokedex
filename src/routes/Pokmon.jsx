import React,{useState,useEffect,Suspense,lazy} from 'react'
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import "../styles.css";
import { useParams } from 'react-router-dom';
import {getDataPokemon} from "../data/dataPage"
function Pokmon() {
    
    const {id} = useParams();
    const [pokeData, setPokeData] = useState({name:"",sprites:{},stats:[]});
    const [images, setImages] = useState();
    useEffect(()=>{getDataPokemon(setPokeData,id,setImages)},[])
    const Image = lazy(() => import('../components/Image'));
    const Estadisticas = lazy(()=> import("../components/DataComponents/Estadisticas"))
  return (
    <div>
      <Header/>
      <Searcher clases={"bg-sky-700 md:py-4"}/>
       <section className='grid grid-cols-1 place-items-center '>
          <div>
            <h3 className='text-3xl font-bold py-4'>{pokeData.name}</h3>
          </div>
          <Suspense fallback={<span className='loader'></span>}>
            <Image url={images} alt={pokeData.name} clas={"w-[300px]"} />
          </Suspense>
      </section>
      <Suspense fallback={<span className='loader'></span>}>
        <Estadisticas data={pokeData.stats} /> 
      </Suspense>
    </div>
  ) 
}



export default Pokmon