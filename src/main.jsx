import { StrictMode, Suspense } from 'react'
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
import Users2 from './Component/Users2/Users2.jsx';
import UsersDetails from './Component/UserDetails/UsersDetails.jsx';
import Posts from './Component/Posts/Posts.jsx';
import PostDetails from './Component/PostDetails/PostDetails.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then
(res=> res.json());

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
    Component:Users},
    {
     path:'users2',
     element:<Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <Users2 usersPromise ={usersPromise}></Users2>
     </Suspense>
    },
    {
      path:'users/:userId',
      
      loader:({params}) => 
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId} `),

      Component:UsersDetails
    },
    {
      path:"posts",
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      Component: Posts
    },
    {
      path: 'posts/:postId',
      loader:({params}) => fetch(`
        https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
      Component: PostDetails
    }
    
  ]
  },
  {
    
      path:"*",
      element: <h3>404 not found</h3>
 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)


