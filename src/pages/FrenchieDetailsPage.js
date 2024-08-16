import React from 'react'
import price from '../img/services/Newport Price List V3-6.png'
import FrenchieBread from '../components/breederDetails/FrenchieBread'
import Newsletter from '../components/NewsLetter'

function FrenchieDetailsPage() {
  return (
    <div>
      <FrenchieBread/>
      <img src={price} alt='frenchie prices'></img>
      <Newsletter/>
    </div>
  )
}

export default FrenchieDetailsPage

