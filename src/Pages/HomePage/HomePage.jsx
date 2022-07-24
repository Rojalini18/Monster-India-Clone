import React, { useEffect } from 'react'
import './HomePage.css'
// import SearchIcon from '@mui/icons-material/Search';
import {data} from '../../db'
import Carousal2 from '../../Utils/Carousal2';
import Carousal3 from '../../Utils/Carousal3';
import Carousal1 from '../../Utils/Carousal1';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { getData } from '../../Redux/AppReducer/action';
import { useNavigate } from 'react-router-dom';
import { BorderBottom } from '@material-ui/icons';


function HomePage() {
    const jobs = data.data
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getData(jobs))
        
    },[])
  return (
    <>
    <Navbar/>
    <div className='home-container'>
        <div onClick={()=>navigate("/filterpage")} className='home-search'>
            <h1 style={{padding:"20px 0 0 0",fontSize:"28px",letterSpacing:"2px",fontWeight:"bold",margin:"13px 0 13px 0"}}>500,000+ Jobs. Find Better. Faster</h1>
            <div className='home-main1'>
                <div className='home-inner1'>
                  <div style={{display:"flex", justifyContent:"space-between",margin:"17px 30px 0 30px"}}>
                    <div style={{fontSize:"14px", borderBottom:"1px solid white"}}>All Jobs</div>
                    <div style={{fontSize:"14px", borderBottom:"1px solid white"}}>Work From Home</div>
                    <div style={{fontSize:"14px", borderBottom:"1px solid white"}}>Covid-19 Resources</div>
                    <div style={{fontSize:"14px", borderBottom:"1px solid white"}}>Contract Jobs</div>
                    <div style={{fontSize:"14px", borderBottom:"1px solid white"}}>Fresher Jobs</div>
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
                  <h4 style={{fontSize:"14px", fontWeight:"bold",margin:"20px 20px 20px 55px"}}>NEW TO MONSTER</h4>
                  <div style={{color:"rgb(92,77,168)",fontSize:"14px", fontWeight:"bold",margin:"20px 20px 20px 55px"}}>REGISTER WITH US</div>
                  <hr/>
                  <div style={{textAlign:"center"}}>Or</div>
                  <div style={{margin:"20px 20px 10px 20px",textAlign:"center",height:"57px",width:"200px",backgroundColor:"rgb(244,135,34)"}}>
                    <div style={{fontWeight:"bold",color:"white",paddingTop:"7px"}}>UPLOAD RESUME</div>
                    <div style={{color:"white",paddingTop:"5px"}}>We will create your profile</div>
                  </div>
                </div>

                <div className='home-inner2'>
                  <h4 style={{fontSize:"14px", fontWeight:"bold",margin:"10px 20px 20px 55px"}}>FREE JOB ALERT</h4>
                  <div style={{color:"rgb(92,77,168)",fontSize:"14px", fontWeight:"bold",margin:"20px 20px 20px 55px"}}>Get an email on jobs matching your criteria</div>
                  <hr/>
                  <div style={{textAlign:"center"}}>Or</div>
                  <div style={{margin:"10px 20px 10px 20px",textAlign:"center",height:"57px",width:"200px",backgroundColor:"white",border:"1px solid rgb(92,77,168)"}}>
                    <div style={{fontWeight:"bold",color:"white",paddingTop:"17px",color:"rgb(92,77,168)"}}>CREATE JOB ALERT</div>
                  </div>
                </div>
            </div>
        </div>
        <Carousal1/>

        <div style={{display:"flex"}}>
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
            

        
          <div style={{margin:"90px 0 0 150px",width:"900px",height:"350px",backgroundColor:"white"}}>
            <div style={{margin:"30px 0 0 30px",fontSize:"20px",fontWeight:"bold",paddingTop:"30px"}}>Premium Services</div>
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

        <div style={{backgroundColor:"white",height:"350px",margin:"20px 0 0 150px",width:"900px"}}>
            <div style={{margin:"20px 0 0 80px",padding:"30px 0 15px 0",fontSize:"22px",fontWeight:"bold",letterSpacing:"2px",color:"rgb(60 60 60)"}}>Find Job By Vacancies</div>
            <div style={{display:"flex",gap:"70px",margin:"20px 40px 0 80px"}}>
                <div style={{backgroundColor:"rgb(92,77,167)",color:"white",width:"120%",textAlign:"center",borderRadius:"5px"}}>Skill</div>
                <div style={{backgroundColor:"rgb(92,77,167)",color:"white",width:"120%",textAlign:"center",borderRadius:"5px"}}>Location</div>
                <div style={{backgroundColor:"rgb(92,77,167)",color:"white",width:"120%",textAlign:"center",borderRadius:"5px"}}>Industry</div>
                <div style={{backgroundColor:"rgb(92,77,167)",color:"white",width:"120%",textAlign:"center",borderRadius:"5px"}}>Function</div>
                <div style={{backgroundColor:"rgb(92,77,167)",color:"white",width:"120%",textAlign:"center",borderRadius:"5px"}}>Roles</div>
                <div style={{backgroundColor:"rgb(92,77,167)",color:"white",width:"120%",textAlign:"center",borderRadius:"5px"}}>Company</div>
            </div>

            <div style={{display:"flex",gap:"100px",margin:"20px 100px 0 100px"}}>
                <div>
                    <div style={{margin:"15px 0 0 0 "}}>Sales</div>
                    <div style={{margin:"15px 0 0 0 "}}>Java </div>
                    <div style={{margin:"15px 0 0 0 "}}>Sql</div>
                    <div style={{margin:"15px 0 0 0 "}}>Operations</div>
                    <div style={{margin:"15px 0 0 0 "}}>HTML</div>
                </div>
                <div>
                    <div style={{margin:"15px 0 0 0 "}}>Sales</div>
                    <div style={{margin:"15px 0 0 0 "}}>Java </div>
                    <div style={{margin:"15px 0 0 0 "}}>Sql</div>
                    <div style={{margin:"15px 0 0 0 "}}>Operations</div>
                    <div style={{margin:"15px 0 0 0 "}}>HTML</div>
                </div>
                <div>
                    <div style={{margin:"15px 0 0 0 "}}>Sales</div>
                    <div style={{margin:"15px 0 0 0 "}}>Java </div>
                    <div style={{margin:"15px 0 0 0 "}}>Sql</div>
                    <div style={{margin:"15px 0 0 0 "}}>Operations</div>
                    <div style={{margin:"15px 0 0 0 "}}>HTML</div>
                </div>
                <div>
                    <div style={{margin:"15px 0 0 0 "}}>Sales</div>
                    <div style={{margin:"15px 0 0 0 "}}>Java </div>
                    <div style={{margin:"15px 0 0 0 "}}>Sql</div>
                    <div style={{margin:"15px 0 0 0 "}}>Operations</div>
                    <div style={{margin:"15px 0 0 0 "}}>HTML</div>
                </div>
            </div>
        </div>

        <div><img style={{margin:"20px 0 0 190px"}} src="https://tpc.googlesyndication.com/simgad/11137650022253328611" alt="" /></div>


        
        </div>

            <div>
               <div style={{margin:"20px 0 0 150px"}}><img src="https://tpc.googlesyndication.com/simgad/16364436375715371887" alt="" /></div>
               <div style={{margin:"20px 0 0 0"}}><img src="https://tpc.googlesyndication.com/simgad/6349442542382681287" alt="" /></div>
            </div>
        
        </div>

        <Footer/>


    </div>
    
    </>
  )
}

export default HomePage