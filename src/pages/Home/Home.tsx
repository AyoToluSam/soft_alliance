import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <div className='home' >
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <Products/>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home