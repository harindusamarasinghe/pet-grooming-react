import React from 'react';

function ContactAddress() {
  return (
	  	<div className="col-xl-5 col-lg-6 col-md-8">
                <div className="contact-info-wrap">
                  <div className="contact-img">
                    <img src="img/images/contact_img.png" alt="" />
                  </div>
                  <div className="contact-info-list">
                    <ul>
                      <li>
                        <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                        <div className="content">
                          <p>1916 Harbor Blvd, Costa Mesa, CA 92627</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><i className="fas fa-phone-alt" /></div>
                        <div className="content">
                          <p>(949) 500-1765</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><i className="fas fa-envelope-open" /></div>
                        <div className="content">
                          <p>happypaws@nodspa.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="contact-social">
                  <ul>
                  <li><a href="https://www.yelp.com/biz/newport-doggy-spa-costa-mesa"><i className="fab fa-yelp" /></a></li>
                  <li><a href="https://www.instagram.com/newport_doggy_spa/"><i className="fab fa-instagram" /></a></li>
                  <li><a href="https://g.co/kgs/yQD43xG"><i className="fab fa-google" /></a></li>
                </ul>
                  </div>
                </div>
              </div>

  )
}

export default ContactAddress;
