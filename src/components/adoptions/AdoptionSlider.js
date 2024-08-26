import React from 'react';
import {Link} from 'react-router-dom'
import HomeCounter from '../hometwo/HomeCounter'
import Slider from 'react-slick'

function AdoptionSlider() {
  return (
    <section className="adoption-area">
    <div className="container">
      <div className="row align-items-center align-items-xl-end justify-content-center">
        <div className="col-xl-5 col-lg-6">
          <div className="adoption-content">
          <h4>Welcome to Newport Doggy Spa, where passion meets precision in pet grooming. Our mission is simple: to provide exceptional grooming services that enhance the health and happiness of your beloved pets..</h4>
            <h2 className="title">OUR<span> STORY</span> </h2>
            <p>Founded on a deep love for animals and a commitment to excellence, Newport Doggy Spa has been serving the community with top-notch grooming services since 2018. Our journey began with a vision to create a grooming experience that combines professional expertise with compassionate care. Today, we’re proud to be a trusted name in pet grooming, known for our dedication to every pet’s well-being.</p>

            <h2 className="title">OUR<span> PHILOSOPHY</span> </h2>
            <p>At Newport Doggy Spa, we believe that grooming is more than just a service; it’s an essential part of your pet’s overall health and happiness. Our philosophy centers around “Quality Grooming from Nose to Tail,” ensuring that every aspect of your pet’s grooming needs is met with care, attention, and precision</p>

            <h2 className="title">OUR<span> TEAM</span> </h2>
            <p>Our team of skilled groomers brings a wealth of experience and a genuine love for animals to every grooming session. Each member of our staff is highly trained in the latest grooming techniques and is dedicated to providing personalized care tailored to your pet’s individual needs. We take pride in creating a positive, stress-free environment where pets feel comfortable and valued.</p>

            <h2 className="title">OUR<span> FACILITIES</span> </h2>
            <p>Our state-of-the-art grooming salon is designed with your pet’s comfort and safety in mind. Equipped with the latest tools and high-quality products, our facilities ensure a clean, modern, and soothing environment for your pet. From cozy grooming stations to premium pet shampoos, we’ve invested in the best to deliver exceptional results.</p>

            <h2 className="title">OUR<span> SERVICES</span> </h2>
            <p>We offer a comprehensive range of grooming services, including bathing, brushing, nail trimming, ear cleaning, and more. Whether your pet needs a basic tidy-up or a full grooming session, our services are tailored to meet their unique needs and preferences.</p>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="adoption-shape"><img src="img/images/adoption_shape.png" alt="" /></div> */}
  </section>
  ) 
}

export default AdoptionSlider;
