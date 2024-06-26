import Card from "./Card";
import PropTypes from "prop-types"

function Featured({data}) {
  

  return(
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="card-wrapper">
        {data.slice(1,5).map((product) => <Card product={product} key={product.title}/>)}
      </div>
    </div>
  )
}

Featured.propTypes = {
  data : PropTypes.array.isRequired
}

export default Featured;