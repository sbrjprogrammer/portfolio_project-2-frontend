import React from 'react'
import "./courses.css"

function Courses() {
  return (
   
    <div className="container text-center mt-5">
    <p style={{color: '#FF6A6D'}} className="fs-4 fw-bold">Popular Courses</p>
    <h1 style={{color: '#030080'}}>Choose Your Category</h1>
    <div className="row mt-5 d-flex justify-content-center ">
      <div className="col-md-2 icon col-sm-12 col-12 mt-3 mx-3"><i className="fa-regular fa-file-code fa-5x " /><p className="mt-5">Web Development</p></div>
      <div className="col-md-2 icon col-sm-12 col-12 mt-3 mx-3"><i className="fa-solid fa-chart-column fa-5x" /><p className="mt-5">Business</p></div>
      <div className="col-md-2 icon col-sm-12 col-12 mt-3 mx-3"><i className="fa-solid fa-gear fa-5x mt-3" /><p className="mt-5">It Adn Software</p></div>
      <div className="col-md-2 icon col-sm-12 col-12 mt-3 mx-3"><i className="fa-solid fa-pen-ruler fa-5x" /><p className="mt-5">UI Design</p></div>
    </div>
    <div className="row mt-5 d-flex justify-content-center">
      <div className="col-md-2 icon  col-sm-12 col-12 mt-3  mx-3"><i className="fa-solid fa-chalkboard-user fa-5x" /><p className="mt-5">UX design</p></div>
      <div className="col-md-2 icon  col-sm-12 col-12 mt-3  mx-3"><i className="fa-solid fa-people-group fa-5x" /><p className="mt-5">Marketing</p></div>
      <div className="col-md-2 icon col-sm-12 col-12 mt-3 mx-3"><i className="fa-solid fa-photo-film fa-5x" /><p className="mt-5">PhotoGraphy</p></div>
      <div className="col-md-2 icon col-sm-12 col-12 mt-3  mx-3"><i className="fa-solid fa-headphones fa-5x" /><p className="mt-5">Music</p></div>
    </div>
  </div>
  )
}

export default Courses