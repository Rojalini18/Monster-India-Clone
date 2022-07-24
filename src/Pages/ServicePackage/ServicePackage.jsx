import { Box, Button, Divider, Heading, Image, Input, NumberInput, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
 import Styles from "./ServicePackage.module.css"
 import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTotal } from '../../Redux/AppReducer/action'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const ServicePackage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setValue] = React.useState('')

    const handleBuy = ()=>{
       localStorage.setItem("buy_price", (value))
       navigate("/cart")
    }

  return (
    <>
    <Navbar/>
    <Box className={Styles. maindiv} >
      <Box ml={'50px'} display={'flex'}  marginTop={'20px'}>
      <Text textColor={'gray'}  cursor={'pointer'}fontSize='14px'>Home</Text>
      <ChevronRightIcon marginTop={"4px"}  />
      <Text textColor={'gray'}  cursor={'pointer'}fontSize='14px'>Premium Services</Text>
      <ChevronRightIcon marginTop={"4px"}/>
      <Text textColor={'gray'}  cursor={'pointer'}fontSize='14px'>Featured Profile</Text>
      </Box>
{/* --------------------------------------------- top part completed */}
     <Box className={Styles.firstdiv}>
     <div className={Styles.rightdiv}>
      <Stack marginTop={'40px'}  height={'80px'} direction='row' align='center'>
  <Button fontWeight={'200px'} border={'none'} bg={'lightgray'}_hover={{fontWeight:'bold'}} colorScheme='white'  color={'#4b28a4'} size='md' height={'60px'}>Fetured profile</Button>
  <Button  fontWeight={'200px'}colorScheme='white' _hover={{bg:'lightgray',color:'#4b28a4',fontWeight:'bold'}}  color={'black'} size='md' height={'60px'}>Resume Writing</Button>
  <Button fontWeight={'200px'}colorScheme='white' _hover={{bg:'lightgray',color:'#4b28a4',fontWeight:'bold'}}  color={'black'} size='md' height={'60px'}>Career Booster</Button>
  <Button fontWeight={'200px'}colorScheme='white' _hover={{bg:'lightgray',color:'#4b28a4',fontWeight:'bold'}} color={'black'} size='md' height={'60px'}> Profile Highlighter</Button>
  <Button fontWeight={'200px'}colorScheme='white' _hover={{bg:'lightgray',color:'#4b28a4',fontWeight:'bold'}}  color={'black'} size='md' height={'60px'}> Linkedin Makeover</Button>
  <Button fontWeight={'200px'}colorScheme='white' _hover={{bg:'lightgray',color:'#4b28a4',fontWeight:'bold'}} color={'black'} size='md' height={'60px'}> Mock Interview</Button>
</Stack>
<Divider mt={'-12px'}  direction='row'  width={'100%'} borderColor={'#4b28a4'} border={'2px solid '} orientation='horizontal' />

{/* -----------------------------------------> */}
 <Box bg={'lightgray'} display={'flex'} w={'100%'} borderRadius={'15px'} border={'none'}  mt={'20px'} height={'220px'}>
      <Box  ml={'10px'} mt={'30px'} w={'40%'} >
        <Heading>Featured Profile</Heading>
        <Text fontWeight={'600'} fontSize='18px'>Rank your profile at the top to make you stand out in a crowd of jobseekers</Text>
      </Box>
      <Box>
        <Image mt={'20px'} ml={'250px'} src="https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-banner.png"/>
      </Box>
 </Box>
 {/* ---------------------------------- featured profiled completed */}
    <Box  height={'220px'} w={'100%'} >
        <Heading mt={'20px'} ml={'15px'} fontSize={'30px'}>Key Features</Heading>
         <Box display={'flex'}  mt={'20px'} textAlign={'center'}>
            <Box>
              <Image margin={'auto'} marginBottom={'10px'} src='https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-key-feature-1.png'/>
              Rank higher in recruiter's search</Box>
            <Box>
            <Image margin={'auto'} marginBottom={'10px'}  src='https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-key-feature-2.png'/>
              Get upto 10X attention from recruiters</Box>
            <Box>
            <Image margin={'auto'} marginBottom={'10px'}  src='https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-key-feature-3.png'/>
              Showcase yourself as an active jobseeker</Box>
            <Box>
            <Image margin={'auto'} marginBottom={'10px'}  src='https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-key-feature-4.png'/>
              Increase chance of getting shortlisted</Box>
         </Box>
         </Box>
         {/* ----------------------------------------------Key Feature completed */}
         <Box  >
             <Heading mt={'20px'} ml={'15px'} fontSize={'30px'}>What You Gain?</Heading>
             <Box borderRadius={'15px'} border={'none'} mt={'20px'}   display={'flex'} bg={'lightgray'} height={'290px'} w={'100%'}>
                  <Box display={'grid'} w={'50%'} mt={'25px'} ml={'10px'} gridGap={'10px'}>
                    <Box fontSize={'20px'} fontWeight={'300'}><CheckCircleIcon mr={'10px'} fontSize={'2xl'} color={'#4b28a4'}/>Your profile is upfront when recruiters search candidate like you</Box>
                    <Box fontSize={'20px'} fontWeight={'300'}><CheckCircleIcon mr={'10px'} fontSize={'2xl'}color={'#4b28a4'}/>You are showcased as an active job seeker who is keenly looking</Box>
                    <Box fontSize={'20px'} fontWeight={'300'}><CheckCircleIcon mr={'10px'}fontSize={'2xl'} color={'#4b28a4'}/>Increase your chances of getting shortlisted in an interview</Box>
                  </Box>
                  <Box>
                    <Image mt={'-20px'} src='https://media.monsterindia.com/trex/public/default/images/career-services/xpress-resume-benefitType1.png'/>
                  </Box>

             </Box>
         </Box>
       
      
    {/* -----------------gain part completed */}
    <Box>
    <Heading mt={'20px'} ml={'15px'} fontSize={'30px'}>How Featured Profile Works</Heading>
    <Text ml={'15px'}fontSize={'18px'} >How recruiter views Featured Profile</Text>
     <Box display={'flex'} justifyContent={'space-between'} w={'100%'} height={'400px'}>
           <Box display={'grid'} borderRadius={'15px'} mt={'10px'} w={'30%'} height={'95%'} bg={'lightgray'}>
                 <Box height={'50%'} w={'100%'}>
                   <Image src='https://media.monsterindia.com/trex/public/default/images/career-services/how-featured-profile-helps-you-img-1.png'/>
                 </Box>
                 <Box margin={'auto'} fontSize={'18px'} height={'70%'} width={'70%'} textAlign={'center'}>Your profile doesn’t get attention as it is not on the top of the page</Box>

           </Box>
           <Box display={'grid'} borderRadius={'15px'} mt={'10px'} w={'30%'} height={'95%'} bg={'lightgray'}>
           <Box height={'50%'} w={'100%'}>
                   <Image src='https://media.monsterindia.com/trex/public/default/images/career-services/how-featured-profile-helps-you-img-2.png'/>
                 </Box>
                 <Box margin={'auto'} fontSize={'18px'} height={'70%'} width={'70%'} textAlign={'center'}>Buy Featured Profile to help get your profile more visibility.</Box>
           </Box>
           <Box display={'grid'}borderRadius={'15px'} mt={'10px'} w={'30%'} height={'95%'} bg={'lightgray'}>
           <Box height={'50%'} w={'100%'}>
                   <Image src='https://media.monsterindia.com/trex/public/default/images/career-services/how-featured-profile-helps-you-img-3.png'/>
                 </Box>
                 <Box margin={'auto'} fontSize={'18px'} height={'70%'} width={'70%'} textAlign={'center'}>Your profile gets featured on top of candidate results</Box>
          </Box>
          
     </Box>
     </Box>
       {/* How Featured Profile Works completed */}

       <Box>
       <Heading mt={'20px'} ml={'15px'} fontSize={'30px'}>Importance of having your profile on the top</Heading>
         <Box w={'100%'} height={'400px'}  display={'flex'} justifyContent={'space-between'} >
              <Box height={'40%'} w={'50%'} display={'grid'} gridGap={'20px'} mt={'20px'} >
                 <Box borderRadius={'15px'} ml={'20px'} bg={'lightgray'}  mt={'20px'} display={'flex'} justifyContent={'space-between'}>
                   <Image ml={'20px'} mt={'10px'} height={'70%'} w={'30%'}  src='https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-benifit-type-2-img-1.png'/>
                   <Text mr={'10px'} mt={'25px'} w={'50%'} fontSize={'16px'}>First 5% applicants are 4 times more likely to get shortlisted</Text>
                 </Box>
                 <Box borderRadius={'15px'} ml={'20px'} bg={'lightgray'}  mt={'20px'} display={'flex'} justifyContent={'space-between'}>
                   <Image ml={'20px'} mt={'10px'} height={'70%'} w={'30%'}  src='https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-benifit-type-2-img-3.png'/>
                   <Text mr={'10px'} mt={'25px'} w={'50%'} fontSize={'16px'}>Get the most relevant job alert notifications</Text>
                 </Box>
              </Box>

              <Box height={'40%'} w={'50%'} display={'grid'} gridGap={'20px'} mt={'20px'} >
                 <Box borderRadius={'15px'} ml={'20px'} bg={'lightgray'}  mt={'20px'} display={'flex'} justifyContent={'space-between'}>
                   <Image ml={'20px'} mt={'10px'} height={'70%'} w={'30%'}  src='https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-benifit-type-2-img-2.png'/>
                   <Text mr={'10px'} mt={'25px'} w={'50%'} fontSize={'16px'}>Your job application gets priortized in our Monster jobseeker database</Text>
                 </Box>
                 <Box borderRadius={'15px'} ml={'20px'} bg={'lightgray'}  mt={'20px'} display={'flex'} justifyContent={'space-between'}>
                   <Image ml={'20px'} mt={'10px'} height={'70%'} w={'30%'}  src='https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-benifit-type-2-img-4.png'/>
                   <Text mr={'10px'} mt={'25px'} w={'50%'} fontSize={'16px'}>Increase your chances of getting shortlisted</Text>
                 </Box>
              </Box>
         </Box>
          </Box>
      {/* ---------------------- */}
      <Box   w={'100%'} >
        <Heading mt={'20px'} ml={'15px'} fontSize={'30px'}>How To Get The Best Of This Service</Heading>
         <Box display={'flex'} justifyContent={'space-between'}  mt={'20px'} textAlign={'center'}>
            <Box w={'30%'}>
              <Image margin={'auto'} marginBottom={'10px'} src='https://media.monsterindia.com/trex/public/default/images/career-services/how-get-benifit1.png'/>
              <Box margin={'auto'} w={'60%'}>Frequently login into your account Login at least once every week</Box></Box>
            <Box w={'30%'}>
            <Image margin={'auto'} marginBottom={'10px'}  src='https://media.monsterindia.com/trex/public/default/images/career-services/how-get-benifit2.png'/>
            <Box margin={'auto'} w={'60%'}>Update your skills with keywords to match with recruiter needs</Box></Box>
            <Box w={'30%'}>
            <Image margin={'auto'} marginBottom={'10px'}  src='https://media.monsterindia.com/trex/public/default/images/career-services/how-get-benifit3.png'/>
            <Box margin={'auto'} w={'60%'}>Make sure your profile completion is 100% and up to date</Box></Box>
           
         </Box>
         </Box>
         
         {/* ---------------------- */}
          <Box borderRadius={'15px'} w={'100%'} height={'150px'} boxShadow={'xs'}>
          <Heading fontWeight={'300px'} mt={'40px'} ml={'20px'} fontSize={'24px'}>Disclaimer</Heading>
          <Box>
            <Text fontWeight={'light'} mt={'10px'} ml={'20px'} fontSize={'24px'}>
            Monster only displays your profile at the top of the search listing page basis the resume matches the search criteria used by the recruiter(s).
            </Text>
          </Box>
          </Box>
          {/* ----------- */}

          <Box display={'flex'} mt={'25px'} borderRadius={'8px'} w={'100%'} height={'450px'} bg={'lightgray'}>
               <Box display={'grid'} w={'40%'}  textAlign={'center'}>
                  <Heading mt={'10px'} fontSize={'25px'}>Talk to our experts</Heading>
                  <Image margin={'auto'} src='https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/humanFig2.svg'/>
                    <Text fontWeight={'bold'} fontSize={'18px'}>Toll Free No: 1-800-4196666</Text>
                    <Text fontWeight={'bold'} fontSize={'18px'}>Toll No: +91-40-66116611</Text>
               </Box>
               <Box w={'60%'} >
                <Heading mt={'10px'} fontSize={'25px'}>CONTACT US</Heading>
                <Text fontSize={'12px'}>Our executive will get in touch with you soon</Text>
                <Text>Name *</Text>
              
                <Input mt={'15px'} w={'85%'} bg={'white'} type="text" placeholder='Enter your full name' />
          
                <Text mt={'15px'}>Email ID *</Text>
           
                <Input  mt={'15px'} w={'85%'} bg={'white'}  type="Email" placeholder='Enter your email-id' />
                 
                 <Text mt={'15px'}>Mobile Number *</Text>

                 <Input mt={'15px'} w={'85%'} bg={'white'} type='tel' placeholder='phone number' />

                 <Button color={'white'} mt={'30px'} bg={'#4b28a4'} padding={'20px 80px'}>Call me back</Button>

               </Box>
          </Box>
          {/* ----------- */}
          <Box>
          <Heading mt={'20px'} ml={'15px'} fontSize={'30px'}>People who bought this service also bought</Heading>
           <Box display={'flex'} justifyContent={'space-between'} w={'100%'} height={'250px'} >
              <Box display={'flex'} borderRadius={'8px'} mt={'20px'} w={'46%'} height={'60%'} bg={'lightgray'}>
                  <Box w={'30%'} height={'100%'}>
                    <Image w={'100%'}  height={'100%'} src='https://media.monsterindia.com/trex/public/default/images/career-services/resume-writing-services.png'/>
                  </Box>
                  <Box w={'70%'} height={'100%'}>
                     <Text fontWeight={'bold'} fontSize={'18px'}>Resume Writing</Text>
                     <Text fontWeight={'light'} fontSize={'18px'}>Get professionally written resume which helps you get your dream job</Text>
                     <Box display={'flex'} justifyContent={'space-between'}>
                       <Button color={'white'} fontSize={'16px'} bg={'#4b28a4'} mt={'10px'}>Starting Rs2499</Button>
                       <Text color={'#4b28a4'} textDecoration={'underline'} mt={'15px'}>Benifits</Text>
                     </Box>
                  </Box>
              </Box>
              <Box display={'flex'} borderRadius={'8px'} mt={'20px'} w={'46%'} height={'60%'} bg={'lightgray'}>
              <Box w={'30%'} height={'100%'}>
                    <Image w={'100%'}  height={'100%'} src='https://media.monsterindia.com/trex/public/default/images/career-services/resume-writing-services.png'/>
                  </Box>
                  <Box w={'70%'} height={'100%'}>
                     <Text fontWeight={'bold'} fontSize={'18px'}>Resume Writing</Text>
                     <Text fontWeight={'light'} fontSize={'18px'}>Get professionally written resume which helps you get your dream job</Text>
                     <Box display={'flex'} justifyContent={'space-between'}>
                       <Button color={'white'} fontSize={'16px'} bg={'#4b28a4'} mt={'10px'}>Starting Rs2499</Button>
                       <Text color={'#4b28a4'} textDecoration={'underline'} mt={'15px'}>Benifits</Text>
                     </Box>
                  </Box>
              </Box>
          
           </Box>
          </Box>
      </div>
      
      <div  className={Styles.leftdiv} >
        <Box mt={'60px'} width={'400px'}>
          <Button borderRadius={'10px'}  color={'white'} bg={'#4b28a4'} height={'50px'} w={'80%'}>Call me back</Button>
          </Box>
          <Box width={'100%'} height={'450px'} mt={'10px'}  boxShadow={'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'} p='6' rounded='md' bg='white'>
            <Heading textAlign={'center'} mt={'0px'}fontSize={'21px'} marginBottom={'10px'}>Select Service Package</Heading>
            <Box display={'grid'} gridGap={'8px'} padding={'2px'} paddingRight={'15px'}  margin={'auto'} height={'90%'}w={'100%'} overflowY={'auto'}>
            {/* onChange={setValue} value={value} */}
            <RadioGroup onChange={setValue} value={value} >
                <Stack direction='column'>
                    
                        <Box p={5} width={'250px'} borderRadius={'7px'}  boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}  height={'100px'}>
                        <Radio value='1999'>
                            <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={'bold'} size={'xl'}>Entry Level</Text>
                            <Text ml={"25px"} fontWeight={'bold'} size={'xl'}>Rs 1999</Text>
                            </Box>
                            <Text  size={'xl'}>Experience</Text>
                            <Text  size={'xl'}>0 - 4 Years</Text>
                            </Radio>
                        </Box>
                    
                    
                        <Box p={5} width={'250px'} borderRadius={'7px'}  boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}  height={'100px'}>
                        <Radio value='2999'>
                            <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={'bold'} size={'xl'}>Mid Level</Text>
                            <Text ml={"25px"} fontWeight={'bold'} size={'xl'}>Rs 2999</Text>
                            </Box>
                            <Text  size={'xl'}>Experience</Text>
                            <Text  size={'xl'}>4-8 Years</Text>
                            </Radio>
                        </Box>

                        <Box p={5} width={'250px'} borderRadius={'7px'}  boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}  height={'100px'}>
                        <Radio value='4999'>
                            <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={'bold'} size={'xl'}>High Level</Text>
                            <Text ml={"25px"} fontWeight={'bold'} size={'xl'}>Rs 4999</Text>
                            </Box>
                            <Text  size={'xl'}>Experience</Text>
                            <Text  size={'xl'}>8-12 Years</Text>
                            </Radio>
                        </Box>
                </Stack>
            </RadioGroup>
               {/* <Box width={'100%'} borderRadius={'7px'}  boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}  height={'100px'}>
                 <Box display={'flex'} justifyContent={'space-between'}>
                 <Radio><Text fontWeight={'bold'} size={'xl'}>Entry Level</Text></Radio>
                 <Text fontWeight={'bold'} size={'xl'}>Rs 1999</Text>
                 </Box>
                 <Text ml={'25px'} size={'xl'}>Experience</Text>
                 <Text ml={'25px'} size={'xl'}>0 - 4 Years</Text>
               </Box> */}


               {/* <Box width={'100%'} borderRadius={'7px'} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}    height={'100px'}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Radio><Text fontWeight={'bold'} size={'xl'}>Mid Level</Text></Radio>
                        <Text fontWeight={'bold'} size={'xl'}>Rs 2999</Text>
                    </Box>
                    <Text ml={'25px'} size={'xl'}>Experience</Text>
                    <Text ml={'25px'} size={'xl'}>4 - 8 Years</Text>
                </Box> */}


               {/* <Box width={'100%'} borderRadius={'7px'} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}  height={'100px'}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Radio ><Text fontWeight={'bold'} size={'xl'}>Senior Level</Text></Radio>
                        <Text fontWeight={'bold'} size={'xl'}>Rs 3999</Text>
                    </Box>
                 <Text ml={'25px'} size={'xl'}>Experience</Text>
                 <Text ml={'25px'} size={'xl'}>8 - 15 Years</Text>
               </Box> */}

               {/* <Box width={'100%'} borderRadius={'7px'} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}  height={'100px'}>
               <Box display={'flex'} justifyContent={'space-between'}>
                 <Radio><Text fontWeight={'bold'} size={'xl'}>Executive Level</Text></Radio>
                 <Text fontWeight={'bold'} size={'xl'}>Rs 4999</Text>
                 </Box>
                 <Text ml={'25px'} size={'xl'}>Experience</Text>
                 <Text ml={'25px'} size={'xl'}>15+ Years</Text></Box>   */}
            </Box>
            <Button onClick={handleBuy} w={'95%'} mt={'-20px'} borderRadius={'5px'} color={'white'} bg={'#4b28a4'}>Buy now</Button>
          </Box>

      
      </div>
     
     </Box>
      
    </Box>
    <Footer/>
   </>
  )
}

export default ServicePackage