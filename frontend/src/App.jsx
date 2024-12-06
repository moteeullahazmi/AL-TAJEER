import React from 'react'
import { Routes, Route } from 'react-router'
import ScrollToTop from './components/ScrollToTop'
// page import
import Home from "../src/pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from './pages/PlaceOrder'
import Orders from "./pages/Orders"

//component import
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <ScrollToTop/>
    <ToastContainer />
    <Navbar />
    <SearchBar/>
    <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/collection' element= {<Collection/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/products/:productId' element= {<Product/>}/>
          <Route path='/cart' element= {<Cart/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/place-order' element= {<PlaceOrder/>}/>
          <Route path='/orders' element= {<Orders/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App