
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Compontens/Home'
import Product from './Compontens/Product'
import About from './Compontens/About'
import Contact from './Compontens/Contact'
import Header from './Compontens/Header'
import Footer from './Compontens/Footer'
import ProductDetail from './ProductDetail';
import Cart from './Compontens/Cart';
import {CartProvider} from "react-use-cart"

function App() {
  return (
    <>
    <CartProvider>
    <Header/>
    <Routes>
      <Route   path="/" element={<Home/>} />
      <Route   path="/product" element={<Product/>} />
      <Route   path="/product/:id" element={<ProductDetail/>} />
      <Route   path="/cart" element={<Cart/>} />
      <Route   path="/about" element={<About/>} />
      <Route   path="/contact" element={<Contact/>} />
      
    </Routes>
 
    <Footer/>
    </CartProvider>
    </>
  );
}

export default App;
