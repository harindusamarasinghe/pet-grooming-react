import React from 'react';
import {Link} from 'react-router-dom';
import background from '../../img/bg/breadcrumb.jpg'

function TidyBread() {
  return (
	  <section className="breadcrumb-area breadcrumb-bg" style={{ backgroundImage:`url(${background})`}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">Bath and Brush Packages </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Bath and Brush Packages</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
export default TidyBread;
