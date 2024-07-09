import Card from "../Card";
import PropTypes from "prop-types"

function Shop ({data, loading}) {

  if(loading) {
    return(
      <div>
        Loading...
      </div>
    )
  }
  return(
    <div className="card-wrapper">
      {data.slice(1).map((product) => <Card product={product} key={product.title}/>)}
    </div>
  );
}

Shop.propTypes = {
  data : PropTypes.array.isRequired,
  loading : PropTypes.bool,
}

export default Shop