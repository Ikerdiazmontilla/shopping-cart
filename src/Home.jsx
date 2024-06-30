import Featured from './Featured';
import './Home.css'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"

function Home({data}) {
  return (
    <>
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

Home.propTypes = {
  data : PropTypes.array.isRequired
}

export default Home;
