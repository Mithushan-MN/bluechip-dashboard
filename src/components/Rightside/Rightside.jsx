import React from 'react'
import './Rightside.css'
import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Update/Updates'

const Rightside = () => {
  return (
    <div  className='RightSide'>
    <div className='updates'>
        <h3>Updates</h3>
      <Updates/>
    </div>
    <div>
        <h3>
            Customer Reviews
        </h3>
        <CustomerReview/>
    </div>
    </div>
  )
}

export default Rightside
