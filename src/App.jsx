import React,{useState,useEffect} from "react";

import Home from "./pages/Home";
import "./App.css"
import Header from "./componets/header/Header";
import { Route,Routes } from "react-router-dom";
import { PrivateRouter } from "./utils/PrivateRouter";
import Cookies from 'js-cookie';
import About from "./pages/About";


import SignupModel from "./componets/ModelCom/Signupmodel";

function App() {
  // let [item, setitem] = useState('')
  // let [list,setlist]=useState([])
  // console.log(item)
  // console.log(list)
  // let add =()=>{
  //   if(list.includes(item)){
  //      return alert("value already exist")
  //   }
  //   setlist([...list,item])
  //   setitem("")
  // }
  // const remove=(ind)=>{
  //   let arr = [...list]
  //   arr.splice(ind,1)
  //   setlist(arr)

  
let token=Cookies.get('token2')



  

  return (
  // <div className="listRender">
  //   {/* <Home/> */}
  //   <input type="text" value={item} onChange={(e)=>setitem(e.target.value)} />
  //   <button onClick={add}> set value</button>

  //   {list.map((v,i)=>{
  //     return <li key={i}>{v} <button onClick={()=>remove(i)}>remove</button></li>

  //   })}
  // </div>
  <div>
    <Header/>
  <Routes>
    <Route element={<PrivateRouter token={token}/>}>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
    </Route>
    <Route axact path="/signup" element={<SignupModel/>}/>
    </Routes>
  </div>
   
   
  );
}



export default App;
