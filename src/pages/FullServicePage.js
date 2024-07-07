import React from 'react';
import BathBread from '../components/breederDetails/BathBread'
import prices from '../img/services/Newport Price List V3-1.png'
import Newsletter from '../components/NewsLetter';
function FullServicePage() {
  return (
	  <main>
	    <BathBread/>
		<img src={prices}></img>
		<Newsletter/>
	  </main>
  )
}

export default FullServicePage;
