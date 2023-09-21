import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { element } from 'prop-types';
import Home from './assets/Home/Home.jsx';
import ChildrenHome from './assets/ChildrenHome/ChildrenHome.jsx';
import About from './assets/About/About.jsx';
import Services from './assets/Services/Services.jsx';
import Users from './assets/Users/Users';
import UserDetails from './assets/UserDetails/UserDetails';
import ErrorPage from './assets/ErrorPage/ErrorPage';


const router = createBrowserRouter([
   {
    path : "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<ChildrenHome></ChildrenHome>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/users",
        loader :()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:"/users/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetails></UserDetails>
      }
    ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
