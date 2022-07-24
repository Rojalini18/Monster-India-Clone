import { Box, Flex, Text, Image, Menu, MenuButton } from "@chakra-ui/react";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Navbar from "../Navbar/Navbar";
const CareerTips = () => {
  return (
    <Box>
        <Navbar/>
      {/* <Flex gap={18} w="50%" mt={3} ml="200px" fontSize={15} fontWeight="bold">
        <Text>JOB SEARCH <ChevronDownIcon /></Text>
        <Text>WORK FROM HOME JOBS</Text>
        <Text>FREE JOB ALERT</Text>
        <Text>PREMIUM SERVICES</Text>
      </Flex>

      <Flex mt="50px" ml={650} gap="200px">
        <Image src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/09/monster-logo-1.png" />

        <Flex w={"30%"} justifyContent="space-between" alignItems={"center"}>
          <BsFacebook />
          <AiOutlineInstagram />
          <AiFillLinkedin />
          <AiOutlineTwitter />
          <AiFillYoutube />
          <BiSearch />
          <Image
            w={10}
            h={10}
            borderRadius="50%"
            border={"1px solid"}
            src="https://monsterminioqa.blob.core.windows.net/career-advice/2022/06/profile_pic.png"
          />
        </Flex>
      </Flex> */}
      <Box
        borderTop={"1px solid #bcb8b1"}
        mt="30px"
        borderBottom="1px solid #bcb8b1"
        alignItems={"center"}
        p={5}
      >
        <Flex gap="20px" m="auto" ml={180}>
          <Menu m={"auto"}>
            <MenuButton fontSize={15} fontWeight="bold">
              CAREER MANAGEMENT
              <ChevronDownIcon />
            </MenuButton>
            <MenuButton fontSize={15} fontWeight="bold">
              CAREER WOMEN
              <ChevronDownIcon />
            </MenuButton>
            <MenuButton fontSize={15} fontWeight="bold">
              COVID-19 CAREER ADVICE
              <ChevronDownIcon />
            </MenuButton>
            <MenuButton fontSize={15} fontWeight="bold">
              INTERVIEW TIPS
              <ChevronDownIcon />
            </MenuButton>
            <MenuButton fontSize={15} fontWeight="bold">
              JOB SEARCH STRATEGY
              <ChevronDownIcon />
            </MenuButton>
            <MenuButton fontSize={15} fontWeight="bold">
              CATEGORIES
              <ChevronDownIcon />
            </MenuButton>
          </Menu>
        </Flex>
      </Box>
      {/* ************************** */}
      <Flex p={"50px 50px 50px 50px"} width={"100%"} gap="20px">
        <Box width={"50%"}>
          <Text bg={"#540d6e"} color="white" w={120} fontSize="12px">
            INTERVIEW TIPS
          </Text>
          <Text textAlign={"left"} fontSize="33px" fontWeight={"bold"}>
            IT Analyst Job Description
          </Text>
          <Text textAlign={"left"} fontSize="13px">
            Team Monster -July 20, 2022
          </Text>
          <Image
            w={720}
            src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/IT-Analyst-Job-description-1.jpg"
          />
          <Text textAlign={"left"}>
            Information Technology uses computers to create, process, retrieve,
            store and exchange electronic data and information. It is broadly
            used in business operations and is considered a subset of
            computers...
          </Text>
        </Box>
        <Box w={"25%"}>
          <Box>
            <Image
              h={150}
              w={400}
              src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/IT-Analyst-Job-description-1.jpg"
            />
            <Text bg={"#540d6e"} color="white" w={120} fontSize="12px">
              INTERVIEW TIPS
            </Text>
            <Text textAlign={"left"} fontSize="16px" fontWeight={"bold"}>
              IT Analyst Job Description
            </Text>
            <Text textAlign={"left"} fontSize="13px">
              Team Monster -July 20, 2022
            </Text>
          </Box>
          <Box mt={"20px"}>
            <Image
              h={150}
              w={400}
              src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/Interior-Designer-JD.jpg"
            />
            <Text bg={"#540d6e"} color="white" w={120} fontSize="12px">
              INTERVIEW TIPS
            </Text>
            <Text textAlign={"left"} fontSize="16px" fontWeight={"bold"}>
              Interior Designer Job Description
            </Text>
            <Text textAlign={"left"} fontSize="13px">
              Team Monster -July 20, 2022
            </Text>
          </Box>
          <Box mt={"20px"}>
            <Image
              h={150}
              w={400}
              src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/Inside-Sales-JD.jpg"
            />
            <Text bg={"#540d6e"} color="white" w={120} fontSize="12px">
              INTERVIEW TIPS
            </Text>
            <Text textAlign={"left"} fontSize="16px" fontWeight={"bold"}>
              Inside Sales Manager Job Description
            </Text>
            <Text textAlign={"left"} fontSize="13px">
              Team Monster -July 18, 2022
            </Text>
          </Box>
        </Box>
        <Box w={"25%"}>
          <Box>
            <Text textAlign={"left"} fontSize="20px" fontWeight={"bold"}>
              Editor Picks
            </Text>
            <Flex justifyContent={"space-between"} gap="30px">
              <Box textAlign={"left"} mt={"20px"}>
                <Text>IT Analyst Job Description</Text>
                <Text>July 20, 2022</Text>
              </Box>
              <Image
                w={"70px"}
                h="70px"
                borderRadius="50%"
                src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/IT-Analyst-Job-description-1.jpg"
              />
            </Flex>
          </Box>
          <Box mt="20px">
            <Image
              w="100%"
              src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/01/RHS_Banner_2.jpg"
            />
          </Box>
          <Box mt={"30px"}>
            <Text textAlign={"left"} fontSize="20px" fontWeight={"bold"}>
              Interview Tips
            </Text>

            <Flex
              alignItems={"center"}
              gap="50px"
              justifyContent={"space-between"}
            >
              <Box textAlign={"left"} mt={"5px"}>
                <Text>IT Analyst Job Description</Text>
                <Text fontSize={"14px"}>July 20, 2022</Text>
              </Box>
              <Image
                w={"50px"}
                h="50px"
                mt="30px"
                borderRadius="50%"
                src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/IT-Analyst-Job-description-1.jpg"
              />
            </Flex>

            <Flex
              alignItems={"center"}
              gap="50px"
              justifyContent={"space-between"}
            >
              <Box
                textAlign={"left"}
                mt={"5px"}
                justifyContent="space-between"
                gap={10}
              >
                <Text>Interior Designer Job </Text>
                <Text fontSize={"14px"}>July 20, 2022</Text>
              </Box>
              <Image
                w={"50px"}
                h="50px"
                mt="10px"
                borderRadius="50%"
                src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/Interior-Designer-JD.jpg"
              />
            </Flex>

            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Box textAlign={"left"} mt={"5px"}>
                <Text>Inside Sales Manager </Text>
                <Text fontSize={"14px"}>July 18, 2022</Text>
              </Box>
              <Image
                w={"50px"}
                h="50px"
                mt="10px"
                borderRadius="50%"
                src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/Inside-Sales-JD.jpg"
              />
            </Flex>
          </Box>
        </Box>
      </Flex>

      {/* ****************** */}
      <Flex p={"30px 50px 50px 50px"} width={"100%"} gap="30px" margin={"auto"}>
        <Box bg={"#f5ebe0"} w="33%" p={"20px"}>
          <Text
            textAlign={"left"}
            fontSize="22px"
            fontWeight={"bold"}
            mt={"30px"}
            color="#27187e"
          >
            New in Job Search
          </Text>
          <Text textAlign={"left"} fontSize="16px" fontWeight={"bold"}>
            5 Must-Read Books for Accountants
          </Text>
          <Text textAlign={"left"} fontSize="14px">
            Team Monster - June 7, 2021
          </Text>
          <Image
            w={"80px"}
            h="80px"
            mt="-40px"
            ml={310}
            borderRadius="50%"
            src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/Interior-Designer-JD.jpg"
          />
        </Box>

        <Box bg={"#f5ebe0"} w="33%" p={"20px"}>
          <Text
            textAlign={"left"}
            fontSize="22px"
            fontWeight={"bold"}
            mt={"30px"}
            color="#27187e"
          >
            New in Interview Tips
          </Text>
          <Text textAlign={"left"} fontSize="16px" fontWeight={"bold"}>
            IT Analyst Job Description
          </Text>
          <Text textAlign={"left"} fontSize="14px">
            July 20, 2022
          </Text>
          <Image
            w={"80px"}
            h="80px"
            mt="-40px"
            ml={310}
            borderRadius="50%"
            src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/07/IT-Analyst-Job-description-1.jpg"
          />
        </Box>

        <Box bg={"#f5ebe0"} w="33%" p={"20px"}>
          <Text
            textAlign={"left"}
            fontSize="22px"
            fontWeight={"bold"}
            mt={"5px"}
            mb="15px"
            color="#27187e"
          >
            Stay Connected
          </Text>
          <Flex justifyContent={"space-around"}>
            <Box bg={"#4361ee"} width="110px" h={100} color="white" p="10px">
              <Box ml="30px">
                <BsFacebook />
              </Box>

              <Text>759,772</Text>
              <Text>Fans</Text>
            </Box>

            <Box bg={"#4cc9f0"} width="110px" h={100} color="white" p="10px">
              <Box ml="30px">
                <AiOutlineTwitter />
              </Box>
              <Text>22,200</Text>
              <Text>Followers</Text>
            </Box>

            <Box bg="#c32f27" width="110px" h={100} color="white" p="10px">
              <Box ml="30px">
                <AiFillYoutube />
              </Box>

              <Text>8,005</Text>
              <Text>Subscribers</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* ***********************  */}
      <Flex
       
        p={"50px 50px 50px 50px"}
        width={"100%"}
        gap="50px"
      >
        <Flex
          w={"25%"}
          textAlign="left"
          direction={"column"}
          gap="20px"
          border={"1px solid #f7d6e0"}
          p="20px"
        >
          <Box>
            <Text fontSize={25} color="#390099" mb={"20px"} fontWeight="bold">
              Covid-19 Career
            </Text>
            <Text fontSize={17} fontWeight="bold">
              Companies that are Hiring Amid Coronavirus Outbreak
            </Text>
            <Text fontSize={14}>September 8, 2020</Text>
          </Box>
          <Box borderTop={"1px solid #f7d6e0"} pt="7px">
            <Text fontSize={17} fontWeight="bold">
              Tips and Ideas to Set Up a Home Office You Love
            </Text>
            <Text fontSize={14}>August 20, 2020</Text>
          </Box>
          <Box borderTop={"1px solid #f7d6e0"} pt="7px">
            <Text fontSize={17} fontWeight="bold">
              Coronavirus Pandemic is Changing the Way Recruiters Hire
            </Text>
            <Text fontSize={14}>July 22, 2020</Text>
          </Box>
          <Box borderTop={"1px solid #f7d6e0"} pt="7px">
            <Text fontSize={17} fontWeight="bold">
              Top 10 In-demand Jobs in Coronavirus Pandemic
            </Text>
            <Text fontSize={14}>July 17, 2020</Text>
          </Box>
          <Box borderTop={"1px solid #f7d6e0"} pt="7px">
            <Text fontSize={17} fontWeight="bold">
              Increase Your Chances of Earning Online with these 6 Skills
            </Text>
            <Text fontSize={14}>June 30, 2020</Text>
          </Box>
        </Flex>
        {/* ************ */}

        <Flex w={"85%"} direction="column" gap={10}>
          <Flex gap={10} pr={10}>
            <Box>
              <Image
                w={500}
                src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/09/career-advice.jpg"
              />
            </Box>
            <Box textAlign={"left"}>
              <Text
                fontSize={20}
                fontWeight={"bold"}
                borderTop="1px solid #edddd4"
              >
                Career Guidance, Courses and Career Options After 12
              </Text>
              <Text fontSize={13}>Team Monster - September 1, 2021</Text>
              <Text mt={2} fontSize={16}>
                Career guidance after 12th Career guidance after 12 that will
                determine the rest of your life for you is not an easy decision
                for a...
              </Text>
            </Box>
          </Flex>

          <Flex gap={10} pr={10}>
            <Box>
              <Image
                w={650}
                src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/career-option.jpg"
              />
            </Box>
            <Box textAlign={"left"}>
              <Text
                fontSize={20}
                fontWeight={"bold"}
                borderTop="1px solid #edddd4"
              >
                Career option after 12th Humanities
              </Text>
              <Text fontSize={13}>Team Monster - August 31, 2021</Text>
              <Text mt={2} fontSize={16}>
                Unlike Science and Commerce, courses after 12th humanities do
                not provide Limited career choices. On the contrary, the
                Humanities courses help open the most...
              </Text>
            </Box>
          </Flex>

          <Flex gap={10} pr={10}>
            <Box>
              <Image
                w={600}
                src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/Courses-for-PCM-Students-After-Class-12th.jpg"
              />
            </Box>
            <Box textAlign={"left"}>
              <Text
                fontSize={20}
                fontWeight={"bold"}
                borderTop="1px solid #edddd4"
              >
                Courses after 12th Commerce without Maths
              </Text>
              <Text fontSize={13}>Team Monster - August 31, 2021</Text>
              <Text mt={2} fontSize={16}>
                After graduating high school, deciding on the course and the
                college where the student wants to build their career further,
                is an important decision....
              </Text>
            </Box>
          </Flex>

          <Flex gap={10} pr={10}>
            <Box>
              <Image
                w={600}
                h={150}
                src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/PCM-Students-After-Class-12th.jpg"
              />
            </Box>
            <Box textAlign={"left"}>
              <Text
                fontSize={20}
                fontWeight={"bold"}
                borderTop="1px solid #edddd4"
              >
                Courses for PCM Students After Class 12th
              </Text>
              <Text fontSize={13}>Team Monster - September 1, 2021</Text>
              <Text mt={2} fontSize={16}>
                12th grade is one of the life changing periods in every
                students’ life. It comes with the responsibility of answering
                the greatest question that...
              </Text>
            </Box>
          </Flex>
        </Flex>

        {/* ****** */}
        <Flex border={"1px solid #d5c7bc"} p={5} h={500}>
          <Box>
            <Text textAlign={"left"} fontSize={25} fontWeight="bold">Resume & Cover Letters</Text>
           <Flex textAlign={"left"} mt={8} gap={8}>
             <Box>
             <Text fontSize={18}>Student Resume Examples: Samples, Guide & Writing Tips to get Internship Quickly</Text>
             <Text fontSize={14}>July 23, 2021</Text>
             </Box>

             <Image h={100} w={100} src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/07/student-resume-examples.jpg"/>
           </Flex>

           <Flex textAlign={"left"} mt={8}>
             <Box>
             <Text fontSize={18}>Key Skills in Resume for Freshers and Experienced</Text>
             <Text fontSize={14}>July 23, 2021</Text>
             </Box>

             <Image h={100} w={100} src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/07/student-resume-examples.jpg"/>
           </Flex>

           <Flex textAlign={"left"} mt={8}>
             <Box>
             <Text fontSize={18}>Objective for Resume for Fresher and Experienced</Text>
             <Text fontSize={14}>July 23, 2021</Text>
             </Box>

             <Image h={100} w={100} src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/07/student-resume-examples.jpg"/>
           </Flex>

            <Box  border={"1px solid #d5c7bc"}  mt={81} h={300} w={400}>
              <Text>- Advertisement -</Text>
              <Image m="auto" mt={-30} p={10} src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/01/RHS_Banner_Monster.jpg" />
            </Box>
            <Box></Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CareerTips;