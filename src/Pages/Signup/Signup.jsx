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
    Flex,
    Text,
    Box,
    FormControl,
    FormLabel,
    Input,
    Image,
  } from "@chakra-ui/react";
  import React, { useReducer, useState } from "react";
  // import { FaFacebook } from "react-icons/fa";
  // import { IoLogoGoogle } from "react-icons/io";
  import {useNavigate} from "react-router-dom"
  import {useDispatch,useSelector} from "react-redux"
  import { addSignupData } from "../../Redux/AuthReducer/action";
  const initialState = {
    resume: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    location: "",
    experience: "",
    skills: "",
    industry: "",
    department: "",
  };
  
  const reducer = (state, { type, payload }) => {
    console.log(type, payload);
    switch (type) {
      case "resume":
        return {
          ...state,
          resume: payload,
        };
  
      case "name":
        return {
          ...state,
          name: payload,
        };
  
      case "email":
        return {
          ...state,
          email: payload,
        };
  
      case "password":
        return {
          ...state,
          password: payload,
        };
  
      case "mobile":
        return {
          ...state,
          mobile: payload,
        };
      case "location":
        return {
          ...state,
          location: payload,
        };
      case "experience":
        return {
          ...state,
          experience: payload,
        };
      case "skills":
        return {
          ...state,
          skills: payload,
        };
  
      case "industry":
        return {
          ...state,
          industry: payload,
        };
      case "department":
        return {
          ...state,
          department: payload,
        };
    }
  };
  
  function Signup() {
    const [state, setter] = useReducer(reducer, initialState);
    console.log(state);
    const signup_data=useSelector(state=>state.signup_data)
   const navigate=useNavigate()
   const dispatch=useDispatch()
    const [size, setSize] = React.useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [resume, setresume] = useState("")

  
    console.log(state);
  
    const handleSignup = () => {
      let flag = false;
  
      if (
        state.resume &&
        state.name &&
        state.email &&
        state.password &&
        state.mobile &&
        state.location &&
        state.experience &&
        state.skills &&
        state.industry &&
        state.department
      ) {
        
          if (signup_data.password == state.password) {
            flag = true;
          }
        
        if(flag==true){
          alert("Already Registered")
          navigate("/")
        }
        else{
          dispatch(addSignupData(state))
          alert("Sign Up successful")
          navigate("/")
        }
        // dispatch()
      } else {
        alert("Please fill all the Credentials");
      }
    };
  
  
  
    const handleClick = (newSize) => {
      setSize(newSize);
      onOpen();
    };
  
    return (
      <>
        <Button onClick={() => handleClick("lg")} key={size} m={4}width="22rem" height={12} bg="#6C54DA" color={"white"} mt="12px" ml={"-8px"} >
          Register With us
        </Button>
  
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader textAlign={"center"}>Create an Account (it's free)</DrawerHeader> */}
            <DrawerBody>
              <Box margin={"auto"} padding="40px 30px 50px 30px">
                <Box textAlign="center">
                  {" "}
                  <Text
                    as="span"
                    fontSize={"25px"}
                    textAlign="center"
                    fontWeight={"bold"}
                  >
                    Create an Account{" "}
                  </Text>
                  <Text as="span" fontSize={"18px"}>
                    {" "}
                    (it's free)
                  </Text>
                </Box>
                <Text textAlign={"center"}>
                  It only takes a couple of minutes to get started
                </Text>
                <Flex gap={"20px"} margin={"auto"} mt="20px" ml="60px">
                  <Button
                    className="google"
                    borderRadius={"20px"}
                    bg="white"
                    border={"1px solid #ced4da"}
                    color="black"
                    colorScheme={"red"}
                  >
                    <Image
                      ml={"-10px"}
                      borderRadius="50%"
                      mr="10px"
                      width={8}
                      h={7}
                      border="1px solid"
                      src="https://openclassify.com/files/images/md-1596534743417_31_Google-Module.png"
                    />
                    Login with Google
                  </Button>
  
                  <Button
                    borderRadius={"20px"}
                    color="black"
                    bg="white"
                    border={"1px solid #ced4da"}
                    colorScheme={"facebook"}
                  >
                    <Image
                      ml={"-10px"}
                      mr="10px"
                      width={7}
                      src="http://access2books.com/images/design/1435673738_social_style_2_facebook.png"
                    />
                    Login with Facebook
                  </Button>
                </Flex>
                <Box borderTop={"1px solid #ced4da"} mt="30px"></Box>
  
                <Box mt={"20px"}>
                  <FormControl isRequired mt={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      Upload Resume (*.doc, *.docx, *.rtf, *.txt, *.pdf) 6 MB max
                    </FormLabel>
                    <Input
                      placeholder="First name"
                      type={"file"}
                      fontSize={"14px"}
                      pt="5px"
                      value={state.resume}
                      onChange={(e) =>
                        setter({ type: "resume", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <FormControl isRequired mt={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      Full Name
                    </FormLabel>
                    <Input
                      placeholder="Enter your full name"
                      type={"text"}
                      fontSize={"14px"}
                      value={state.name}
                      onChange={(e) =>
                        setter({ type: "name", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <FormControl isRequired mt={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      {" "}
                      Email ID{" "}
                    </FormLabel>
                    <Input
                      placeholder="Enter your email"
                      type={"email"}
                      fontSize={"14px"}
                      value={state.email}
                      onChange={(e) =>
                        setter({ type: "email", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <FormControl isRequired mt={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      Password{" "}
                    </FormLabel>
                    <Input
                      placeholder="password should be minimum 6 characters"
                      type={"password"}
                      value={state.password}
                      minLength="6"
                      fontSize={"14px"}
                      onChange={(e) =>
                        setter({ type: "password", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <FormControl isRequired mt={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      Mobile Number{" "}
                    </FormLabel>
                    <Input
                      placeholder="Enter your mobile number for recruiters to reach you"
                      value={state.mobile}
                      type={"number"}
                      fontSize={"14px"}
                      onChange={(e) =>
                        setter({ type: "mobile", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <FormControl isRequired mt={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      Current Location{" "}
                    </FormLabel>
                    <Input
                      placeholder="Enter your current location"
                      fontSize={"14px"}
                      type={"text"}
                      value={state.location}
                      onChange={(e) =>
                        setter({ type: "location", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <FormControl isRequired mt={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      Total Experience
                    </FormLabel>
                    <Input
                      placeholder="Enter experience in years"
                      type={"number"}
                      value={state.experience}
                      fontSize={"14px"}
                      onChange={(e) =>
                        setter({ type: "experience", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <FormControl isRequired mt={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      Key Skills{" "}
                    </FormLabel>
                    <Input
                      placeholder="Enter your Skills"
                      type={"text"}
                      fontSize={"14px"}
                      value={state.skills}
                      onChange={(e) =>
                        setter({ type: "skills", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <FormControl isRequired mt={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      Preferred Industry{" "}
                    </FormLabel>
                    <Input
                      placeholder="Enter industry"
                      type={"text"}
                      fontSize={"14px"}
                      value={state.industry}
                      onChange={(e) =>
                        setter({ type: "industry", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <FormControl isRequired mt={"20px"} mb={"20px"}>
                    <FormLabel mb={"3px"} color="#666666" fontWeight={"400"}>
                      Preferred Department/Function{" "}
                    </FormLabel>
                    <Input
                      placeholder="Enter department"
                      type={"text"}
                      fontSize={"14px"}
                      value={state.department}
                      onChange={(e) =>
                        setter({ type: "department", payload: e.target.value })
                      }
                    />
                  </FormControl>
  
                  <Text as={"span"} fontSize="14px">
                    By registering, you agree to our{" "}
                    <Text as={"span"} color="skyblue">
                      Terms and Conditions, Privacy Policy
                    </Text>{" "}
                    and default mailer and communications settings governing the
                    use of monsterindia.com.
                  </Text>
  
                  <Button
                  
                    mt={"30px"}
                    bg="#57b228"
                    color={"white"}
                    fontSize={"20px"}
                    padding="25px"
                    marginLeft={"350px"}
                    onClick={handleSignup}
                  >
                    Register Me
                  </Button>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  export default Signup;