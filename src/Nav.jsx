import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Nav({length}) {

  
  return(
    <nav role="menubar">
      <Link to={'/'} role="heading" className='home-link'>Urban Vibes</Link>
      <Link to={'/shop'}>Shop</Link>
      <a ><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
      <Link className='cart-link' to={'/cart'}><FontAwesomeIcon icon={faCartShopping}/> {length > 0 ? <span className='cart-decoration'>{length}</span> : ''}</Link>
    </nav>
  )
}


export default Nav;  