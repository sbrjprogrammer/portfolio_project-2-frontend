import React from 'react'
import mobile from "../../assets/mobile.webp"

function Appfeature() {
  return (


    <div className="container mt-5 pt-5">
    <h4 className="text-center" style={{color: '#FF6A6D'}}>Mobile LMS App</h4>
    <h1 className="text-center" style={{color: '#030080'}}>New App Features</h1>
    <div className="row mt-5 pt-5">
      <div className="col-md-4 col-12 col-sm-12">
        <div className="d-flex">
          <span className="mt-3 px-4 mx-3 mobileIcon"><i className="fa-solid fa-chalkboard-user fa-3x" /></span>
          <span>
            <p>
            </p><h6 style={{color: '#030080'}}> Bookmark Fav Courses </h6>
            <span style={{opacity: '0.6'}}>   Lorem ipsum dolorsit</span>
            <p />
          </span>
        </div>
        <div className="d-flex mt-5">
          <span className="mt-3 px-4 mx-3  mobileIcon"><i className="fa-solid fa-people-group fa-3x" /></span>
          <span>
            <p>
            </p><h6 style={{color: '#030080'}}> 
              Video Demonstration </h6>
            <span style={{opacity: '0.6'}}>   Lorem ipsum dolorsit</span>
            <p />
          </span>
        </div>
        <div className="d-flex mt-5">
          <span className="mt-3 px-4 mx-3  mobileIcon"><i className="fa-solid fa-photo-film fa-3x" /></span>
          <span>
            <p>
            </p><h6 style={{color: '#030080'}}> 
              Live Chats</h6>
            <span style={{opacity: '0.6'}}>   Lorem ipsum dolorsit</span>
            <p />
          </span>
        </div>
        <div className="d-flex mt-5">
          <span className="mt-3 px-4 mx-3  mobileIcon"><i className="fa-sharp fa-solid fa-calendar-days fa-3x" /></span>
          <span>
            <p>
            </p><h6 style={{color: '#030080'}}> 
              Varied Syllabus</h6>
            <span style={{opacity: '0.6'}}>   Lorem ipsum dolorsit</span>
            <p />
          </span>
        </div>
      </div>
      <div className="col-md-4 col-12 col-sm-12 text-center mt-5">
        {/* <img style="" src="./images/16 (1).webp" alt=""> */}
        <img className="img-fluid" src={mobile} alt="" />
        <button type="button" className="btn btn-primary btn-lg rounded-pill mt-5 buttn4">Download App</button>
      </div>
      <div className="col-md-4 col-sm-12 col-12 ">
        <div className="d-flex">
          <span>
            <p>
            </p><h6 style={{color: '#030080'}}> App Access </h6>
            <span style={{opacity: '0.6'}}>   Lorem ipsum dolorsit</span>
            <p />
          </span>
          <span className="mt-3 px-4 mx-3 mobileIcon"><i className="fa-solid fa-chalkboard-user fa-3x" /></span>
        </div>
        <div className="d-flex mt-5">
          <span>
            <p>
            </p><h6 style={{color: '#030080'}}> Permanents Address </h6>
            <span style={{opacity: '0.6'}}>   Lorem ipsum dolorsit</span>
            <p />
          </span>
          <span className="mt-3 px-4 mx-3 mobileIcon"><i className="fa-solid fa-people-group fa-3x" /></span>
        </div>
        <div className="d-flex mt-5">
          <span>
            <p>
            </p><h6 style={{color: '#030080'}}> Book Quality </h6>
            <span style={{opacity: '0.6'}}>   Lorem ipsum dolorsit</span>
            <p />
          </span>
          <span className="mt-3 px-4 mx-3 mobileIcon"><i className="fa-solid fa-photo-film fa-3x" />&gt;</span>
        </div>
        <div className="d-flex mt-5">
          <span>
            <p>
            </p><h6 style={{color: '#030080'}}> Courses of All Access </h6>
            <span style={{opacity: '0.6'}}>   Lorem ipsum dolorsit</span>
            <p />
          </span>
          <span className="mt-3 px-4 mx-3 mobileIcon"><i className="fa-sharp fa-solid fa-handshake fa-3x" /></span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Appfeature