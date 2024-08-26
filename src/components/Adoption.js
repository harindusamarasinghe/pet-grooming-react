import React from 'react'
import {Link} from 'react-router-dom'

function Appoinment() {


  
  return (
    <section className="adoption-area">
    <div className="container">
      <div className="row align-items-center align-items-xl-end justify-content-center">
        {/* <div className="col-xl-7 col-lg-6 col-md-10 order-0 order-lg-2">
          <div className="adoption-image">
            <img src="img/images/adoption_img.jpg" alt="" />
          </div>
        </div> */}
        <div className="col-xl-5 col-lg-6">
          <div className="adoption-content">
            <h2 className="title">SCHEDULE AN<br /> Dog <span>APPOINTMENT</span> </h2>
            <p>We love caring for pets! Schedule right here on our site for a meet and greet, or to make any pet services appointment. If you have a special request, send us a message, and we'll get back to you as soon as possible.</p>

            <h5 style={{marginBottom:'2%'}}>Newport Doggy Spa</h5>
            <h6 style={{marginBottom:'3%'}}>1916 Harbor Blvd, Costa Mesa, CA 92627<br/>(949) 500-1765<br/>happypaws@nodspa.com</h6>
            <a href="tel:+19495001765" className="btn">Call Now<img src="img/icon/w_pawprint.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="adoption-shape"><img src="img/images/adoption_shape.png" alt="" /></div> */}
  </section>
  )
}

export default Appoinment;
