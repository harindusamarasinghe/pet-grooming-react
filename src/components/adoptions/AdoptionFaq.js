import React from 'react';

function AdoptionFaq() {
  return (

	  <section className="faq-area faq-two-bg">
        <div className="faq-two-img" />
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-6">
              <div className="faq-wrapper">
                <div className="section-title white-title mb-35">
                  <h5 className="sub-title">ABOUT US</h5>
                  <h2 className="title">Why Choose Us?</h2>
                  <p style={{color:'white', fontSize:'14px'}}>Choosing Newport Doggy Spa means choosing a team that truly cares about your pet’s well-being. Our personalized approach, attention to detail, and commitment to creating a positive grooming experience set us apart. We take the time to understand your pet’s specific needs and work to make each grooming session enjoyable and stress-free.</p>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Quality Pet Care
                        </button>
                      </h2>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                      For over 6 years, Newport Doggy Spa has been serving the pets and families of our local area. We love caring and connecting with animals and creating everlasting relationships. We provide care for your fur baby as if they were our own, and ensure that they receive the highest quality of care while you're away.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Our Commitment
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                      We are committed to providing the highest standard of grooming care while building lasting relationships with our clients and their pets. Our dedication to excellence means we continually strive to improve our services and stay ahead of industry trends to ensure we offer the best for your furry friends.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Join Our Family
                        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                      We invite you to experience the difference at Newport Doggy Spa. Whether you’re a first-time visitor or a long-time client, we look forward to welcoming you and your pet into our grooming family. Let us show you how quality grooming can make a positive impact on your pet’s life.
Thank you for considering us for your pet’s grooming needs. We’re excited to meet you and your furry friend soon!
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

export default AdoptionFaq;
