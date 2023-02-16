import React,{lazy,Suspense} from 'react'
import { Link} from 'react-router-dom'
import {FaSearch} from "react-icons/fa"
import Searcher from './Searcher'

function Header() {

  const Img = lazy(()=>import("./Image"))

  return (
    <header className=' grid-cols-1 place-items-center grid bg-gray-700 w-full py-2'>
        <Suspense fallback={<span className='loader'></span>}>
          <Link className='px-6' to={"/"}>
              <Img url={"/src/assets/pokelogo.png"} alt={"Logo"} clas={"img-shadow w-[120px] "} />
          </Link>   
        </Suspense> 
        <div className='flex items-center'>
          <nav className='flex  px-4 gap-3'>
              <Link className='hover:text-yellow-500 transition duration-75 text-white font-semibold'>link1</Link>
              <Link className='hover:text-yellow-500 transition duration-75 text-white font-semibold'>link2</Link>
              <Link className='hover:text-yellow-500 transition duration-75 text-white font-semibold'>link3</Link>
              <Link className='hover:text-yellow-500 transition duration-75 text-white font-semibold'>link4</Link>   
          </nav>
          <Link to={"/searcher"} className='text-lg col-span-1'><FaSearch /></Link>
        </div>

    </header>
    )
}

export default Header