import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


function GoldernBread() {
  return (
    <section className="breadcrumb-area breadcrumb-bg">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb-content">
            <h2 className="title">Golden retriever <br></br>
            Husky <br></br>
            German shepard </h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Golden retriever / Husky / German shepard</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GoldernBread