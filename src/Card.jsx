import PropTypes from 'prop-types';

function Card({product}) {
  return (
    <div className="card" key={product.title}>
      <img src={product.images[0]} alt="" className='card-img'/>
      <div className='product-info'>
        <p className='name'>{product.title}</p>
        <p className='price'>${product.price}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  product : PropTypes.object.isRequired
}

export default Card;