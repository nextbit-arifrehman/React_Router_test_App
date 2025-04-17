import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Mobile from './Component/Mobile/Mobile.jsx';
import Laptop from './Component/Header/Laptop/Laptop.jsx';
import Users from './Component/Users/Users.jsx';

const router =createBrowserRouter([
  {
    path:'/',
   Component:Root,
   children:[
    {index:true,Component:Home},
    {path:"Mobile" ,Component:Mobile},
    {path:"Laptop",Component:Laptop},
    {path:"users", 
      loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
      Component:Users}
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)


