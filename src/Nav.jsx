import './nav.css'
import { Link } from 'react-router-dom';
function Nav() {

  
  return(
    <nav role="menubar">
      <Link to={'/'} role="heading" className='home-link'>Urban Vibes</Link>
      <Link to={'shop'}>Shop</Link>
      <Link >Search</Link>
      <Link >Cart</Link>
    </nav>
  )
}


export default Nav;  