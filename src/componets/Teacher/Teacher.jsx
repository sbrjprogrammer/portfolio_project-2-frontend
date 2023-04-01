import React,{useEffect,useState} from 'react'
import "./Teacher.css"
import scot from "../../assets/scot.jpg"
import ava from "../../assets/ava.jpg"
import jackei from "../../assets/jackei.jpg"
 import mel from "../../assets/mel.jpg"
 import herman from "../../assets/herman.jpg"
 import casandra from "../../assets/casandra.jpg"
 import axios from 'axios'

function Teacher() {
 let [data,setdata] = useState([])
 console.log(data)
  useEffect(() => {
    axios.get("/teacher")
    .then((res)=>setdata(res.data.teachers))
    .catch((err)=>console.log(err.message))
    
    
  }, [])


  console.log(data)
  return (
<div className="container">
        <div className="row mt-5 d-flex justify-content-center">

          {data.map((value,index)=>{
            return  <div className="col-md-3 col-sm-12 col-12 p-4 mx-4 mt-1 cardteacher d-flex">
            <div className="iconImge">
              <img src={value.image} alt="" />
            </div>
            <div className="px-2">
              <h6 style={{color: '#030080'}}>{value.name}</h6>
              <p style={{opacity: '0.5'}}>consultant</p>
              <p style={{color: '#FF6A6D'}}>{value.phone}</p>
              <i style={{color: '#FF6A6D'}} className="fa-regular fa-envelope" /><span style={{color: '#FF6A6D', opacity: '0.7'}}>{value.email}</span>
            </div>
          </div>
          })}
          {/* <div className="col-md-3 col-sm-12 col-12 p-4 mx-4 mt-1 cardteacher d-flex">
            <div className="iconImge">
              <img src={scot} alt="" />
            </div>
            <div className="px-2">
              <h6 style={{color: '#030080'}}>{}</h6>
              <p style={{opacity: '0.5'}}>consultant</p>
              <p style={{color: '#FF6A6D'}}>{}</p>
              <i style={{color: '#FF6A6D'}} className="fa-regular fa-envelope" /><span style={{color: '#FF6A6D', opacity: '0.7'}}>{}</span>
            </div>
          </div> */}








          {/* <div className="col-md-3 col-sm-12 col-12 p-4 mx-4 mt-1   cardteacher d-flex">
            <div className="iconImge">
              <img src={ava} alt="" />
            </div>
            <div className="px-2">
              <h6 style={{color: '#030080'}}>Scott Jackson</h6>
              
              <p style={{color: '#FF6A6D'}}>+1 (987)1625346</p>
              <i style={{color: '#FF6A6D'}} className="fa-regular fa-envelope" /><span style={{color: '#FF6A6D', opacity: '0.7'}}>infoDomain@tld</span>
            </div>
          </div> */}
          {/* <div className="col-md-3 col-sm-12 col-12 p-4 mx-4 mt-1   cardteacher d-flex">
            <div className="iconImge">
              <img src={jackei} alt="" />
            </div>
            <div className="px-2">
              <h6 style={{color: '#030080'}}>Scott Jackson</h6>
              <p style={{opacity: '0.5'}}>consultant</p>
              <p style={{color: '#FF6A6D'}}>+1 (987)1625346</p>
              <i style={{color: '#FF6A6D'}} className="fa-regular fa-envelope" /><span style={{color: '#FF6A6D', opacity: '0.7'}}>infoDomain@tld</span>
            </div>
          </div> */}
        </div>
        {/* <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-3 col-sm-12 col-12 p-4 mx-4 mt-1  cardteacher d-flex">
            <div className="iconImge">
              <img src={mel} alt="" />
            </div>
            <div className="px-2">
              <h6 style={{color: '#030080'}}>Scott Jackson</h6>
              <p style={{opacity: '0.5'}}>consultant</p>
              <p style={{color: '#FF6A6D'}}>+1 (987)1625346</p>
              <i style={{color: '#FF6A6D'}} className="fa-regular fa-envelope" /><span style={{color: '#FF6A6D', opacity: '0.7'}}>infoDomain@tld</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-12 p-4 mx-4 mt-1   cardteacher d-flex">
            <div className="iconImge">
              <img src={herman} alt="" />
            </div>
            <div className="px-2">
              <h6 style={{color: '#030080'}}>Scott Jackson</h6>
              <p style={{opacity: '0.5'}}>consultant</p>
              <p style={{color: '#FF6A6D'}}>+1 (987)1625346</p>
              <i style={{color: '#FF6A6D'}} className="fa-regular fa-envelope" /><span style={{color: '#FF6A6D', opacity: '0.7'}}>infoDomain@tld</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-12 p-4 mx-4 mt-1   cardteacher d-flex">
            <div className="iconImge">
              <img src={casandra} alt="" />
            </div>
            <div className="px-2">
              <h6 style={{color: '#030080'}}>Scott Jackson</h6>
              <p style={{opacity: '0.5'}}>consultant</p>
              <p style={{color: '#FF6A6D'}}>+1 (987)1625346</p>
              <i style={{color: '#FF6A6D'}} className="fa-regular fa-envelope" /><span style={{color: '#FF6A6D', opacity: '0.7'}}>infoDomain@tld</span>
            </div>
          </div>
        </div> */}
        <div className="row text-center">
          <div className="col-md-12">
            <button type="button" className="btn btn-primary btn-lg rounded-pill mt-5 text-center buttn5">View ALL Teacher</button>
          </div>
        </div>
      </div>
  )
}

export default Teacher