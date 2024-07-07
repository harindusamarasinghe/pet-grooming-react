import React from 'react'
import TidyBread from '../components/breederDetails/TidyBread'
import prices from "../img/services/Newport Price List V3-2.png"
function BathDetailsPage() {
  return (
    <div>
      <TidyBread/>
      <img src={prices}></img>
    </div>
  )
}

export default BathDetailsPage
