import PropTypes from "prop-types"



function Cart({data, loading, cartItems, removeItem}) {
  const subtotal = cartItems.reduce((total,item) => {
    const product = data.find((product => product.id === Number(item.id)));
    return product ? total + (product.price * item.quantity) : total;
  }, 0)

  if(loading) {
    return(
      <div>
        Loading...
      </div>
    )
  }
  

  return(
    <div className="cart">
        <h2>My Cart</h2>

        {cartItems.length > 0 ? (
          <>
            {cartItems.map(({ id, quantity }) => {
              const productInfo = data.find((product) => product.id === Number(id));
              const imgUrl = productInfo.images[0].replace(/(^\["|"]$|^"|"$)/g, '');

              return (
                <div className="cart-item" key={id}>
                  <img src={imgUrl} alt="" />
                  <div className="info-wrapper">
                    <div className="item-info">
                      <h3>{productInfo.title}</h3>
                      <p className="price">${productInfo.price}</p>
                    </div>
                    <div className="button-wrapper">
                      <p className="quantity">Quantity: {quantity}</p>
                      <button className="remove-item" id={id} onClick={removeItem}>Remove Item</button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="subtotal">Subtotal: <span className="price">${subtotal}</span></div>
            <a href="https://www.youtube.com/watch?v=hPr-Yc92qaY&ab_channel=A2ZHighlights" className="checkout button">Proceed to checkout</a>
          </>
        ) : (
          <div className="no-items">No items in cart</div>
        )}

    </div>
  )
}

Cart.propTypes = {
  data : PropTypes.array.isRequired,
  loading : PropTypes.bool,
  cartItems : PropTypes.array,
  removeItem : PropTypes.func,
}

export default Cart;