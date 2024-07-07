import React, { useState } from 'react';
import ContactAddress from './ContactAddress';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') setName(value);
    if (id === 'email') setEmail(value);
    if (id === 'message') setMessage(value);
  };

  // No need for handleSubmit as Web3Forms will handle the form submission

  return (
    <section className="contact-area pt-110 pb-110">
      <div className="container">
        <div className="container-inner-wrap">
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-lg-6 col-md-8 order-2 order-lg-0">
              <div className="contact-title mb-20">
                <h5 className="sub-title">Contact Us</h5>
                <h2 className="title">Let's Discuss your Question<span>.</span></h2>
              </div>
              <div className="contact-wrap-content">
                <p>The domestic dog is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey.</p>
                <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="43955df7-b6b0-4441-9a3a-67a317767eef" />
                  <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                  <input type="hidden" name="from_name" value="Newport Pet Grooming and spa"/>

                  <div className="form-grp">
                    <label htmlFor="name">Your Name <span>*</span></label>
                    <input type="text" id="name" name="name" placeholder="Jon Doe..." value={name} onChange={handleChange} required />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="email">Your Email <span>*</span></label>
                    <input type="email" id="email" name="email" placeholder="info@example.com" value={email} onChange={handleChange} required />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="message">Your Message <span>*</span></label>
                    <textarea id="message" name="message" placeholder="Your message..." value={message} onChange={handleChange} required></textarea>
                  </div>
                  <div className="form-grp checkbox-grp">
                    <input type="checkbox" id="checkbox" name="hide_email" style={{ display: 'none' }} value="yes" />
                  </div>
                  <button type="submit" className="btn rounded-btn">Send Now</button>
                </form>
              </div>
            </div>

              <ContactAddress/>

            </div>
          </div>
        </div>
    </section>
  );
}

export default ContactForm;
