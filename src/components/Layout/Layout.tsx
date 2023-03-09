import {ReactNode} from 'react'
import Navbar from '../Navbar/Navbar'
import Cart from '../Cart/Cart'
import { useCart } from '../../contexts/CartContext'

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
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default Layout