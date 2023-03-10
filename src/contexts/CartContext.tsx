import { ReactNode, createContext, useContext, useEffect, useState} from 'react'
import { useLocalStorage } from '../utilities/useLocalStorage'
import axios from 'axios'
import { Iproducts } from '../constants/types'



type CartContextProps = {
  getItemQuantity: (id: number) => number,
  increaseItemQuantity: (id: number) => void,
  decreaseItemQuantity: (id: number) => void,
  removeFromCart: (id: number) => void,
  removeAll: () => void,
  isOpen: boolean,
  openCart: () => void,
  closeCart: () => void,
  cartQuantity: number,
  cartItems: CartItemProps[],
  products: Iproducts[]
}

type CartProviderProps= {
  children: ReactNode
}

type CartItemProps = {
  id: number,
  quantity: number
}

//Creating a context to handle all the information about the cart,
//and pass through all the components of the application using the provider.

const CartContext = createContext({} as CartContextProps)

//The function below when called, will return a useContext hook with the 
//above created context already passed into it. The useContext hook
//will in turn return all the values passed into the provider.

export const useCart = () => {
  return (
    useContext(CartContext)
  )
}

//A wrapper component that returns the context provider.

export const CartProvider = ({children}: CartProviderProps) => {

  const url = "https://fakestoreapi.com/products"

  const [products, setProducts] = useState<Iproducts[]>([]);
  
  //Fetching data from API at saving it into the above state
  
  const fetchProducts = async () => {
  
    const response = await axios.get(url).catch(err => console.log(err));

    if (response) {
      console.log(response.data);
      setProducts(response.data);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  
//The state below handles the opening and closing of the cart button

  const [isOpen, setIsOpen] = useState(false)
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

//The custom hook below is defined in the utilities folder. It handles 
//the state of the items in the cart and persists the state by saving it 
//to the local storage.

  const [cartItems, setCartItems] = useLocalStorage<CartItemProps[]>("Shopping Cart", [])

//The functions below are explained as named. They are passed as context
//to the provider.

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  const increaseItemQuantity = (id: number) => {
    setCartItems( cartItems => {
      if (cartItems.find(item => item.id === id) == null) {
        return [...cartItems, {id, quantity: 1}]
      } else {
        return cartItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          }
          return item
        })
      }
    })
  }

  const decreaseItemQuantity = (id: number) => {
    setCartItems( cartItems => {
      if (cartItems.find(item => item.id === id)?.quantity === 1) {
        return cartItems.filter(item => item.id !== id)
      } else {
        return cartItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          }
          return item
        })
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems( cartItems => {
      return cartItems.filter(item => item.id !== id)
    })
  }

  const removeAll = () => {
    setCartItems([]);
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0 
  )

  return (
    <CartContext.Provider 
      value={{
        getItemQuantity, 
        increaseItemQuantity, 
        decreaseItemQuantity, 
        removeFromCart,
        removeAll,
        isOpen, 
        openCart, 
        closeCart, 
        cartQuantity, 
        cartItems,
        products
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

