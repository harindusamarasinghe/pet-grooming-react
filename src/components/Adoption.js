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

            <h5 style={{marginBottom:'2%'}}>HENLEY STYLE GROOMING, LLC.</h5>
            <h6 style={{marginBottom:'3%'}}>213 S. Robertson Blvd, Beverly Hills, CA 90211<br/>424-355-0103<br/>
            groom@henleystyle.com</h6>
            <Link to="/" className="btn">Appoinment <img src="img/icon/w_pawprint.png" alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="adoption-shape"><img src="img/images/adoption_shape.png" alt="" /></div> */}
  </section>
  )
}

export default Appoinment;
