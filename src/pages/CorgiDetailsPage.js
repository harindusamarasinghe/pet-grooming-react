import React from 'react'
import CorgiBread from '../components/breederDetails/CorgiBread'
import price from "../img/services/Newport Price List V3-9.png"
import Newsletter from '../components/NewsLetter'

function CorgiDetailsPage() {
  return (
    <div>
        <CorgiBread/>
        <img src={price}></img>
        <Newsletter/>
    </div>
  )
}

export default CorgiDetailsPage