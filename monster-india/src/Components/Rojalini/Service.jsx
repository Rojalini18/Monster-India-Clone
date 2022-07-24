import {
  HStack,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Employee from "./Employee";
import { FiPhoneCall } from "react-icons/fi";
export default function Service() {
  return (
    <>
      <Stack>
        <Center>
          <HStack spacing={"680"} mt={"15"}>
            <Box>
              <Heading
                color={"gray.800"}
                position={"relative"}
                left={"1"}
                // bottom={"20"}
                fontSize={"25"}
              >
                Buy Premium Services
              </Heading>
              <Text>Give your job search journey a boost</Text>
            </Box>
            <Box>
              <Button
                leftIcon={<FiPhoneCall />}
                bg={"#60489d"}
                color={"#fff"}
                variant="solid"
              >
                Call me back
              </Button>
            </Box>
          </HStack>
        </Center>

        <Box position={"relative"} left={"28"}>
          <Text align={"left"}>
            Premium Services are paid services specially crafted for job
            seekers. These services are offered by Monster to help the seekers
            get in touch with Industry Experts <br /> and professionals. It
            helps candidates with their Resume, highlighting profiles in our
            database and making them job-ready through Mock Interviews!
          </Text>
        </Box>

        <Center>
          <Stack>
            {/* <Grid templateColumns="repeat(2, 1fr)" gap={"6"}> */}
            <SimpleGrid columns={2} spacingX="15px" spacingY="-2px">
              <Center>
                <Stack
                  borderWidth="1px"
                  borderRadius="15"
                  w={{ sm: "100%", md: "540px" }}
                  direction={{ base: "column", md: "row" }}
                  bg={"white"}
                  padding={4}
                >
                  <Flex flex={1} bg="#efedf6">
                    <Image
                      objectFit="fill"
                      boxSize="100%"
                      src={
                        "https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-services.png"
                      }
                    />
                  </Flex>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    p={1}
                    pt={2}
                  >
                    <Text fontWeight={600} color={"gray.500"} align={"left"}>
                      Featured Profile
                    </Text>
                    <Heading fontSize={"0.9xl"} fontFamily={"body"}>
                      Rank your profile at the top to make you stand out in a
                      crowd of jobseekers
                    </Heading>

                    <Stack
                      width={"100%"}
                      mt={"2rem"}
                      direction={"row"}
                      padding={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Button
                        size={"lg"}
                        h={"7vh"}
                        // flex={1}
                        fontSize={"sm"}
                        // rounded={'full'}
                        bg={"#60489d"}
                        color={"white"}
                        _hover={{
                          bg: "#60489d",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                      >
                        Starting at Rs.1999
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text mt={-7}>
                        <Link color={"#60489d"}>Benefits</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Center>
              {/* 2nd */}
              <Center py={6}>
                <Stack
                  borderWidth="1px"
                  borderRadius="15"
                  w={{ sm: "100%", md: "540px" }}
                  direction={{ base: "column", md: "row" }}
                  bg={"white"}
                  padding={4}
                >
                  <Flex flex={1} bg="#efedf6">
                    <Image
                      objectFit="fill"
                      boxSize="100%"
                      src={
                        "https://media.monsterindia.com/trex/public/default/images/career-services/resume-writing-services.png"
                      }
                    />
                  </Flex>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    p={1}
                    pt={2}
                  >
                    <Text fontWeight={600} color={"gray.500"} align={"left"}>
                      Resume Writting
                    </Text>
                    <Heading fontSize={"0.9xl"} fontFamily={"body"}>
                      Get professionally written resume which helps you get your
                      dream job
                    </Heading>

                    <Stack
                      width={"100%"}
                      mt={"2rem"}
                      direction={"row"}
                      padding={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Button
                        size={"lg"}
                        h={"7vh"}
                        // flex={1}
                        fontSize={"sm"}
                        bg={"#60489d"}
                        color={"white"}
                        _hover={{
                          bg: "#60489d",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                      >
                        Starting at Rs.1999
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text mt={-7}>
                        <Link color={"#60489d"}>Benefits</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Center>
              {/* 3rd */}
              <Center py={6}>
                <Stack
                  borderWidth="1px"
                  borderRadius="15"
                  w={{ sm: "100%", md: "540px" }}
                  // height={{ sm: '476px', md: '20rem' }}
                  direction={{ base: "column", md: "row" }}
                  bg={"white"}
                  padding={4}
                >
                  <Flex flex={1} bg="#efedf6">
                    <Image
                      objectFit="fill"
                      boxSize="100%"
                      src={
                        "https://media.monsterindia.com/trex/public/default/images/career-services/career-booster-services.png"
                      }
                    />
                  </Flex>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    p={1}
                    pt={2}
                  >
                    <Text fontWeight={600} color={"gray.500"} align={"left"}>
                      Career Booster
                    </Text>
                    <Heading fontSize={"0.9xl"} fontFamily={"body"}>
                      Get the power of Resume Writing & Featured Profile to
                      boost your job search
                    </Heading>

                    <Stack
                      width={"100%"}
                      mt={"2rem"}
                      direction={"row"}
                      padding={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Button
                        size={"lg"}
                        h={"7vh"}
                        // flex={1}
                        fontSize={"sm"}
                        bg={"#60489d"}
                        color={"white"}
                        _hover={{
                          bg: "#60489d",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                      >
                        Starting at Rs.1999
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text mt={-7}>
                        <Link color={"#60489d"}>Benefits</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Center>

              {/* 4th */}
              <Center py={6}>
                <Stack
                  borderWidth="1px"
                  borderRadius="15"
                  w={{ sm: "100%", md: "540px" }}
                  direction={{ base: "column", md: "row" }}
                  bg={"white"}
                  padding={4}
                >
                  <Flex flex={1} bg="#efedf6">
                    <Image
                      objectFit="fill"
                      boxSize="100%"
                      src={
                        "https://media.monsterindia.com/trex/public/default/images/career-services/resume-highlighter-services.png"
                      }
                    />
                  </Flex>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    p={1}
                    pt={2}
                  >
                    <Text fontWeight={600} color={"gray.500"} align={"left"}>
                      Profile Highlighter
                    </Text>
                    <Heading fontSize={"0.9xl"} fontFamily={"body"}>
                      Differentiate yourself from the crowd and increase
                      visibility to the recruiters
                    </Heading>

                    <Stack
                      width={"100%"}
                      mt={"2rem"}
                      direction={"row"}
                      padding={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Button
                        size={"lg"}
                        h={"7vh"}
                        // flex={1}
                        fontSize={"sm"}
                        // rounded={'full'}
                        bg={"#60489d"}
                        color={"white"}
                        _hover={{
                          bg: "#60489d",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                      >
                        Starting at Rs.1999
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text mt={-7}>
                        <Link color={"#60489d"}>Benefits</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Center>
              {/* 5th */}
              <Center py={6}>
                <Stack
                  borderWidth="1px"
                  borderRadius="15"
                  w={{ sm: "100%", md: "540px" }}
                  // height={{ sm: '476px', md: '20rem' }}
                  direction={{ base: "column", md: "row" }}
                  bg={"white"}
                  padding={4}
                >
                  <Flex flex={1} bg="#efedf6">
                    <Image
                      objectFit="fill"
                      boxSize="100%"
                      src={
                        "https://media.monsterindia.com/trex/public/default/images/career-services/linkedin-makeover-services.png"
                      }
                    />
                  </Flex>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    // alignItems="center"
                    p={1}
                    pt={2}
                  >
                    <Text fontWeight={600} color={"gray.500"} align={"left"}>
                      LinkedIn Makeover
                    </Text>
                    <Heading fontSize={"0.9xl"} fontFamily={"body"}>
                      Transform your linkedIn profile to elevate your
                      professional brand
                    </Heading>

                    <Stack
                      width={"100%"}
                      mt={"2rem"}
                      direction={"row"}
                      padding={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Button
                        size={"lg"}
                        h={"7vh"}
                        // flex={1}
                        fontSize={"sm"}
                        bg={"#60489d"}
                        color={"white"}
                        _hover={{
                          bg: "#60489d",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                      >
                        Starting at Rs.1999
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text mt={-7}>
                        <Link color={"#60489d"}>Benefits</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Center>
              {/* 6th */}
              <Center py={6}>
                <Stack
                  borderWidth="1px"
                  borderRadius="15"
                  w={{ sm: "100%", md: "540px" }}
                  direction={{ base: "column", md: "row" }}
                  bg={"white"}
                  padding={4}
                >
                  <Flex flex={1} bg="#efedf6">
                    <Image
                      objectFit="fill"
                      boxSize="100%"
                      src={
                        "https://media.monsterindia.com/trex/public/default/images/career-services/mock-interview-services.png"
                      }
                    />
                  </Flex>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    p={1}
                    pt={2}
                  >
                    <Text fontWeight={600} color={"gray.500"} align={"left"}>
                      Mock Interview
                    </Text>
                    <Heading fontSize={"0.9xl"} fontFamily={"body"}>
                      Gain confidence to crack even the toughest interviews!
                    </Heading>

                    <Stack
                      width={"100%"}
                      mt={"2rem"}
                      direction={"row"}
                      padding={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Button
                        size={"lg"}
                        mt={"10"}
                        h={"7vh"}
                        // flex={1}
                        fontSize={"sm"}
                        bg={"#60489d"}
                        color={"white"}
                        _hover={{
                          bg: "#60489d",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                      >
                        Starting at Rs.1999
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text mt={-7}>
                        <Link color={"#60489d"}>Benefits</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Center>
              {/* </Grid> */}
            </SimpleGrid>
          </Stack>
        </Center>
      </Stack>
      <Employee />
      {/* <Footer/> */}
    </>
  );
}
