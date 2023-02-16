import React,{useState,useEffect,Suspense,lazy} from 'react'
import Header from '../components/Header';
import "../styles.css";
import { useParams } from 'react-router-dom';
import {getDataPokemon} from "../data/dataPage"
function Pokmon() {
    
    const {id} = useParams();
    const [pokeData, setPokeData] = useState({name:"",sprites:{}});
    const [images, setImages] = useState();
    useEffect(()=>{getDataPokemon(setPokeData,id,setImages)},[])
    const Image = lazy(() => import('../components/Image'));

  return (
    <div>
        <Header/>
       <section className='grid grid-cols-2 items-center justify-center'>
            <div className='flex items-center justify-center'>
                <Suspense fallback={<span className='loader'></span>}>
                  <Image url={images} alt={pokeData.name}/>
                </Suspense>
            </div>
            <div className='cols-span-1'>
                <h3 className='text-3xl font-sans'>{pokeData.name}</h3>
            </div>
       </section>

    </div>
  ) 
}



export default Pokmon