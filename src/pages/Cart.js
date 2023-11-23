import React from 'react'
import Nav from '../components/Nav'
import MenuBar from '../components/MenuBar'
import Footer from '../components/Footer'
import CartDetails from '../components/CartDetails'

function Cart() {
  return (
    <div>
        <Nav/>
        <MenuBar/>
        <div class="container d-flex flex-wrap justify-content-around">
            <h1>Your Cart</h1>
            <CartDetails/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Cart