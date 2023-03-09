import { BsFilterSquare } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Iproducts } from '../../constants/types'
import { useCart } from '../../contexts/CartContext'
import { formatCurrency } from '../../utilities/formatCurrency'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Products = () => {

  const [clicked, setClicked] = useState(false)

  const {
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity,
    removeFromCart,
    products
  } = useCart()
  
  return (
    <section className='products'>
      <div className='filters'>
        <div className='filterDrop'>
          <p>Filters</p>
          <BsFilterSquare/>
        </div>
        <select name="sort" id="">
          <option value="">Sort By</option>
        </select>
      </div>
      <h3>Products For You!</h3>
      <div className='productList'>
        {products.map((product) => {
          const quantity = getItemQuantity(product.id);
          return (
            <div key={product.id} className="productCard" >
              <div className='imageContainer'>
                <div>
                  {

                  }
                </div>
                <img src={product.image} alt={product.title} />
              </div>
              <h2>{product.title}</h2>
              <p>{formatCurrency(product.price)}</p>
              <Link to={`/market/product/${product.id}`}>View Details</Link>
              <div>
                {
                  quantity === 0 ?
                  (<button onClick={() => increaseItemQuantity(product.id)}> + Add To Cart</button>) : 
                  (<div className='allButtons'>
                    <div className='quantityButtons'>
                      <button onClick={() => decreaseItemQuantity(product.id)}>-</button>
                      <p><span>{quantity}</span>in cart</p>
                      <button onClick={() => increaseItemQuantity(product.id)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                  </div>)
                }
              </div>
            </div>
          )
        })}      
      </div>
    </section>
  )
}

export default Products