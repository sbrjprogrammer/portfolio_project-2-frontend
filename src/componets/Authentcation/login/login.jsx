import React, { useState } from 'react';
import './login.css'; // Import CSS file
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import "./login.css"

const Login = () => {

  let [error,seterror]=useState(false)
  let [formData,setFormData]= useState({})
console.log(formData)
console.log(formData.email)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(formData.email==0||formData.password==0){
      return seterror(true)
    }
    
try {
  let response = await axios.post("/user/login",formData)
    // headers: {
    //   Authorization: `Basic ${token}`
    // }
    if(response.data.message==="login suceessfully"){
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
      <h4>Login</h4>
      <label htmlFor="email">Email</label>

      
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={(e)=>setFormData({...formData,email:e.target.value})}

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
           { error&&formData.password.length<=0 ? <label style={{color:"red"}}>
        please filled this input
      </label>:" "}


      <button className='btn button' type="submit">Log in</button>
     
    </form>
    
  );
};

export default Login;
