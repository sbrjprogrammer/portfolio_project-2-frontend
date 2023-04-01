import React from 'react'
import Login from '../Authentcation/login/login'
import {Modal,ModalHeader,ModalBody} from "reactstrap"

function Model({value,setvalue}) {
  return (
   
    <div>
      <Modal size='lg' isOpen={value} toggle={()=>setvalue(false)}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <Login/>
        </ModalBody>
      </Modal>


    </div>
   
  )
}

export default Model