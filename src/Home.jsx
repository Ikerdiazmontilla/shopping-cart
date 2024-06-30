import Featured from './Featured';
import './Home.css'
import Nav from './Nav';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const clothes = data.filter((product) => product.category.name === "Clothes")
      setData(clothes);
      console.log(clothes)
    })
    .catch((error) => {
      console.log(error)
      alert('There was a problem fetching the items')
    })
  }, [])


  

  return (
    <>
      <Nav />
      <div className="main-home">
        <div className="wrapper">
          <p>Upgrade your style</p>
          <Link to={'shop'} className='shop-now'>Shop Now</Link>
        </div>
      </div>
      <Featured data={data}/>
    </>
  );
}

export default Home;
