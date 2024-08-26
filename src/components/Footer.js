import React from "react";
import logo from "../img/logo/Logo transparent.png"
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <footer>
    <div className="footer-top-area footer-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-3">
            <div className="footer-widget">
              <div className="f-logo">
                <Link to="/"><img src={logo} alt="" style={{height:'170px'}} /></Link>
                
              </div>
              {/* <div className="footer-text">
                <p>The best overall dog DNA test Embark Breed &amp; Health Kit (view at Chewy) which provides overall dog you.</p>
              </div> */}
              <div className="footer-contact">
                <div className="icon"><i className="fas fa-headphones" /></div>
                <div className="content">
                  <h4 className="title"><a href="tel:+19495001765">(949) 500-1765</a></h4>
                  <span>Call Now</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="footer-widget">
              <h4 className="fw-title">Our Services</h4>
              <div className="fw-link">
                <ul>
                  <li><Link to="/bath-details">Bath & Brush</Link></li>
                  <li><Link to="/full-details">Full Service</Link></li>
                  <li><Link to="/combination-details">Combination</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-social">
                <ul>
                  <li><a href="https://www.yelp.com/biz/newport-doggy-spa-costa-mesa"><i className="fab fa-yelp" /></a></li>
                  <li><a href="https://www.instagram.com/newport_doggy_spa/"><i className="fab fa-instagram" /></a></li>
                  <li><a href="https://g.co/kgs/yQD43xG"><i className="fab fa-google" /></a></li>
                </ul>
              </div>
          
        </div>
      </div>
      <div className="footer-shape"><img src="img/images/footer_shape01.png" alt="" /></div>
      <div className="footer-shape shape-two"><img src="img/images/footer_shape02.png" alt="" /></div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="copyright-text">
              <p>Copyright © 2024 Pet grooming. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer;
