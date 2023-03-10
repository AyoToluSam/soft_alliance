import {IoMdClose} from 'react-icons/io'
import {MdDelete} from 'react-icons/md'
import { useCart } from '../../contexts/CartContext'
import { formatCurrency } from '../../utilities/formatCurrency'


const Cart = () => {

  const {closeCart, cartItems, removeFromCart, removeAll, products} = useCart()

  return (
    <div className='cartContainer'>
      <div className='cartHeader'>
        <h2>Cart</h2>
        <div className='close' onClick={() => closeCart()} >
          <IoMdClose/>
        </div>
      </div>
      <ul>
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            const cartItem = products.find(product => product.id === item.id)

            if (cartItem == null) return null

            return (
              <li key={item.id}>
                <div className='leftDiv'>
                  <div className='cartImage'>
                    <img src={cartItem.image} alt={cartItem.title} />
                  </div>
                  <span className='itemName' >{cartItem.title}</span>
                  {item.quantity > 1 &&
                    <p>
                      x{item.quantity}
                    </p>
                  }
                </div>
                <div className='rightDiv'>
                  <span className='itemPrice' >{formatCurrency(cartItem.price * item.quantity)}</span>
                  <button className='remove' onClick={() => removeFromCart(item.id)}><MdDelete/></button>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className='totalContainer'>
        <h2 className='cartTotal' >
          Total: {formatCurrency(cartItems.reduce(
          (total, cartItem) => {
            const item = products.find(item => item.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
          }, 0))}
        </h2>
        <button className='removeAll' onClick={() => removeAll()} >Remove all</button>
      </div>
      <div className='checkoutButton' >
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart