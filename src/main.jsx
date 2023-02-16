import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './routes/Home'
import Error from "./components/Error"
import Searcher from './components/Searcher'
import Pokmon from './routes/Pokmon'

const router = createBrowserRouter([
  {
    path:"/pokemon/:id",
    element: <Pokmon/>,
    errorElement:<Error/>
  },
  {
    path:"/",
    element:<Home/>,
    errorElement:<Error/>,
    children:[{
      path:"/searcher",
      element:<Searcher/>
    }]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
