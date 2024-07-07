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
                      For over 20 years, Henley has been serving the pets and families of our local area. We love caring and connecting with animals and creating everlasting relationships. We provide care for your fur baby as if they were our own, and ensure that they receive the highest quality of care while you're away. 
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Reliable And Trustworthy Caretakers
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                      When you live a busy life, it is hard to consistently provide the attention and care that your pets can demand. With years of satisfied owners and loved pets, you can rely on us to make sure your pet is pampered and loved.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Satisfaction Guranteed
                        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                      We are always prepared for any pet's needs and ensure that your pet will receive the best care and love. Their happiness and care is our top priority and we strive to provide services that we personally would want and expect our own pets to receive.
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
