import './App.scss'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/Layout/Layout';


const App = () => {

  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Layout>
    </CartProvider>
  )
}

export default App
