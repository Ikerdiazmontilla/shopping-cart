import { useParams } from "react-router-dom";
import PropTypes from "prop-types"

import { useState } from "react";
import { Link } from "react-router-dom";


function Product({data, loading, addToCart}) {
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  let productInfo;
  let imgUrl;
  if (!loading){
    productInfo = data.find((product => product.id === Number(id)));
    imgUrl = productInfo.images[0].replace(/(^\["|"]$|^"|"$)/g, '')

  }

  function handleChange(event) {
    setQuantity(event.target.value)
  }

  function handleDecrement() {
    if(quantity > 0) {
    setQuantity(quantity - 1)
    }
  }

  function handleIncrement() {
    setQuantity(quantity + 1)
  }

  function handleAdd() {
    if(quantity > 0) {
      addToCart(id,quantity)
    }
  }


  if(loading) {
    return(
      <div>
        Loading...
      </div>
    )
  }
  return(
    <div className="product-details">
        <img src={imgUrl} alt="" />
        <div className="product">
          <div className="info">
            <h2>{productInfo.title}</h2>
            <p className="price">${productInfo.price}</p>
          </div>
            <p className="description">{productInfo.description}</p>
          <div className="buttons">
            <div className="quantity">
              <button className="less" onClick={handleDecrement}>-</button>
              <input type="number" value={quantity} onChange={handleChange}/>
              <button className="more" onClick={handleIncrement}>+</button>
            </div>
            <button className="add-to-cart button" onClick={handleAdd}>Add to cart</button>
            <Link to={'/shop'} className="continue-shopping button">Continue shopping</Link>
          </div>
        </div>
    </div>
  )
}

Product.propTypes = {
  data : PropTypes.array.isRequired,
  loading : PropTypes.bool,
  addToCart : PropTypes.func
}

export default Product;