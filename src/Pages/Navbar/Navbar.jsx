import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate()
  const user_data = JSON.parse(localStorage.getItem("user_data"))

  const handleLink = (size)=>{

  }
  return (
    <div className='navbar-main'>
        <div className='navbar-side1'>
            <div><img onClick={()=>navigate("/")} style={{cursor:"pointer",height:"80px",width:"140px",margin:"-4px 0 0 100px"}} src="https://media.monsterindia.com/trex/seo-search/public/default/images/monster-logo.svg" alt="" /></div>
            <div onClick={()=>navigate("/advancesearch")} style={{cursor:"pointer",margin:"26px 0 0 0px",fontFamily:"poppins",fontSize:"14px",fontWeight:"bold"}}>JOB SEARCH</div>
            <div style={{fontFamily:"poppins"}} className='navbar-inner' >WORK FROM HOME</div>
            <div style={{fontFamily:"poppins"}} onClick={()=>navigate("/career")} className='navbar-inner'>CAREER TIPS</div>
            <div style={{fontFamily:"poppins",backgroundColor:"rgb(254,233,197)",height:"43px",borderRadius:"5px",width:"170px",padding:"0 0 0 17px",margin:"12px 0 0 0"}} onClick={()=>navigate("/service")} className='navbar-inner'>PREMIUM SERVICES</div>
            <div style={{fontFamily:"poppins"}} className='navbar-inner'>MORE</div>
        </div>
        <div className='navbar-side2'>
            {user_data ? <div style={{fontFamily:"poppins",fontWeight:"bolder"}} onClick={()=>navigate("/profile")}  className='navbar-inner inner1'><PersonOutlineIcon/><span>My Profile</span></div>:
            <div style={{fontFamily:"poppins"}} onClick={()=>navigate("/login")} className='navbar-inner inner1'><PersonOutlineIcon/><span>JOBSEEKER LOGIN</span></div>
            }
            <div style={{fontFamily:"poppins",fontWeight:"bolder"}} className='navbar-inner inner1'>FOR EMPLOYERS</div>
        </div>
       
    </div>
  )
}

export default Navbar