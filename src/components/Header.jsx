import React,{lazy,Suspense,useState,useContext, useEffect} from 'react'
import { Link} from 'react-router-dom';
import {GoThreeBars,GoSearch} from "react-icons/go";

function Header() {

  const Img = lazy(()=>import("./Image"));


  const [display, setDisplay] = useState(false);
  let controllerD=()=>{display?setDisplay(false):setDisplay(true)};

  return (
    <header >
        <div className='bg-gray-800 h-16  grid grid-cols-3 place-items-center items-center md:flex md:justify-center'>
          <button type='button' onClick={controllerD} className='md:hidden block col-span-1'>
            <GoThreeBars className='text-white text-2xl'/>
          </button> 
          <Suspense  fallback={<span className='loader'></span>}>
            <Link className='px-6' to={"/"}>
                <Img url={"/src/assets/pokelogo.png"} alt={"Logo"} clas={"img-shadow py-1 w-[120px] "} />
            </Link>   
          </Suspense> 

        </div>
        <nav style={display?{display:"flex"}:{display:"none"}} className='flex md:hidden bg-gray-700 flex-col justify-center items-center px-4 gap-3'>
            <Link className='md:hidden text-white font-semibold'>link1</Link>
            <Link className='md:hidden text-white font-semibold'>link2</Link>
            <Link className='md:hidden text-white font-semibold'>link3</Link>
            <Link className='md:hidden text-white font-semibold'>link4</Link>   
        </nav>
    </header>

    )
}

export default Header