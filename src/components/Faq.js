import React,{ useEffect } from 'react';
import 'magnific-popup';
import $ from 'jquery';
import {Link} from 'react-router-dom'



function Faq({ afterElment }) {
  useEffect(()=>{


     /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

  },[])

  
  return (

    <section className={afterElment + " faq-bg"}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="faq-img-wrap">
            <img src="img/images/faq_tv.png" className="img-frame" alt="" />
            <img src="img/images/faq_img.png" className="main-img" alt="" />
            <Link to="/https://www.youtube.com/watch?v=XdFfCPK5ycw" className="popup-video" > </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="faq-wrapper">
            <div className="section-title mb-35">
              <h5 className="sub-title">FAQ Question</h5>
              <h2 className="title">Everything You Need to Know</h2>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How often should I groom my pet?
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                  Grooming frequency depends on the breed and individual needs. Regular grooming is recommended every 4-6 weeks.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What if my pet has specific allergies?
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                  Inform our groomers about any allergies during the appointment booking. We use hypoallergenic products upon request.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Can I stay with my pet during grooming?
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                  For the comfort of both pets and groomers, we encourage owners to drop off their pets and return for pickup.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="faq-shape"><img src="img/images/faq_shape.png" alt="" /></div>
  </section>
  )
}

export default Faq;
