import React from 'react'
import GoldernBread from '../components/breederDetails/GoldernBread'
import price from '../img/services/Newport Price List V3-8.png'
import Newsletter from '../components/NewsLetter'

function GoldernDetailsPage() {
  return (
    <div>
        <GoldernBread/>
        <img src={price} alt='goldern-prices'></img>
        <Newsletter/>
    </div>
  )
}

export default GoldernDetailsPage