import React from 'react'
import "./pricing.css"

function Pricing() {
  return (
    <div className="container-fluid mt-5 priceHeight" style={{backgroundColor: '#5D00C4'}}>
    <div className="container">
      <div className="row  text-center mt-4">
        <div className="col-md-4 mt-5 cardpricing">
          <div className="priceCircle mt-5" style={{color: '#5920C6'}}><h1>$99</h1>
            <h5>Per Month</h5>
          </div>
          <h1 style={{color: '#030080'}} className="mt-5">Basic</h1>
          <p style={{color: '#030080'}} className="mt-5">
            Great Online Instructors <br />
            Get Learny Certified Awards <br />
            Exclusive Course Materials 
          </p><div style={{opacity: '0.5'}}>
            <s>  In  depth Course Analysis</s> <br />
            <s>Get Learny Certified Awards</s> <br />
            <s> In depth Course Analysis</s>
          </div>
          <p />
          <button style={{backgroundColor: '#030080', color: 'white'}} type="button" className="btn btn-primary btn-lg rounded-pill mt-5 mb-5 text-center">Order Now</button>
        </div>
        <div className="col-md-4 mt-5 shadow cardpricing">
          <div className="priceCircle mt-5"><h1>$399</h1>
            <h5>Per Month</h5>
          </div>
          <h1 style={{color: '#030080'}} className="mt-5">Premium</h1>
          <p style={{color: '#030080'}} className="mt-5">
            Great Online Instructors <br />
            Get Learny Certified Awards <br />
            Exclusive Course Materials <br />
            In  depth Course Analysis <br />
            Get Learny Certified Awards <br />
            In depth Course Analysis
          </p>
          <button style={{backgroundColor: '#030080', color: 'white'}} type="button" className="btn btn-primary btn-lg rounded-pill mt-5 mb-5 text-center">Order Now</button>
        </div>
        <div className="col-md-4 mt-5 cardpricing">
          <div className="priceCircle mt-5 "><h1>$299</h1>
            <h5>Per Month</h5>
          </div>
          <h1 style={{color: '#030080'}} className="mt-5">Standard</h1>
          <p style={{color: '#030080'}} className="mt-5">
            Great Online Instructors <br />
            Get Learny Certified Awards <br />
            Exclusive Course Materials 
          </p><div style={{opacity: '0.5'}}>
            In  depth Course Analysis <br />
            <s>Get Learny Certified Awards</s> <br />
            <s> In depth Course Analysis</s>
          </div>
          <p />
          <button style={{backgroundColor: '#030080', color: 'white'}} type="button" className="btn btn-primary btn-lg rounded-pill mt-5 mb-5 text-center">Order Now</button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Pricing