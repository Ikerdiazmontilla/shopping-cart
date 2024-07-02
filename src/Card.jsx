import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({product}) {
  const imgUrl = product.images[0].replace(/(^\["|"]$|^"|"$)/g, '')
  return (
    <Link to={`/shop/${product.id}`} className="card" key={product.title}>
      <img src={imgUrl} alt="" className='card-img'/>
      <div className='product-info'>
        <p className='name'>{product.title}</p>
        <p className='price'>${product.price}</p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  product : PropTypes.object.isRequired
}

export default Card;