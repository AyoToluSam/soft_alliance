import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='home' >
      <header>
        <Navbar/>
        <Hero/>
      </header>
    </div>
  )
}

export default Home