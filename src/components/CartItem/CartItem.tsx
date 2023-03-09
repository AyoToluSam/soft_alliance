import { Iproducts } from "../../constants/types"
import { useCart } from "../../contexts/CartContext"
import { formatCurrency } from "../../utilities/formatCurrency"

type CartItemProps = {
  id: number,
  quantity: number,
  products: Iproducts[]
}

//This component renders each item added to the cart, the quantity of the
//item and a button to remove it from the cart.

const CartItem = ({id, quantity, products} : CartItemProps) => {

//Destructuring the needed context from the useShoppingCart function as
//defined in the ShoppingCartContext.

  const { removeFromCart } = useCart()
  const item = products.find(item => item.id === id)

  if (item == null) return null

  return (
    <div className="cartItem">
      <div className="itemInfo">
        <div className="infoLeft">
          <div className="itemDetails">
            <h4>
            </h4>
            {quantity > 1 &&
              <p>
                x{quantity}
              </p>
            }
          </div>
          <p className="itemPrice">
            {formatCurrency(item.price)}
          </p>
        </div>
        <div className="infoRight">
          <h4>{formatCurrency(item.price * quantity)}</h4>
          <button onClick={() => removeFromCart(item.id)}>x</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem