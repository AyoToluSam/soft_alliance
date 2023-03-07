import logo from '../../assets/Soft-Logo.png';
import { RiUser3Line } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" />
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Store</a></li>
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
        <div className='cart'>
          <FiShoppingCart/>
          <p>Cart</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar