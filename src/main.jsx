import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import'./App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import Register from './Components/Register/Register.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Login from './Components/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
{
  path:'/',
  element:<Home></Home>
},
{
path:'/register',
element:<Register></Register>,
},
{
  path:'/blog',
  element:<Blog></Blog>
},
{
  path:"/login",
  element:<Login></Login>
}


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
