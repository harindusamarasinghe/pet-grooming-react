import React from 'react'
import AddonBread from '../components/breederDetails/AddonBread'
import prices from '../img/services/Newport Price List V3-4.png'
import Newsletter from '../components/NewsLetter'

function AddonDetailsPage() {
  return (
    <div>
      <AddonBread/>
      <img src={prices}></img>
      <Newsletter/>
    </div>
  )
}

export default AddonDetailsPage
