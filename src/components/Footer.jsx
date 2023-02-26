import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='bg-slate-800 h-[70px] text-white font-mono  text-center'>

        <nav>
          <Link to={""} >Aclaraciones</Link>
        </nav>
    </footer>
  )
}

export default Footer