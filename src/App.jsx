import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Home from './Home';
import Shop from './shop/Shop';
import Nav from './Nav';
import './index.css';
import mockData from './mockData';
import ErrorPage from './ErrorPage';
import Product from './shop/Product';


function App() {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      const clothes = data.filter((product) => product.category.name === "Clothes")
      if(clothes.length < 4) {
        setData(mockData)
      } else {
        setData(clothes);
      }
      setLoading(false)
      console.log('clothes', clothes)
    })
    .catch((error) => {
      console.log(error)
      setData(mockData)
      setLoading(false)
    })
  }, [])



  return (
    <>
        <RouterProvider router={router(data, loading)} />
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

const router = (data, loading) => createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: '/', element: <Home data={data} loading={loading}/>,  },
      { path: 'shop', element: <Shop data={data} loading={loading}/> },
      { path: 'shop/:id', element: <Product data={data} loading={loading}/> },
    ],
    errorElement: <ErrorPage/>
  },
])


export default App