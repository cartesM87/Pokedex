import React,{useState,useEffect,Suspense,lazy,useContext} from 'react';
import {dataContext} from "../context/DataContext"
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import "../styles.css";
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

function Pokmon() {
    
    const {getDataPokemon} = useContext(dataContext);
     
    const {id} = useParams();
    const [pokeData, setPokeData] = useState({name:"",sprites:{},stats:[]});
    const [images, setImages] = useState();
    
    useEffect(()=>{getDataPokemon(setPokeData,id,setImages)},[])
    
    const Image = lazy(() => import('../components/Image'));
    const Estadisticas = lazy(()=> import("../components/DataComponents/Estadisticas"))
    const Abilities = lazy(()=> import('../components/DataComponents/Abilities'))

    return (
    <div className='bg-slate-600'>
      <Header/>
      <Searcher clases={"bg-sky-700 md:py-4"}/>
       <section className='grid grid-cols-1 place-items-center '>
          <div>
            <h3 className='text-4xl font-bold py-4'>{pokeData.name.charAt(0).toUpperCase()+pokeData.name.slice(1)}</h3>
          </div>
          <Suspense fallback={<span className='loader'></span>}>
            <Image url={images} alt={pokeData.name} clas={"w-[300px]"} />
          </Suspense>
      </section>
      <Suspense fallback={<span >cargando...</span>}>
        <Estadisticas id={id} /> 
      </Suspense>
      <Suspense fallback={<span>cargando...</span>}>
        <Abilities id={id}/>
      </Suspense>
      <Footer/>
    </div>
  ) 
}



export default Pokmon