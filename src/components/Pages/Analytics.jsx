import React from 'react'
import Sidebar from '../Sidebar'
import './Analytics.css'
import CustomerReview from '../CustomerReview/CustomerReview'

const Analytics = () => {
  return (
    <div className='analytic'>
      <Sidebar>
      <h1>Analytics</h1>
      <div className='anl-contt'>
      <CustomerReview/>
      </div>
  
      </Sidebar>
      
    </div>
  )
}

export default Analytics
