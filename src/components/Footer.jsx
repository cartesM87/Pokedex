import React from 'react'
import { Link } from 'react-router-dom'
import { GoMarkGithub } from "react-icons/go";
function Footer() {
  return (
    <footer className='bg-slate-800 h-[70px] text-white font-mono  text-center'>
      
      <nav className='flex flex-col items-center'>  
        <Link className='flex items-center gap-3 text-center h-auto' target='_blank' to={"https://github.com/cartesM87/Pokedex"}>
          <span className='hover:underline transition duration-150'>GitHub</span>
          <GoMarkGithub className='text-2xl hover:scale-110 transition duration-150'/>
        </Link>
      </nav>
    </footer>
  )
}

export default Footer