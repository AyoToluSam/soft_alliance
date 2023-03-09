import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Iproducts } from '../../constants/types';
import Cart from '../../components/Cart/Cart';


const Home = () => {

  // const url = "https://fakestoreapi.com/products"

  // const [products, setProducts] = useState<Iproducts[]>([]);
  
  // //Fetching data from API at saving it into the above state
  
  // const fetchProducts = async () => {
  
  //   const response = await axios.get(url).catch(err => console.log(err));

  //   if (response) {
  //     console.log(response.data);
  //     setProducts(response.data);
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, [])


  return (
    <main className='home'>
      <Hero/>
      <Products/>
    </main>
  )
}

export default Home