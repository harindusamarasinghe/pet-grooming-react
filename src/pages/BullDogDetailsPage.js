import React from 'react'
import BullDogBread from '../components/breederDetails/BullDogBread'
import price from "../img/services/Newport Price List V3-7.png"
import Newsletter from '../components/NewsLetter'
function BullDogDetailsPage() {
  return (
    <div>
        <BullDogBread/>
        <img src={price} alt='bulldog-details-prices'></img>
        <Newsletter/>
    </div>
  )
}

export default BullDogDetailsPage