import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Resister from './Components/Resister';
import AuthProvider from './Providers/AuthProvider';
import Orders from './Components/Orders';
import PrivateRoute from './Components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
    },{
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element:<Resister></Resister>
    },{
      path:'/orders',
      element:<PrivateRoute><Orders></Orders></PrivateRoute>
    }
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)
