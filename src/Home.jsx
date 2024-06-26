import Featured from './Featured';
import './Home.css'
import Nav from './Nav';
import { useEffect, useState } from 'react';


function Home() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) => response.json())
    .then((data) => {
      const clothes = data.filter((product) => product.category.name === "Clothes")
      setData(clothes);
      console.log(data)
      console.log(clothes)
    })
  }, [])


  

  return (
    <>
      <Nav />
      <div className="main-home">
        <div className="wrapper">
          <p>Upgrade your style</p>
          <a href="" className='shop-now'>Shop Now</a>
        </div>
      </div>
      <Featured data={data}/>
    </>
  );
}

export default Home;
