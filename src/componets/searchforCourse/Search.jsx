import React from 'react'
import img1 from "../../assets/27-1.png"
import img3 from "../../assets/29-1.png"
import img2 from "../../assets/28-1.png"

function Search() {
  return (
    <div className="container-fluid borderDesign mt-5 pt-5" style={{backgroundColor: '#F8F5F1'}}>
    <div className="container">
      <div className="row text-center">
        <div className="col-md-4"><img src={img1} alt="" />
          <h3 className="mt-5 pt-5" style={{color: '#030080'}}><span style={{color: '#FF6A6D'}}>01.</span>Search for Course</h3>
          <p style={{color: '#030080'}}>Lorem ipsum dolor sit amet, consectetur <br /> 
            adipisicing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna.</p>
        </div>
        <div className="col-md-4"><img src={img2} alt="" />
          <h3 className="mt-5 pt-5" style={{color: '#030080'}}><span style={{color: '#FF6A6D'}}>02.</span>Learn Anything</h3>
          <p style={{color: '#030080'}}>Lorem ipsum dolor sit amet, consectetur <br /> 
            adipisicing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna.</p></div>
        <div className="col-md-4"><img src={img3} alt="" />
          <h3 className="mt-5 pt-5" style={{color: '#030080'}}><span style={{color: '#FF6A6D'}}>03.</span>Get Certified</h3>
          <p style={{color: '#030080'}}>Lorem ipsum dolor sit amet, consectetur <br /> 
            adipisicing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Search