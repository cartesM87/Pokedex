import React,{useState,useEffect,Suspense,lazy,useContext} from 'react';
import {dataContext} from "../context/DataContext"
import {Header,Searcher,Footer,Aside} from "../components/index"
import { useParams } from 'react-router-dom';
import "../styles.css";
function Pokmon() {
    
    const {getPokemon,firstLeterUP,getValuesEsp,getAttacks} = useContext(dataContext);
    const Image = lazy(() => import('../components/Image'));

    const {id} = useParams();
    const [pokeData, setPokeData] = useState({abilities: [],moves:[],types:[],name:"",image:"",sprites:{},stats:[],});
    const [abilities, setAbilities] = useState([]);
    const [mobments, setMobments] = useState([{name:"",description:"",power:0,accuracy:0,class:""}])
    const [mobmentsRendered, setMobmentsRendered] = useState([{}])

    const [charge, setCharge] = useState(true)
    const [secondCharge, setSecondCharge] = useState(true)
    let maxValues = [714,526,658,535,658,548];
    
    const setData=()=>{
      getPokemon(id).then(valor=>{setPokeData(valor)});
      setCharge(false)

    }
    /**funcion tomar abilidades en español  */
    const getEsp= ()=>{
      pokeData.abilities.map(abilidad=>{
        getValuesEsp(abilidad.ability.url)
        .then(valor=>setAbilities(actual=>[...actual,valor]))
      })
    };
    /**funcion para tomar los mobimientos,y sus datos en español */
    const getMoves= ()=>{
      pokeData.moves.map((move,i)=>{
        getAttacks(move.move.url)
        .then(valor=>setMobments(actual=>[...actual,valor]));
        i===pokeData.moves.length-1? setSecondCharge(false):"";
      })
    };
    /**Funciones para filtros de mobimientos */
    const allFilter=()=>{
      setMobmentsRendered(mobments);
    };
    const filterMobments = (clase)=>{
      const dataFiltered= mobments.filter(actual=> actual?actual.class ===clase:"")  
      setMobmentsRendered(dataFiltered)
    };

    useEffect(()=>{

      charge?setData():""
      getEsp();
      getMoves();
      
      window.addEventListener("blur",()=>{
        pokeData.name?pokeData.name=="vaporeon"? document.title="En terminos de reproduccion humano pokemon..":""
        :document.title= "El mundo pokemon aguarda"
      });
      window.addEventListener("focus",()=>{document.title=firstLeterUP(pokeData.name)})
     

    },[pokeData])
   
    
    return (
    <main className='bg-image-1'>
      <Header/>
      <div className='flex justify-evenly gap-2'>
      <section className='md:w-auto w-full  lg:w-2/3 mx-auto lg:m-0 lg:relative lg:ml-20 bg-black bg-opacity-30  '>
        <div className='grid grid-cols-1  place-items-center '>
          <div className='py-4 text-center'>
            <h3 className='text-4xl text-white text-opacity-80 font-black'>{secondCharge?"Cargando nombre...": firstLeterUP(pokeData.name.replace("-"," "))}</h3>
            <span className='text-xl text-white text-opacity-60 font-semibold'>{secondCharge?"Cargando..": "#"+pokeData.id}</span>
            <div className='text-center'>
              {pokeData.types.map((type,id)=><span className={`type ${type.type.name}`} key={id}>{firstLeterUP(type.type.name)}</span>)}
            </div>
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
              {secondCharge?<span className='loader my-6'></span> :pokeData.stats.map((vl,i)=>
                <label htmlFor="" className='grid grid-cols-2 ' key={i}>                        
                    <span className='font-semibold text-base ' >{firstLeterUP(vl.stat.name)}</span>
                      <div className='flex items-center justify-end'>
                        {/* colocar styles y pasarle los colres por parametro */}
                        <progress value={vl.base_stat*2.8} max={maxValues[i]}></progress>
                        <span className='absolute pr-3 font-mono text-blue-900'>{vl.base_stat}</span>
                     </div>                       
                </label>)}       
            </div>
        </div>
        {/* abilidades */}
       <div className=' text-center bg-white bg-opacity-80 rounded-xl w-[400px] mx-auto my-10 p-3'>
        <h3 className='mx-auto font-bold text-3xl '>Habilidades</h3>
        {abilities.map((abilidad,id)=><div key={id}>
          <span className='block font-semibold text-lg text-sky-600 pt-2'>{abilidad.name}</span>
          <p>{abilidad.description}</p>
        </div>)}
       </div>
       {/* mobimientos/ataques */}
       <h3  className='text-center text-white font-black text-3xl pt-12 pb-6'>Mobimientos que {firstLeterUP(pokeData.name)} <br /> puede aprender</h3>
        <div className='text-center py-4'>
          <button onClick={allFilter} className="button-filter">Todos</button>
          <button onClick={()=>{filterMobments("physical")}} className="button-filter">Fisico</button>
          <button onClick={()=>{filterMobments("special")}} className="button-filter">Especial</button>
          <button onClick={()=>{filterMobments("status")}} className="button-filter">Estado</button>
        </div>
        {/* tabla mobimientos */}
        <div className='text-center bg-gray-900 text-white w-auto mx-6 md:w-[600px] md:mx-auto rounded-xl overflow-hidden'>
          <div className='grid grid-cols-3 font-bold text-lg py-3 bg-gray-600'>
            <span>Nombre</span>
            <span>Potencia</span>
            <span>Precisión</span>
          </div>
          <div>
            {/* implementacion de loader */}
            {secondCharge? <span className='loader mx-auto my-10'></span>
            : mobmentsRendered?mobmentsRendered.map((attack,id)=>attack.description? <div className={`grid py-2 ${id%2===0?"bg-gray-900":"bg-slate-800"}`} key={id}>
              <div className='grid grid-cols-3'>
                <span className='font-semibold'>{!attack.name?"name":attack.name}</span>
                <span>{attack.power?attack.power:"---"}</span>
                <span>{attack.accuracy?attack.accuracy:"---"}</span>
              </div>
              <p className='text-start pl-6 text-sky-600'>{attack.description}</p>
            </div>:""):""}
          </div>
          <div className='grid grid-cols-3 text-sky-600 py-4 bg-gray-600'></div>
        </div>
        
      </section>
      <section className='md:flex flex-col gap-3 w-auto hidden '>
        <Aside estilos={"bg-gray-600 w-[300px] rounded-lg  bg-opacity-80 "} >
          <Searcher/>
        </Aside>
      </section>
      </div>
      <Footer/>
    </main>
  ) 
}



export default Pokmon