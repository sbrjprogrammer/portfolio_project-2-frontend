import React from 'react'
import sofa from "../../assets/sofa.png"

function AwardCourses() {
  return (
    <div className="container-fluid mt-5 pb-5 pt-5 borderDesign" style={{backgroundColor: '#F5EEE6'}}>
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 style={{color: '#030080'}}>Learn with these Award <br />
            Winning Courses</h1>
          <div className="goi mt-5 p-5" style={{backgroundColor: '#FAF7F3'}}>
            <h5 style={{color: '#FF6A6D'}}>Great Online Instructor</h5>
            <hr />
            <p className="mt-5" style={{color: '#030080'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />
              magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
              exercitation ullamco laboris nisi ut aliquip ex ea aliqua  <br />
              consequat elit.</p>
          </div>
          <div className="scolm px-5 mt-1 py-2"><p style={{color: '#030080'}}>Get Learny Certified Awards</p></div>
          <div className="scolm px-5 py-2 mt-1"><p style={{color: '#030080'}}>Exclusive Course Material</p></div>
          <div className="scolm px-5 py-2 mt-1"><p style={{color: '#030080'}}>In dept-Course Analysis</p></div>
        </div>
        <div className="col-md-6 sofa">
          <img className="img-fluid" src={sofa} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AwardCourses