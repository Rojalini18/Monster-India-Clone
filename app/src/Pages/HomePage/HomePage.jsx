import React from 'react'
import './HomePage.css'
import SearchIcon from '@mui/icons-material/Search';
import Carousal from '../Carousal1';
import Carousal2 from '../Navbar/Carousal2';
import Carousal3 from '../Navbar/Carousal3';

function HomePage() {
  return (
    <div className='home-container'>
        <div className='home-search'>
            <h1 style={{fontSize:"28px",letterSpacing:"2px",fontWeight:"bold",margin:"13px 0 13px 0"}}>500,000+ Jobs. Find Better. Faster</h1>
            <div className='home-main1'>
                <div className='home-inner1'>
                  <div style={{display:"flex", justifyContent:"space-between",margin:"17px 30px 0 30px"}}>
                    <div style={{fontSize:"14px"}}>All Jobs</div>
                    <div style={{fontSize:"14px"}}>Work From Home</div>
                    <div style={{fontSize:"14px"}}>Covid-19 Resources</div>
                    <div style={{fontSize:"14px"}}>Contract Jobs</div>
                    <div style={{fontSize:"14px"}}>Fresher Jobs</div>
                  </div>

                  <div style={{margin:"20px 10px 0 "}}>
                    <input style={{border:"1px solid black",height:"40px",width:"410px",margin:"15px 0 0 20px"}} type="text" placeholder='🔍 Search by Job title,skills & company                      🔊' /><button style={{height:"40px",width:"120px",backgroundColor:"rgb(92,77,168)",color:"white"}}>Search</button>
                  </div>

                  <div style={{fontSize:"14px",margin:"20px 0 0 435px"}}>Advanced Search</div>
                  <div style={{display:"flex",margin:"5px 0 0 20px"}}>
                    <div style={{fontSize:"14px"}}>Trending Searches:</div>
                    <div>
                      <div style={{fontSize:"13px"}}>Jobs in Delhi, Jobs in Mumbai, Jobs in Hyderabad,</div>
                      <div style={{fontSize:"13px"}}>Jobs in Bangalore, Jobs in Chennai, Jobs in Pune, Jobs in Kolkata,</div>
                      <div style={{fontSize:"13px"}}>Jobs in Lucknow</div>
                    </div>
                  </div>
                </div>

                <div className='home-inner2'>
                  <h4>New TO Monster</h4>
                  <div>Register With Us</div>
                  <hr/>
                  <div>Or</div>
                  <div>
                    <div>UPLOAD RESUME</div>
                    <div>We will create your profile</div>
                  </div>
                </div>

                <div className='home-inner3'>
                  <div>Free Job Alert</div>
                  <div>Get an email on jobs matching your criteria</div>
                  <div>No registration required</div>
                  <div>Create Job Alert</div>
                </div>
            </div>
        </div>
        <Carousal/>

        <div>
          <div style={{display:"flex",gap:"30px",height:"120px",width:"900px",border:"1px solid blue",margin:"10px 0 0 140px",backgroundColor:"rgb(239,248,236)"}}>
            <div><img style={{height:"110px", width:"200px",margin:"10px 0 0 0"}} src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-1.png" alt="" /></div>
            <div style={{margin:"30px 0 0 0"}}>
              <div style={{fontSize:"19px",fontWeight:"bold"}}>Get your profile to rank on top of recruiter searches</div>
              <div>To get 5x more recruiter views on your profile</div>
            </div>
          </div>

          <Carousal2/>
          <Carousal3/>
            

        <div></div>
          <div style={{margin:"90px 0 0 150px",width:"900px",height:"350px",backgroundColor:"white"}}>
            <div style={{margin:"30px 0 0 30px",fontSize:"20px",fontWeight:"bold"}}>Premium Services</div>
            <div style={{display:"flex",gap:"15px",margin:"30px 0 0 30px"}}>
              <div style={{height:"220px",width:"200px",backgroundColor:"rgb(249,253,248)"}}>
                <div style={{width:"200px",height:"100px",backgroundColor:"rgb(239,248,236)"}}><img style={{width:"70px",height:"100px",marginLeft:"60px"}} src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/aJ98j6upmWI4DEMecdM4NTPzesMybGMNVQBA3Xod.png" alt="" /></div>
                <div style={{fontWeight:"bold",fontSize:"14px",margin:"10px 0 0 20px"}}>Resume Writing</div>
                <div style={{fontSize:"13px",margin:"0px 40px 0 20px"}}>Professionally written resume + cover letter</div>
                <div style={{color:"blue",margin:"13px 0 0 80px"}}>:-Read More</div>
              </div>

              <div style={{height:"220px",width:"200px",backgroundColor:"rgb(249,253,248)"}}>
                <div style={{width:"200px",height:"100px",backgroundColor:"rgb(239,248,236)"}}><img style={{width:"70px",height:"100px",marginLeft:"60px"}} src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/aJ98j6upmWI4DEMecdM4NTPzesMybGMNVQBA3Xod.png" alt="" /></div>
                <div style={{fontWeight:"bold",fontSize:"14px",margin:"10px 0 0 20px"}}>Resume Writing</div>
                <div style={{fontSize:"13px",margin:"0px 40px 0 20px"}}>Professionally written resume + cover letter</div>
                <div style={{color:"blue",margin:"13px 0 0 80px"}}>:-Read More</div>
              </div>

              <div style={{height:"220px",width:"200px",backgroundColor:"rgb(249,253,248)"}}>
                <div style={{width:"200px",height:"100px",backgroundColor:"rgb(239,248,236)"}}><img style={{width:"70px",height:"100px",marginLeft:"60px"}} src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/aJ98j6upmWI4DEMecdM4NTPzesMybGMNVQBA3Xod.png" alt="" /></div>
                <div style={{fontWeight:"bold",fontSize:"14px",margin:"10px 0 0 20px"}}>Resume Writing</div>
                <div style={{fontSize:"13px",margin:"0px 40px 0 20px"}}>Professionally written resume + cover letter</div>
                <div style={{color:"blue",margin:"13px 0 0 80px"}}>:-Read More</div>
              </div>

              <div style={{height:"220px",width:"200px",backgroundColor:"rgb(249,253,248)"}}>
                <div style={{width:"200px",height:"100px",backgroundColor:"rgb(239,248,236)"}}><img style={{width:"70px",height:"100px",marginLeft:"60px"}} src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/aJ98j6upmWI4DEMecdM4NTPzesMybGMNVQBA3Xod.png" alt="" /></div>
                <div style={{fontWeight:"bold",fontSize:"14px",margin:"10px 0 0 20px"}}>Resume Writing</div>
                <div style={{fontSize:"13px",margin:"0px 40px 0 20px"}}>Professionally written resume + cover letter</div>
                <div style={{color:"blue",margin:"13px 0 0 80px"}}>:-Read More</div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HomePage