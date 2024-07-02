import { useParams } from "react-router-dom";
import PropTypes from "prop-types"

function Product({data}) {
  const { id } = useParams()
  const productInfo = data.find((product => product.id === id));



  return(
    <div>
      Hey
    </div>
  )
}

Product.propTypes = {
  data : PropTypes.array.isRequired
}

export default Product;