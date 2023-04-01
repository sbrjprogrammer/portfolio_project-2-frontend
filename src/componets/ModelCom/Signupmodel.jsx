import React,{useState} from 'react'
import Login from '../Authentcation/login/login'
import Signup from '../Authentcation/register/Signup.jsx'
import {Modal,ModalHeader,ModalBody} from "reactstrap"

function SignupModel({value,setvalue}) {

   
  return (
   
    <div>
      <Modal size='lg' isOpen={value} toggle={()=>setvalue(false)}>
        <ModalHeader>Signup</ModalHeader>
        <ModalBody>
          <Signup/>
        </ModalBody>
      </Modal>


    </div>
   
  )
}

export default SignupModel