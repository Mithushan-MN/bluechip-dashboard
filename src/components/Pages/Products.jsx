import React from 'react'
import Sidebar from '../Sidebar'
import ProductList from './product/ProductList'

const Products = () => {
  return (
    <div>
     <Sidebar>
     <h1>Products</h1>
     <ProductList/>
     </Sidebar>
    </div>
  )
}

export default Products
