import React from 'react'
import img1 from "../../assets/record1.webp"
import img2 from "../../assets/record2.webp"
import img3 from "../../assets/record3.webp"
import img4 from "../../assets/record4.webp"

function Record() {
  return (
          
          <div className="container mt-5 pt-5">
          <div className="row mt-5">
            <div className="col-md-3 text-center">
              <img src={img1} alt="" />
              <h1 style={{color: '#030080'}}>600+</h1>
              <p className="b-5" style={{color: '#030080', fontWeight: 500}}>Topic Learned</p>
            </div>
            <div className="col-md-3 text-center">
              <img src={img2} alt="" />
              <h1 style={{color: '#030080'}}>3480+</h1>
              <p className="b-5" style={{color: '#030080', fontWeight: 500}}>Student Genius</p>
            </div>
            <div className="col-md-3 text-center">
              <img src={img3}alt="" />
              <h1 style={{color: '#030080'}}>15900+</h1>
              <p className="b-5" style={{color: '#030080', fontWeight: 500}}>Test Taken thats a lot</p>
            </div>
            <div className="col-md-3 text-center">
              <img src={img4} alt="" />
              <h1 style={{color: '#030080'}}>270+</h1>
              <p className="b-5" style={{color: '#030080', fontWeight: 500}}>Instructor ALL Learned</p>
            </div>
          </div>
          </div>
      );
  
}

export default Record