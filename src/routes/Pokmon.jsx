import React,{useState,useEffect,Suspense,lazy,useContext} from 'react';
import {dataContext} from "../context/DataContext"
import {Header,Searcher,Footer,Aside} from "../components/index"
import { useParams } from 'react-router-dom';
import "../styles.css";
function Pokmon() {
    
    const {getPokemon,firstLeterUP} = useContext(dataContext);
    const Image = lazy(() => import('../components/Image'));

    const {id} = useParams();
    const [pokeData, setPokeData] = useState({name:"",image:"",sprites:{},stats:[]});
    let maxValues = [714,526,658,535,658,548];

    const handleData=(id)=>{getPokemon(id).then(value=>{setPokeData(value)})}
    
    useEffect(()=>{
      handleData(id);
    },[])
    
    
    return (
    <div className='bg-image-1'>
      <Header/>
      <div className='flex justify-evenly gap-2'>
      <section className='md:w-auto w-full  lg:w-2/3 mx-auto lg:m-0 lg:relative lg:ml-20 bg-gray-600 bg-opacity-80  '>
        <div className='grid grid-cols-1  place-items-center '>
            <div className='py-4 text-center'>
              <h3 className='text-4xl text-white text-opacity-80 font-black'>{firstLeterUP(pokeData.name)}</h3>
              <span className='text-xl text-white text-opacity-60 font-semibold'># {pokeData.id}</span>
            </div>
            <Suspense fallback={<span className='loader mx-auto'></span>}>
              <Image url={pokeData.image.url} alt={pokeData.name} clas={"w-[300px] mb-[100px] md:mb-[20px]"} />
            </Suspense>
        </div>
        {/* estadisticas */}
        <div className='grid grid-cols-1 place-items-center py-8 bg-white bg-opacity-80 rounded-2xl w-[400px] md:w-[500px] mx-auto ' >
            <div className='flex flex-row justify-center gap-7 items-center pb-3'>
                <span className='bg-rose-600 rounded-full h-3 w-3 block'></span>
                <h3 className='text-2xl font-bold '>Estadisticas (Base)</h3>
                <span className='bg-rose-600 rounded-full h-3 w-3 block'></span>
            </div>
            <div>
                {pokeData.stats.map((vl,i)=>
                    <label htmlFor="" className='grid grid-cols-2 ' key={i}>                        
                        <span className='font-semibold text-base ' >{vl.stat.name.charAt(0).toUpperCase()+vl.stat.name.slice(1).replace("-"," ")}</span>
                        <div className='flex items-center justify-end'>
                            {/* colocar styles y pasarle los colres por parametro */}
                            <progress value={vl.base_stat*2.8} max={maxValues[i]}></progress>
                            <span className='absolute pr-3 font-mono text-blue-900'>{vl.base_stat}</span>
                        </div>                       
                    </label>
                )}       
            </div>
        </div>
        
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