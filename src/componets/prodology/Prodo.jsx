import React from 'react'
import "./prodo.css"
import img6 from '../../assets/6.png'
import img9 from '../../assets/3.webp'
import img3 from '../../assets/9.png'
import img7 from '../../assets/7.png'

function Prodo() {
  return (
    <div className="container-fluid mt-5 pt-5">
    <div className="row m-auto d-flex justify-content-center">
      <div className="col-md-6 col-sm-12 col-12 imghid ">
        <img className="img1 img-fluid" src={img6} alt="" />
        <img className="img2 img-fluid" src={img9} alt="" />
        <img className="img3 img-fluid" src={img3} alt="" />
        <img className="img4 img-fluid" src={img7} alt="" />
      </div>
      <div className="col-md-6 content2nd col-12 col-sm-12">
        <h1 className="mt-5 pt-5">The Prodigious eLearning <br /> Courses for you</h1>
        <p className="mt-5 pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
          <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in ipsum <br />
          reprehenderit in voluptate velit esse cillum dolore.</p>
        <button className="buttn3">Discover New Courses</button>
      </div>
    </div>
  </div>
  )
}

export default Prodo