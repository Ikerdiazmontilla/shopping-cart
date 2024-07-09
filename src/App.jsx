import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Home from './Home';
import Shop from './shop/Shop';
import Nav from './Nav';
import './index.css';
import mockData from './mockData';
import ErrorPage from './ErrorPage';
import Product from './shop/Product';
import Cart from './shop/Cart';


function App() {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true)
  const [ cartItems, setCartItems ] = useState([])

  
  function addToCart(id, quantity) {
    const isInCart = cartItems.find((item) => item.id === id);
    if (isInCart) {
      const newCartItems = cartItems.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { id, quantity }]);
    }
  }
  

  function removeItem(event) {
    const id = event.currentTarget.id
    const newCartItems = cartItems.filter((item) => item.id !== id)
    setCartItems(newCartItems)
  }

  useEffect(() => {
    // fetch('https://api.escuelajs.co/api/v1/products')
    // .then((response) => {
    //   return response.json()
    // })
    // .then((data) => {
    //   console.log(data)
    //   const clothes = data.filter((product) => product.category.name === "Clothes")
    //   if(clothes.length < 4) {
    //     setData(mockData)
    //   } else {
    //     setData(clothes);
    //   }
    //   setLoading(false)
    //   console.log('clothes', clothes)

    // })
    // .catch((error) => {
    //   console.log(error)
    //   setData(mockData)
    //   setLoading(false)
    // })
    setData(mockData)
    setLoading(false)
  }, [])



  return (
    <>
        <RouterProvider router={router(data, loading, cartItems, addToCart, removeItem)} />
    </>
  )
}
const Layout = ({cartItems}) => {
  return(
  <div>
    <Nav length={cartItems.length}/>
    <Outlet/>
  </div>
  )
}

const router = (data, loading, cartItems, addToCart, removeItem) => createBrowserRouter([
  {
    path: '/',
    element: <Layout cartItems={cartItems}/>,
    children: [
      { path: '/', element: <Home data={data} loading={loading}/>,  },
      { path: 'shop', element: <Shop data={data} loading={loading}/> },
      { path: 'shop/:id', element: <Product data={data} loading={loading} addToCart={addToCart}/> },
      { path: 'cart', element: <Cart data={data} loading={loading} cartItems={cartItems} removeItem={removeItem}/> },
    ],
    errorElement: <ErrorPage/>
  },
])


export default App