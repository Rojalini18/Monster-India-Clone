import {
    Box,
    Breadcrumb,
    Text,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Flex,
    Button,
    Grid,
    GridItem,
    Image,
  } from "@chakra-ui/react";
  
  import { BsFillTelephoneFill } from "react-icons/bs";
  import React from "react";
  import { FaGraduationCap } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
  
  const PremiumServices = () => {
    const navigate = useNavigate()
    return (
        <>
        <Navbar/>
      <Box w={"90%"} m="auto" mt="20px">
        <Box textAlign={"left"} fontSize={15} color="gray">
          <Breadcrumb spacing="8px" separator={">"}>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
  
            <BreadcrumbItem>
              <BreadcrumbLink>Premium Services</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
  
        <Flex justifyContent={"space-between"} mt={"20px"} alignItems="center">
          <Box>
            <Text fontSize={30} fontWeight={"bold"}>
              Buy Premium Services
            </Text>
            <Text color={"gray"} fontSize={20} mt={10}>
              Give your job search journey a boost
            </Text>
          </Box>
          <Button w={300} h={"50px"} bg="#60489D" color={"white"}>
            <BsFillTelephoneFill />
            Call me back
          </Button>
        </Flex>
  
        <Box>
          <Text textAlign={"left"} mt={"20px"} fontSize={"18px"}>
            Premium Services are paid services specially crafted for job seekers.
            These services are offered by Monster to help the seekers get in touch
            with Industry Experts and professionals. It helps candidates with
            their Resume, highlighting profiles in our database and making them
            job-ready through Mock Interviews!
          </Text>
        </Box>
  
        <Grid
          templateColumns="repeat(2,1fr)"
          gap="50px"
          w={"80%"}
          m="auto"
          mt={"40px"}
        >
          <GridItem border={"1px solid #dad7cd"} p="20px" borderRadius={"20px"}>
            <Flex gap={"20px"}>
              <Image
                bg={"#dee2ff"}
                borderRadius={"20px"}
                w={"250px"}
                src="https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-services.png"
              />
              <Box textAlign={"left"}>
                <Text fontSize={"18"} fontWeight="bold">
                  Featured Profile
                </Text>
                <Text fontSize={"17"} color="gray">
                  Rank your profile at the top to make you stand out in a crowd of
                  jobseekers
                </Text>
                <Button onClick={()=>navigate("/servicepackage")} mt="10px" bg="#60489D" color={"white"}>
                  Starting at Rs. 1999
                </Button>
                <Text mt={"30px"} color={"#7209b7"}>
                  Benefits
                </Text>
              </Box>
            </Flex>
          </GridItem>
  
          <GridItem border={"1px solid #dad7cd"} p="20px" borderRadius={"20px"}>
            <Flex gap={"20px"}>
              <Image
                bg={"#dee2ff"}
                borderRadius={"20px"}
                w={"250px"}
                src="https://media.monsterindia.com/trex/public/default/images/career-services/resume-writing-services.png"
              />
              <Box textAlign={"left"}>
                <Text fontSize={"18"} fontWeight="bold">
                  Resume Writing
                </Text>
                <Text fontSize={"17"} color="gray">
                  Get professionally written resume which helps you get your dream
                  job
                </Text>
                <Button onClick={()=>navigate("/servicepackage")} mt="10px" bg="#60489D" color={"white"}>
                  Starting at Rs. 2999
                </Button>
                <Text mt={"30px"} color={"#7209b7"}>
                  Benefits
                </Text>
              </Box>
            </Flex>
          </GridItem>
  
          <GridItem border={"1px solid #dad7cd"} p="20px" borderRadius={"20px"}>
            <Flex gap={"20px"}>
              <Image
                bg={"#dee2ff"}
                borderRadius={"20px"}
                w={"250px"}
                src="https://media.monsterindia.com/trex/public/default/images/career-services/career-booster-services.png"
              />
              <Box textAlign={"left"}>
                <Text fontSize={"18"} fontWeight="bold">
                  Career Booster
                </Text>
                <Text fontSize={"17"} color="gray">
                  Get the power of Resume Writing & Featured Profile to boost your
                  job search
                </Text>
                <Button onClick={()=>navigate("/servicepackage")} mt="10px" bg="#60489D" color={"white"}>
                  Starting at Rs. 3999
                </Button>
                <Text mt={"30px"} color={"#7209b7"}>
                  Benefits
                </Text>
              </Box>
            </Flex>
          </GridItem>
  
          <GridItem border={"1px solid #dad7cd"} p="20px" borderRadius={"20px"}>
            <Flex gap={"20px"}>
              <Image
                bg={"#dee2ff"}
                borderRadius={"20px"}
                w={"250px"}
                src="https://media.monsterindia.com/trex/public/default/images/career-services/resume-highlighter-services.png"
              />
              <Box textAlign={"left"}>
                <Text fontSize={"18"} fontWeight="bold">
                  Profile Highlighter
                </Text>
                <Text fontSize={"17"} color="gray">
                  Differentiate yourself from the crowd and increase visibility to
                  the recruiters
                </Text>
                <Button onClick={()=>navigate("/servicepackage")} mt="10px" bg="#60489D" color={"white"}>
                  Starting at Rs. 999
                </Button>
                <Text mt={"30px"} color={"#7209b7"}>
                  Benefits
                </Text>
              </Box>
            </Flex>
          </GridItem>
  
          <GridItem border={"1px solid #dad7cd"} p="20px" borderRadius={"20px"}>
            <Flex gap={"20px"}>
              <Image
                bg={"#dee2ff"}
                borderRadius={"20px"}
                w={"250px"}
                src="https://media.monsterindia.com/trex/public/default/images/career-services/linkedin-makeover-services.png"
              />
              <Box textAlign={"left"}>
                <Text fontSize={"18"} fontWeight="bold">
                  LinkedIn Makeover
                </Text>
                <Text fontSize={"17"} color="gray">
                  Transform your linkedIn profile to elevate your professional
                  brand
                </Text>
                <Button onClick={()=>navigate("/servicepackage")} mt="10px" bg="#60489D" color={"white"}>
                  Starting at Rs. 2599
                </Button>
                <Text mt={"30px"} color={"#7209b7"}>
                  Benefits
                </Text>
              </Box>
            </Flex>
          </GridItem>
  
          <GridItem border={"1px solid #dad7cd"} p="20px" borderRadius={"20px"}>
            <Flex gap={"20px"}>
              <Image
                bg={"#dee2ff"}
                borderRadius={"20px"}
                w={"250px"}
                src="https://media.monsterindia.com/trex/public/default/images/career-services/mock-interview-services.png"
              />
              <Box textAlign={"left"}>
                <Text fontSize={"18"} fontWeight="bold">
                  Mock Interview
                </Text>
                <Text fontSize={"17"} color="gray">
                  Gain confidence to crack even the toughest interviews!
                </Text>
                <Button onClick={()=>navigate("/servicepackage")} mt="10px" bg="#60489D" color={"white"}>
                  Starting at Rs. 2599
                </Button>
                <Text mt={"30px"} color={"#7209b7"}>
                  Benefits
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
        <Flex gap={10} w="90%" m={"auto"} mt="50px" ml={150}>
          <Image
            bg={"#dee2ff"}
            borderRadius="20px"
            w={"350px"}
            p="10px"
            src="https://media.monsterindia.com/trex/public/default/images/career-services/monster-education.png"
          />
          <Box>
            <Box textAlign={"left"}>
              <Text fontSize={"35"} fontWeight="medium">
                Monster Education
              </Text>
              <Text fontSize={"19"} mt={10}>
                Expand your learnings and skills, take an online
              </Text>
              <Text fontSize={"19"}>
                certificate course to further your career growth.
              </Text>
            </Box>
            <Flex mt="30px" gap={150} lineHeight="30px" color={"#60489D"}>
              <Box>
                <Flex fontSize={"17"}>
                  <Box mt={"5px"} mr="20px">
                    <FaGraduationCap />
                  </Box>
                  <Text>Technology Courses</Text>
                </Flex>
                <Flex fontSize={"17"}>
                  <Box mt={"5px"} mr="20px">
                    <FaGraduationCap />
                  </Box>
                  <Text>Business & Management Courses</Text>
                </Flex>
                <Flex fontSize={"17px"}>
                  <Box mt={"5px"} mr="20px">
                    <FaGraduationCap />
                  </Box>
                  <Text>Marketing & Communication Courses</Text>
                </Flex>
                <Flex fontSize={"17"}>
                  <Box mt={"5px"} mr="20px">
                    <FaGraduationCap />
                  </Box>
                  <Text>Recruiting & Communication Courses</Text>
                </Flex>
              </Box>
              <Box>
                <Flex fontSize={"17"}>
                  <Box mt={"5px"} mr="20px">
                    <FaGraduationCap />
                  </Box>
                  <Text>Law & Security Courses</Text>
                </Flex>
                <Flex fontSize={"17"}>
                  <Box mt={"5px"} mr="20px">
                    <FaGraduationCap />
                  </Box>
                  <Text>Finance Management Courses</Text>
                </Flex>
                <Flex fontSize={"17"}>
                  <Box mt={"5px"} mr="20px">
                    <FaGraduationCap />
                  </Box>
                  <Text>Quality Management Courses</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Footer/>
      </>
    );
  };
  
  export default PremiumServices;