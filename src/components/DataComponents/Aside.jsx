import React from 'react'
function Aside({component,estilos}) {
  return (
    <aside className={`hidden lg:block my-3 ${estilos} `}>
      {component}
    </aside>
  )
}

export default Aside