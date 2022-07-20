import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Text,
    FormControl,
    Input,
    Box,
    Flex,
    Image,
    
  } from '@chakra-ui/react'
import {FaFacebook} from "react-icons/fa"
import {IoLogoGoogle} from "react-icons/io"
import {useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { setauth, setCredentials } from '../Redux/AuthReducer/action'
function Login() {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const signup_data = useSelector((state)=>state.signup_data)
    const auth = useSelector((state)=>state.auth)
    
    
    
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
  const handleLogin=()=>{
  console.log("helll")
    let payload={
       name:"",
       email:email,
       password:password
    }
    
    let flag=false;
    signup_data.map((item)=>{

      if(item.email===payload.email && item.password===payload.password){
        payload.name=item.name
        flag=true
      }
    })
    // console.log(signup_data)
    if(flag==true){
      dispatch(setCredentials(payload))
      dispatch(setauth())
      alert("Login Successful")
      navigate("/")
    }
    else{
      alert("Inavalid Credentials")
    }
  }
  

    return (
      <Box >
       
          <Button
            onClick={() => handleClick("sm")}
            // key={size}
            m={4}
          > JOBSEEKER LOGIN</Button>
     
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontSize={"29px"}  font-family= "poppins-semibold-webfont" color="#000000" lineHeight={"20px"} margin="0px 0px 4px"
    >Welcome!</DrawerHeader>
            <DrawerBody>
                <Text color="#3C3C3C" fontSize="18px" mt="-15px" fontWeight={"300px"}>Log in using your Monster credentials</Text>
                 <FormControl m="auto"  mt={"20px"} width="23rem">
                          <Input type={"email"} placeholder="E-mail/Mobile" padding={"15px 15px 17px 44px"} value={email} onChange={(e)=>setemail(e.target.value)}/>
                          <Input   mt={"20px"} placeholder="Password" padding={"15px 15px 17px 44px"} type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                          <Text  mt={"12px"} ml="230px" color={"#6C54DA"} fontWeight="bold">Forgot Password</Text>
                          <Button width="23rem" height={12} bg="#6C54DA" color={"white"} mt="8px" onClick={handleLogin}>Login</Button>
                 </FormControl>
                
                <Box mt={"5px"}  marginBottom="20px">
                <Text fontSize={"23px"} color="gray" fontFamily="poppins-medium-webfont">Or , <Text color={"#6C54DA"} as="span">Login via OTP</Text></Text>
                </Box>
                <Box borderTop={"10px"}>
                <Flex direction={"row"} mt="40px">
                    <Box width={"180px"} borderTop="1px solid "></Box>
                     <Text mt={"-25px"} p="5px" fontSize={"25px"} fontWeight="bold" color={"gray"}>OR</Text>
                    <Box width={"180px"} borderTop="1px solid "></Box>
                </Flex>
                </Box>
                <Box padding={"20px 0px 30px 0px"} >
                    <Text fontSize={"20"} fontWeight="medium" textAlign={"center"} >with your social network</Text>

                    <Flex  gap={"10px"} margin={"auto"} mt="10px" ml="10px">
                        <Button borderRadius={"20px"} leftIcon={<IoLogoGoogle />} >Login with Google</Button>
                        <Button borderRadius={"20px"}  leftIcon={<FaFacebook />}>Login with Facebook</Button>
                    </Flex>
                </Box>

                <Box  border="1px solid gray" textAlign={"center"}  borderRadius={"5px"} mt="5" p={5}>
                        <Text fontSize={"20px"} fontWeight="bold">New to Monster?</Text>
                        <Text as="h3">Create your profile now and be visible to the top recruiters in the world</Text>
                        <Button width="22rem" height={12} bg="#6C54DA" color={"white"} mt="12px" >Register with us</Button>
                </Box>



                <Box  border="1px solid gray" textAlign={"center"}  borderRadius={"5px"} mt="5" p={5} mb={"28px"}>
                        <Text fontSize={"17px"} fontWeight="bold">Your dream job is a click away!</Text>
                        <Text fontWeight="medium">Get the app on your mobile.</Text>
                       
                        <Flex m={"auto"} gap="20px" ml="30px"  mt="20px" >
                           <Image src="https://www.monsterindia.com/rio/public/images/android-footer.png" />
                            <Image src="https://www.monsterindia.com/rio/public/images/ios-footer.png" />
                        </Flex>
                        
                </Box>
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        </Box>
    )
  }

  export default Login