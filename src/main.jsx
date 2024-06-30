import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home.jsx'
import './index.css'
import Shop from './shop/Shop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'shop',
    element: <Shop/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
