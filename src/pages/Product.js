import React from 'react'
import Nav from '../components/Nav'
import MenuBar from '../components/MenuBar'
import Footer from '../components/Footer'
import ProductDetails from '../components/ProductDetails'

function Product() {
  return (
    <div>
        <Nav/>
        <MenuBar/>
        <ProductDetails/>
        <Footer/>
    </div>
  )
}

export default Product