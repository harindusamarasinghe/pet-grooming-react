import React from 'react';
import MainSlider from '../components/MainSlider';
import Find from '../components/Find'
import Counter from '../components/Counter'
import Appoinment from '../components/Adoption'
import BreedServices from '../components/BreedServices'
import Faq from '../components/Faq'
import Brand from '../components/Brand'
import AdoptionFaq from '../components/adoptions/AdoptionFaq';
import AdoptionShop from '../components/AdoptionShop'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/NewsLetter'
import BlogsHome from '../components/BlogsHome'
import HomeTwoSlider from '../components/hometwo/HomeTwoSlider'




function Home() {


  return (

	
		  <main>
				<MainSlider/>
				{/* <Find/> */}
				
				<Counter/>
				<AdoptionFaq/>
				<Appoinment/>
				
				<Faq afterElment="faq-area"/>
				<Brand/>
				<BreedServices/>
				
				
				{/* <AdoptionShop/> */}
				<Testimonial/>
				{/* <BlogsHome/> */}
				<Newsletter/>
				
		</main>
	  
  )
}

export default Home;
