import Featured from './Featured';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"

function Home({data, loading}) {

  return (
    <>
      <div className="main-home">
        <div className="wrapper">
          <p>Upgrade your style</p>
          <Link to={'shop'} className='shop-now'>Shop Now</Link>
        </div>
      </div>
      {
      loading ?
        <div>
          Loading...
        </div>
      :
      <Featured data={data}/>
      }
    </>
  );
}

Home.propTypes = {
  data : PropTypes.array.isRequired,
  loading : PropTypes.bool
}

export default Home;
