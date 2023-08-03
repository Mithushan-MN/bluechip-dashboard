import React from 'react'
import './Maindash.css'
import Cards from '../Cards/Cards'
import ProductList from '../Pages/product/ProductList'

const Maindash = () => {
  return (
    <div className='maindash'>
      <Cards/>
      <ProductList/>
    </div>
  )
}

export default Maindash
