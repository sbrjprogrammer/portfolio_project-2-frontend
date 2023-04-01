import React, { useState } from 'react';
import axios from 'axios';
import "./singup.css";
import Cookies from 'js-cookie';


const Signup = () => {

  let [error,seterror]=useState(false)
  let [formData,setFormData]= useState({})
// console.log(formData.name.length)
  

const handleSubmit = async (event) => {
    event.preventDefault();

    if(formData.name==0||formData.email==0||formData.password==0){
      seterror(true)
    }
try {
  let response = await axios.post("/user/register",formData)
    // headers: {
    //   Authorization: `Basic ${token}`
    // }
    if(response.data.message==="user register"){
      Cookies.set("token2","khjdhskdhsk",{expires:1})
    }

  
  alert(response.data.message)

  window.location.reload()
} catch (err) {
  alert(err.response.data.user)
}


  };

  return (
    <form onSubmit={handleSubmit} className="login-form">

<label htmlFor="email">Name</label>

      
<input
  type="text"
  id="name"
  value={formData.name}
  onChange={(e)=>setFormData({...formData,name:e.target.value})}
  required
/>
{ error&&formData.name.length<=0 ? <label style={{color:"red"}}>
        please filled this input
      </label>:" "}





      <label htmlFor="email">Email</label>

      
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={(e)=>setFormData({...formData,email:e.target.value})}
        required
      />
         { error&&formData.email.length<=0 ? <label style={{color:"red"}}>
        please filled this input
      </label>:" "}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={(e)=>setFormData({...formData,password:e.target.value})}
        required
      />
         { error&& formData.password.length<=0 ? <label style={{color:"red"}}>
        please filled this input
      </label>:" "}


      <button className='btn-primary button' type="submit">Signup</button>
    </form>
  );
};

export default Signup;
