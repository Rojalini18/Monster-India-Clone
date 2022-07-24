import React from "react";
import { Link } from "react-router-dom";
import "./Emp.css";
import Footer from "./Footer";
import Os from "./Os";
import {
  Flex,
  Box,
  Image,
  Button,
  Spacer,
  
} from "@chakra-ui/react";
function Emp() {
  return (
    <div>
      <div>
        <Flex  mb={'2px'} h={"20"}>
        <Box p="10" >
          <Image
        marginTop='-4'
            src="https://media4.monsterindia.com/recruiter_2015/india/images/mon_logo.png"
            alt="logo"
            width="150px"
            height="5vh"
          />
        </Box>
        <Spacer />
        <Box p="10" marginRight='-60px' mt='5px'>
          <Button colorScheme="black" bg="white" width="130px" borderRadius='1' variant='outline' marginTop='-5'>
            <Image src="https://media.monsterindia.com/recruiter_2015/india/images/thinkinglogo.png"></Image>
          </Button>
        </Box>
        <Box p="10" mt='5px'>
          <Button  colorScheme="white" color="white" bg="#f5a623" width="130px" borderRadius='1' marginTop='-5'>
            Buy Online
          </Button>
        </Box>
      </Flex>
      </div>

      <div className="EmployerLoginMainBanner">
        <div>
          <ul>
            <li>AI in Recruiting Technology</li>
            <li>Conversational UI</li>
            <li>Data Security</li>
            <li>Power Recruiting</li>
          </ul>
          <div>
            <p>Introducing</p>
            <h2>Monster Better Together Experience</h2>
          </div>
        </div>
        <div className="EmployerLoginMainBox">
          <div className="EmployerLoginSubBox">
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="password" placeholder="Password" />
          </div>
          <div className="EmployerLoginForget">
            <small>Forgot Password?</small>
          </div>
          <button>Login</button>
          <div className="EmployerLoginNew">
            New User{" "}
            <Link to="/employer/sign-up">
              <strong>?Sign UP</strong>{" "}
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Os />
      <Footer />
    </div>
  );
}

export default Emp;
