import React from 'react'
import GroomBread from '../components/breederDetails/GroomBread'
import price from '../img/services/Newport Price List V3-3.png'
import Newsletter from '../components/NewsLetter'

function CommbinationDetailsPage() {
  return (
    <div>
      <GroomBread/>
      <img src={price}></img>
      <Newsletter/>
    </div>
  )
}

export default CommbinationDetailsPage
