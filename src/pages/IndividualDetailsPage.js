import React from 'react'
import price from '../img/services/Newport Price List V3-5.png'
import IndividualBread from '../components/breederDetails/IndividualBread'
import Newsletter from '../components/NewsLetter'
function IndividualDetailsPage() {
  return (
    <div>
      <IndividualBread/>
      <img src={price}></img>
      <Newsletter/>
    </div>
  )
}

export default IndividualDetailsPage
