import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const navigate = useNavigate()
  // const signup_data=useSelector(state=>state.signup_data)
  let user_data = JSON.parse(localStorage.getItem("user_data"))
  // let user_da=signup_data

  const handleLogout = ()=>{
    localStorage.removeItem("user_data")
    navigate("/")
  }
  
  // console.log(eachSignup_data)
  return (
    <Box  w="70%" m={"auto"} mt={10}>
      
      <Text textAlign={"left"} fontSize={22} fontWeight="medium" mb={2}>
        My Profile
      </Text>
      <Flex w="100%" gap={10}>
       <Box w={"30%"}>
       <Box boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"} 
        h={380}
        p={5} >
          <Image
            m={"auto"}
            w={100}
            h={100}
            borderRadius="50%"
            mb={10}
            src="https://www.monsterindia.com/seeker/images/user-avtar.png"
          />
          <Text textAlign="center" fontSize={20} fontWeight={"bold"} mt={2}>
            {/* Mamata Ghanshyam Ingole */}
            {user_data.name}
          </Text>
          <Text textAlign="center" color={"gray"} mt={2}>
          Bengaluru
          </Text>
          <Text textAlign="center" fontSize={18} fontWeight="medium" mt={2}>
                 {user_data.experience>0 ? "Experienced" : "Fresher"}
          </Text>
          <Text textAlign="center" mt={1}>
          9840404214
          </Text>
          <Text textAlign="center" fontSize={16} mt={1}>
          {user_data.email}
          </Text>
          <Button onClick={handleLogout} ml={"90px"} mt={"20px"} bg={"red"}>Logout</Button>
          
        </Box>
        <Box bg={"#f2cc8f"} h={150} mt={5}>
          <Flex >
              <Image src="https://media.monsterindia.com/trex/search/images/beware-icon.png" />
              <Box mt={5} textAlign={"left"}>
                  <Text fontWeight={"medium"}>Beware of fraud</Text>
                  <Text fontSize={"14px"}>Monster or it's partners do not charge any money from job seekers for job offers.</Text>
                  <Text textAlign={"right"} pr={5} color={"#4361ee"}>Know More</Text>
              </Box>
          </Flex>
        </Box>
       </Box>
        <Box w={"65%"}>
          <Box
           boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}
            p={"15px 0px 25px 20px"}
            mt={1}
            box-shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          >
          <Flex justifyContent={"space-between"} w="95%">
          <Box>
           <Text textAlign={"left"} fontWeight="medium" fontSize={20}>
              Skills
            </Text>
            <Text textAlign={"left"}>C++,Java,React</Text>
           </Box>
           <Text fontWeight={"bold"} color="#3a0ca3">+Add</Text>
          </Flex>
          </Box>
          <Box
            boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}
            p={"15px 0px 25px 20px"}
            mt={5}
            box-shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          >
           <Flex justifyContent={"space-between"} w="95%">
           <Box>
           <Text textAlign={"left"} fontWeight="medium" fontSize={20}>
              IT Skills
            </Text>
            <Text textAlign={"left"}>
              Helps recruiter in finding you for relevant jobs.
            </Text>
            
           </Box>
           <Text fontWeight={"bold"} color="#3a0ca3">+Add</Text>
           </Flex>
          </Box>
          <Box
           
            p={"15px 0px 25px 20px"}
            mt={5}
           
            boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}
           
          >
           <Flex justifyContent={"space-between"} w="95%">
           <Box>
            <Text textAlign={"left"} fontWeight="medium" fontSize={20}>
              Work Experience
            </Text>
            <Text textAlign={"left"}>
              Helps recruiters map your candidature against job vacancies they
              may have.
            </Text>
            </Box>
            <Text fontWeight={"bold"} color="#3a0ca3">+Add</Text>
           </Flex>
          </Box>

          <Box  boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  p={"15px 0px 25px 20px"}
            mt={5}>
 <Text textAlign={"left"} fontSize="20" fontWeight={"medium"}>Personal Details & Job Preferences</Text>
            <Flex mt={5} gap={100} >
             
              <Box >
                <Flex gap={70}  mt={5} >
                  <Text>Name :</Text>
                  <Text> {user_data.name}</Text>
                </Flex>
                <Flex  gap={8} mt={5} >
                  <Text>Home Town :</Text>
                  <Text> Bengaluru</Text>
                </Flex>
                <Flex  gap={69} mt={5} >
                  <Text>Email :</Text>
                  <Text> {user_data.email}</Text>
                </Flex>
                <Flex  gap={62} mt={5} >
                  <Text>Mobile :</Text>
                  <Text> 9840404214</Text>
                </Flex>
              </Box>
              <Box>
              <Flex  gap={5}  mt={5}>
                  <Text>Experience in years :</Text>
                  <Text> 5 years</Text>
                </Flex>
                <Flex  gap={83}  mt={5}>
                  <Text>Industry :</Text>
                  <Text> Software Industry</Text>
                </Flex>
                <Flex  gap={70}  mt={5}>
                  <Text>Department :</Text>
                  <Text> Coder</Text>
                </Flex>
                
              </Box>
            </Flex>
          </Box>
         <Box   mt={5} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  p={"15px 0px 25px 20px"}>
                   <Text textAlign={"left"} fontSize={20} fontWeight={"medium"}>Online Presence</Text>
                   <Box textAlign={"left"} mt={5} lineHeight={7}>
                       <Text fontWeight={"medium"} fontSize={17}>Social Profile</Text>
                       <Text fontSize={14} color="gray">Add links to your social profiles (eg. LinkedIn, Facebook etc)</Text>
                       <Text fontSize={16}>Enter URL of your Facebook/Twitter/LinkedIn profiles</Text>
                   </Box>
                   <Box textAlign={"left"} mt={9} lineHeight={7}>
                       <Text fontWeight={"medium"} fontSize={17}>Work Sample</Text>
                       <Text fontSize={14} color="gray">Add links to your projects (eg. Github, Behance, Kaggle etc)</Text>
                       <Text fontSize={16}> Enter URL of your Github/Behance/Kaggle profiles</Text>
                   </Box>
         </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfilePage;