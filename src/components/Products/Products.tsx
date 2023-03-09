import { BsFilterSquare } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useCart } from '../../contexts/CartContext'
import { formatCurrency } from '../../utilities/formatCurrency'
import StarRatings from 'react-star-ratings'



const Products = () => {

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
                <div className='heart'>
                  <AiOutlineHeart/>
                </div>
                <img src={product.image} alt={product.title} />
              </div>
              <h5>{product.title}</h5>
              <StarRatings
                rating={product.rating.rate}
                starDimension="12px"
                starSpacing="3px"
              />
              <h5>{formatCurrency(product.price)}</h5>
              <div className='buttonContainer'>
                {
                  quantity === 0 ?
                  (<button onClick={() => increaseItemQuantity(product.id)}> Add To Cart</button>) : 
                  (<div className='allButtons'>
                    <div className='quantityButtons'>
                      <button onClick={() => decreaseItemQuantity(product.id)}><FaMinus/></button>
                      <p><span>{quantity}</span>in cart</p>
                      <button onClick={() => increaseItemQuantity(product.id)}><FaPlus/></button>
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