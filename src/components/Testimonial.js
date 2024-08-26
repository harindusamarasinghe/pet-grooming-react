import React from 'react';
import Slider from 'react-slick'
import girlAvatar from "../img/images/portrait-3d-female-doctor.jpg"
import boyAvatar from "../img/images/androgynous-avatar-non-binary-queer-person.jpg"

function Testimonial() {
  const settings = {
    dots: true,
	infinite: true,
	speed: 4000,
	autoplay: false,
	arrows: false,
	autoplaySpeed: 4000,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 1000,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				speed: 1000,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				speed: 1000,
			}
		},
	]
  }
  return (
      <section className="testimonial-area testimonial-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-65">
                <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
                <h5 className="sub-title">Testimonials</h5>
                <h2 className="title">Our Happy Customers</h2>
              </div>
            </div>
          </div>
          <Slider className="row testimonial-active"{...settings}>
            <div className="col">
              <div className="testimonial-item">
                <div className="testi-avatar-thumb">
                  <img src={girlAvatar} alt="" />
                </div>
                <div className="testi-content">
                  <p>“ Everyone is Very sweet and good with dogs here and they take their time to do the perfect cut
My dog is very scared to the sound of the trimmers but they're really patient with him and everytime he goes he feels more secure and less scared.
They also use very clean and organic products.
I highly recommend this place.
Nathaly is amazing
Just book in advance, sometimes they're fully booked for days !!!”</p>
                  <div className="testi-avatar-info">
                    <h5 className="title">Nathaly A.</h5>
                    <span>A Happy Customer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="testi-avatar-thumb">
                  <img src={boyAvatar} alt="" />
                </div>
                <div className="testi-content">
                  <p>“The new owners and groomer has been great! Had both my dogs (yorkie & poodle mix) groomed and they did a good job. My dogs had some matted fur so we cut a bit shorter to avoid distress. I appreciate their care to my dogs here!!
2nd visit was for bath, nail trim and glands. Great job, dogs were happy, looked and smelled good!
2 visits with new ownership
”</p>
                  <div className="testi-avatar-info">
                    <h5 className="title">Alessia Cara</h5>
                    <span>A Happy Customer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="testi-avatar-thumb">
                  <img src={girlAvatar} alt="" />
                </div>
                <div className="testi-content">
                  <p>“ I'm in town visiting from Seattle with my corgi Mollie. Mollie needed a bath and trim from the stress of flying. Newport Doggy spa and Kema were recommended to me, and I couldn't be more pleased. Mollie can be a bit difficult bathing and nail trimming, and the patience and care that was given to my rascal is unmatched. Mollie looked, smelled and felt so fresh and so clean. Everyone was so nice and accommodating. Will definitely be taking mollie back before we head back, and would take her here regularly if I lived down here. ”</p>
                  <div className="testi-avatar-info">
                    <h5 className="title">Kiara B.</h5>
                    <span>A Happy Customer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="testi-avatar-thumb">
                  <img src={boyAvatar} alt="" />
                </div>
                <div className="testi-content">
                  <p>“Took my two Great Danes in last minute for a full grooming and they did an awesome job. They have a pretty big open area for them to wait in (rather than kennels, which matters for Danes) and the staff was super friendly, knowledgable, and asked a lot of questions so they made sure to get it right. I will definitely be back.”</p>
                  <div className="testi-avatar-info">
                    <h5 className="title">Jason F.</h5>
                    <span>A Happy Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
  )
}

export default Testimonial;
