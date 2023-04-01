import React from 'react'
import blog1 from  "../../assets/blog1.jpg"
import blog2 from  "../../assets/blog2.jpg"
import blog3 from  "../../assets/blog3.jpg"

function Enroll() {
  return (
    <div>
        {/* enroll now */}
        <div className="container mt-5 pt-5">
          <div className="row mt-5 pt-5">
            <div className="col-md-12  text-center">
              <p style={{color: '#FF6A6D', fontWeight: 600}}>Start a Journey</p>
              <h1 style={{fontSize: '6rem', color: '#030080'}}>Enroll Now!</h1>
              <h3 className="mt-5" style={{color: '#030080'}}>Learn Something Wheraver You are</h3>
              <button type="button" className="btn btn-primary btn-lg rounded-pill mt-5 mb-5 p-4 text-center border-0 buttn6">Join A course Now</button>
            </div>
          </div>
        </div>
        {/* blog */}
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col borderRound">
              <div className="card h-100">
                <img src={blog3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title mt-5" style={{color: '#030080'}}>Orientation Program For The New Students</h5>
                  <p style={{color: '#030080'}} className="card-text mt-3">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor
                    incididunt labore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={blog1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title mt-5" style={{color: '#030080'}}>Mis In Day To Day Management Of Projects</h5>
                  <p style={{color: '#030080'}} className="card-text mt-3">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor
                    incididunt labore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={blog2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 style={{color: '#030080'}} className="card-title mt-5">The Changing Scenario In Music Industry</h5>
                  <p style={{color: '#030080'}} className="card-text mt-3">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor
                    incididunt labore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Enroll