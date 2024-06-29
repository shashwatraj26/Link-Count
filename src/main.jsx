import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/header/home/Home.jsx'
import About from './components/header/about/About.jsx'
import './index.css'
import Layout from './layout/Layout.jsx'
import Contact from './components/header/contact/Contact.jsx'
import UserId from './components/header/userId/UserId.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      { path:"",
        element:<Home/>

      },
      {path:"about",
        element:<About/>
      },
      {path:"contact",
        element:<Contact/>
      },
      {path:"user/:userid",
        element:<UserId/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
