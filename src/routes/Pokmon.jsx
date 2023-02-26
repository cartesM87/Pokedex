import React,{useState,useEffect,Suspense,lazy,useContext} from 'react';
import {dataContext} from "../context/DataContext"
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import "../styles.css";
import { useParams,Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Aside from '../components/DataComponents/Aside';
function Pokmon() {
    
    const {getDataPokemon} = useContext(dataContext);
     
    const [controler, setControler] = useState(false);
    let secondController=()=>{setControler(!controler)};

    const {id} = useParams();
    const [pokeData, setPokeData] = useState({name:"",sprites:{},stats:[]});
    const [images, setImages] = useState();
    
    useEffect(()=>{getDataPokemon(setPokeData,id,setImages)},[])
    
    const Image = lazy(() => import('../components/Image'));
    const Estadisticas = lazy(()=> import("../components/DataComponents/Estadisticas"))
    const Abilities = lazy(()=> import('../components/DataComponents/Abilities'))
    const Mobimientos = lazy(()=>import('../components/DataComponents/Mobimientos'))

    return (
    <div className='bg-image-1'>
      <Header/>
      <div className='flex justify-evenly gap-2'>
      <section className='md:w-auto w-full  lg:w-2/3 mx-auto lg:m-0 lg:relative lg:ml-20 bg-gray-600 bg-opacity-80  '>
        <section className='grid grid-cols-1  place-items-center '>
            <div className='py-4 text-center'>
              <h3 className='text-4xl text-white text-opacity-80 font-black'>{pokeData.name.charAt(0).toUpperCase()+pokeData.name.slice(1)}</h3>
              <span className='text-xl text-white text-opacity-60 font-semibold'>#{pokeData.id}</span>
            </div>
            <Suspense fallback={<span className='loader mx-auto'></span>}>
              <Image url={images} alt={pokeData.name} clas={"w-[300px] mb-[100px] md:mb-[20px]"} />
            </Suspense>
        </section>
        <Suspense fallback={<span >cargando...</span>}>
          <Estadisticas id={id} /> 
        </Suspense>
        <Suspense fallback={<span>cargando...</span>}>
          <Abilities id={id}/>
        </Suspense>
        <Suspense fallback={<span>cargando..</span>}>
          <Mobimientos id={id}/>
        </Suspense>
      </section>
      <section className='md:flex flex-col gap-3 w-auto hidden '>
        <Aside estilos={"bg-gray-600 w-[300px] rounded-lg  bg-opacity-80 "} component={<Searcher/>}/>
        
      </section>
      </div>
      <Footer/>
    </div>
  ) 
}



export default Pokmon