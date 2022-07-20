import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-main'>
        <div className='navbar-side1'>
            <div><img style={{height:"80px",width:"45%",marginTop:"-4px"}} src="https://media.monsterindia.com/trex/seo-search/public/default/images/monster-logo.svg" alt="" /></div>
            <div style={{margin:"26px 0 0 -90px",fontFamily:"poppins",fontSize:"14px",fontWeight:"bold"}}>JOB SEARCH</div>
            <div className='navbar-inner' >WORK FROM HOME</div>
            <div className='navbar-inner'>CAREER TIPS</div>
            <div className='navbar-inner'>PREMIUM SERVICES</div>
            <div className='navbar-inner'>MORE</div>
        </div>
        <div className='navbar-side2'>
            <div className='navbar-inner inner1'><PersonOutlineIcon/><span>JOBSEEKER LOGIN</span></div>
            <div className='navbar-inner inner1'>FOR EMPLOYERS</div>
        </div>
    </div>
  )
}

export default Navbar