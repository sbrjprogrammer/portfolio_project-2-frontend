import React from 'react'
import "./form.css"

function Forms() {
  return (
    <div>
        {/* conatact form */}
        <div className="container-fluid" style={{backgroundColor: '#F8F5F1'}}>
          <div className="container mt-5 pt-5 text-center">
            <h6 style={{color: '#FF6A6D'}}>Contact us </h6>
            <h1 style={{color: '#030080'}}>Get In touch</h1>
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-4 col-sm-6 ">
                <input type="text" className="input shadow" placeholder="Name" />
              </div>
              <div className="col-md-4 col-sm-6">
                <input type="email" className="input shadow" placeholder="Email" />
              </div>
              <div className="col-md-2" />
            </div>
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-4">
                <input type="text" className="input shadow" placeholder="Name" />
              </div>
              <div className="col-md-4">
                <input type="email" className="input shadow" placeholder="Email" />
              </div>
              <div className="col-md-2" />
            </div>
            <div className="row">
              <div className="col-md-12 col-12 col-sm-8 text-center">
                <textarea className="text-area shadow-lg" name="message" id cols={55} rows={10} placeholder="Message" defaultValue={"                \n              "} />
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg rounded-pill mt-5 mb-5 text-center buttn7">Send Message</button>
          </div>
        </div>
        {/* footer */}
        <div className="container-fluid" style={{backgroundColor: '#7E1CCF'}}>
          <div className="container text-light mt-5 pt-5">
            <div className="row ">
              <div className="col-md-4 text-center mt-5">
                <i className="fa-solid fa-location-dot fa-4x" style={{color: 'white'}}>  </i>
                <h6 className="pt-3">Adress</h6>
                <p>908 New Hampshire Avenue <br />
                  Northwest #100</p>
              </div>
              <div className="col-md-4 text-center mt-5">
                <i className="fa-sharp fa-solid fa-envelope fa-4x" style={{color: 'white'}} />
                <h6 className="pt-3">Adress</h6>
                <p>908 New Hampshire Avenue <br />
                  Northwest #100</p>
              </div>
              <div className="col-md-4 text-center mt-5">
                <i className="fa-solid fa-phone fa-4x" style={{color: 'white'}} />
                <h6 className="pt-3">Adress</h6>
                <p>908 New Hampshire Avenue <br />
                  Northwest #100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Forms