import React from 'react'
import Searcher from '../Searcher'
function Aside() {
  return (
    <aside className='w-1/4 hidden lg:block absolute top-20 right-2 bg-gray-200 mx-auto border-2 border-sky-800 bg-opacity-80 rounded-md'>
      <Searcher/>
    </aside>
  )
}

export default Aside