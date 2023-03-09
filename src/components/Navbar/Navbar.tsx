import logo from '../../assets/Soft-Logo.png';
import { RiUser3Line } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { useCart } from '../../contexts/CartContext';

const Navbar = () => {

  const { openCart, cartQuantity } = useCart()

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" />
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">Deals</a></li>
        <li><a href="">About</a></li>
      </ul>
      <div className='input'>
        <input type="text" placeholder='Search Products' />
        <BiSearch className='inputIcon'/>
      </div>
      <div className='userAccess'>
        <div className='account'>
          <RiUser3Line/>
          <p>Account</p>
        </div>
        <div className='cartButton' onClick={() => openCart()}>
          <p>Cart</p>
          <FiShoppingCart/>
          {
            cartQuantity > 0 &&
            <div className='cartQuantity'>{cartQuantity}</div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar