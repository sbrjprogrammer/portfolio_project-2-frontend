import React,{useState} from 'react'
import "./header.css"
import img from "../../assets/logo.png"
import img2 from "../../assets/2 (1).webp"
import Model from '../ModelCom/Model'
import SignupModel from '../ModelCom/Signupmodel'
import {Modal,ModalHeader,ModalBody} from "reactstrap"
import Cookies from 'js-cookie'

 

function Header() {
   let [value, setvalue] = useState(false)
   let [value2, setvalue2] = useState(false)


   let token =  Cookies.get("token2")

 let logout = ()=>{
Cookies.remove('token2')
window.location.reload()
 }
  

return (
    <div className="gradient img-fluid">
        {/* navbar */}
         <Model value={value} setvalue={setvalue}/>
         <SignupModel  value={value2} setvalue={setvalue2}/>
        {/* {Modal &&  <div>
      <Modal size='lg' isOpen={value} toggle={()=>setvalue(false)}>
        <ModalHeader>Modal</ModalHeader>
        <ModalBody>
          this is Modal
        </ModalBody>
      </Modal>


    </div>} */}
        <div className="container-fluid nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light text-center p-3">
              <div className="container-fluid">
                <img className="logo" src={img} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav justify-content-end ">
                     <li className="nav-item mx-4 ps-4">
                      <a className=" link" aria-current="page" href="#"></a>
                    </li> 
                    <li className="nav-item mx-4">
                      <a className=" link" aria-current="page" href="#"></a>
                    </li>
                    <li className="nav-item mx-4">
                      <a className=" link" aria-current="page" href="#"></a>
                    </li>
                    <li className="nav-item mx-4">
                      <a className=" link" aria-current="page" href="#"></a>
                    </li>
                    <li className="nav-item mx-4">
                      <a className=" link" aria-current="page" href="#"></a>
                    </li>
                    <li className="nav-item mx-4">
                      <a className=" link" aria-current="page" href="#"></a>
                    </li>
                    <li className="nav-item mx-4">
                      <a className=" link" aria-current="page" href="#"></a>
                    </li>
                    <li className="nav-item mx-4">
                      <a className=" link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item mx-4">
                      <a className=" link" aria-current="page" href="./about">About</a>
                    </li> 
                    <li className="nav-item mx-4">
                    {token?(<a onClick={logout}  className=" link" aria-current="page" href="#">logout</a>):<a onClick={()=>setvalue(true)} className=" link" aria-current="page" href="#">login</a>}
                    </li>
                    <li className="nav-item mx-4">
                    <a onClick={()=>setvalue2(true)} className=" link" aria-current="page" href="#">Sigup</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>


        
      <div className="container marginheader">
        <div className="row marginheader">
          <div className="col-md-8 col-sm-12 col-12 text-light fz">
            <h1>Enroll Now &amp; Learn</h1>
            <h2> Get Access For Award Winning <br /> Online Course</h2>
            <p>Manage Track and Acheive your corporate learning Goals <br /> with TheGem LMS</p>
            <button className="buttn">All Courses</button>
            <button className="buttn1">Signup for Free</button>
          </div>
          <div className="col-md-4 col-sm-12 col-12 himg mt-3">
            <img className="img-fluid" src={img2} alt="" />
          </div>
        </div>
      </div>
      </div>

      
  )
}

export default Header