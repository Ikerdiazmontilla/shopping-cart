import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Home from './Home';
import Shop from './shop/Shop';
import Nav from './Nav';
import './index.css';
import mockData from './mockData';


function App() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const clothes = data.filter((product) => product.category.name === "Clothes")
      setData(clothes);
      console.log('hello')
    })
    .catch((error) => {
      console.log(error)
      alert('There was a problem fetching the items')
      setData(mockData)
    })
  }, [])



  return (
    <>
        <RouterProvider router={router(data)} />
    </>
  )
}
const Layout = () => {
  return(
  <div>
    <Nav/>
    <Outlet/>
  </div>
  )
}

const router = (data) => createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: '/', element: <Home data={data}/> },
      { path: 'shop', element: <Shop data={data}/> },
    ]
  },
])


export default App