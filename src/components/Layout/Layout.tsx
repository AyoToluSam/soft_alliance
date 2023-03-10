import {ReactNode} from 'react'
import Navbar from '../Navbar/Navbar'
import Cart from '../Cart/Cart'
import { useCart } from '../../contexts/CartContext'
import logoAlt from '../../assets/logo-alt.png';
import { FiMail, FiTwitter, FiPhone } from 'react-icons/fi';
import { RiWhatsappLine  } from 'react-icons/ri';




type LayoutProps = {
  children: ReactNode
}


const Layout = ({children}: LayoutProps) => {

  const {isOpen} = useCart()

  return (
    <div className="container">
      <header className='header'>
        <Navbar />
        { isOpen &&
          <Cart/>
        }
      </header>
      {children}
      <footer className='footer'>
        <div className='contact'>
          <img src={logoAlt} alt="logo" />
          <p>Ojuolape House, 9 NERDC Rd, CBD, Alausa-Ikeja, Lagos</p>
          <div className='socialIcons'>
            <FiPhone/>
            <FiMail/>
            <RiWhatsappLine/>
            <FiTwitter/>
          </div>
        </div>
        <div className='help'>
          <h3>Get Help</h3>
          <ul>
            <li>Contact us</li>
            <li>About us</li>
            <li>Return policy</li>
            <li>Privacy policy</li>
            <li>Payment policy</li>
          </ul>
        </div>
        <div className='about'>
          <h3>About us</h3>
          <ul>
            <li>News</li>
            <li>Service</li>
            <li>Our Policy</li>
            <li>Customer care</li> 
            <li>Faq's</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout