import Card from "../Card";
import PropTypes from "prop-types"
import './shop.css'

function Shop ({data}) {
  return(
    <div className="card-wrapper">
      {data.slice(1).map((product) => <Card product={product} key={product.title}/>)}
    </div>
  );
}

Shop.propTypes = {
  data : PropTypes.array.isRequired
}

export default Shop