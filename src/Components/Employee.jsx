import {
    Box,
    HStack,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Image,
    FormLabel,
  } from "@chakra-ui/react";
  
  export default function Employee() {
    return (
      <Box>
        <Container
          position={"relative"}
          bottom={"10"}
          mt={"10"}
          bg={"#efedf6"}
          as={SimpleGrid}
          maxW={"6xl"}
          w={"81%"}
          maxH={"2xl"}
          h={"70vh"}
          rounded={"10"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Stack
              direction={"row"}
              align={"center"}
              position={"relative"}
              left={"24"}
            >
              <Box boxSize="md" position={"relative"} left={"24"}>
                <Heading
                  color={"gray.800"}
                  position={"relative"}
                  left={"1"}
                  bottom={"20"}
                  fontSize={"25"}
                >
                  Talk to our experts
                </Heading>
                <Image
                  marginTop={"-50px"}
                  w={"220px"}
                  objectFit="fill"
                  src="https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/humanFig2.svg"
                  alt="monster"
                />
                <Heading
                  color={"gray.800"}
                  position={"relative"}
                  // bottom={"20"}
                  fontSize={{ base: "lg" }}
                >
                  Toll Free No: 1-800-4196666
                </Heading>
                <Heading
                  color={"gray.800"}
                  position={"relative"}
                  // bottom={"20"}
                  fontSize={{ base: "lg" }}
                >
                  Toll No: +91-40-66116611
                </Heading>
              </Box>
            </Stack>
          </Stack>
          <Stack
            // bg={"gray.50"}
            rounded={"xl"}
            position={"relative"}
            bottom={"28"}
            right={"28"}
            p={{ base: 4, sm: 6, md: 8 }}
            // spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack>
              <Heading
                color={"gray.800"}
                // lineHeight={1.1}
                fontSize={{ base: "lg" }}
              >
                CONTACT US
                {/* <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  
                </Text> */}
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm" }}>
                Our executive will get in touch with you soon
              </Text>
            </Stack>
            <Box as={"form"} mt={10}>
              <Stack>
                <FormLabel isRequired>Name*</FormLabel>
                <Input
                  placeholder="Enter Your full name"
                  bg={"white"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <FormLabel>Email ID*</FormLabel>
                <Input
                  placeholder="Enter your email-id"
                  bg={"white"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <FormLabel>Mobile Number*</FormLabel>
                <HStack>
                  <Input
                    placeholder="+91"
                    bg={"white"}
                    border={0}
                    w={"20"}
                    color={"black"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
  
                  <Input
                    placeholder="Enter Your phone number"
                    bg={"white"}
                    border={0}
                    color={"black"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                </HStack>
              </Stack>
              <Button
                fontFamily={"heading"}
                mt={5}
                w={"250px"}
                bg="#60489d"
                color={"white"}
                _hover={{
                  bg: "#60489d",
                }}
              >
                CALL ME BACK
              </Button>
            </Box>
            form
          </Stack>
        </Container>
      </Box>
    );
  }