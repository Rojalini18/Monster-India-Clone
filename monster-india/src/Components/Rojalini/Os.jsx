import React from "react";
import "./ServiceCard.css";
import TabButton from "./TabButton";
import {Center, Flex, Button, Text} from "@chakra-ui/react";

function Os() {
  return (
    
    <div className="OurServicesMain">
      <p>
        <p style={{ fontSize: "50px" }}>
          Our <strong>Services</strong>
        </p>

        <br />
        <br />
        <br />
        <small>For employers who need great people. Find Better, Faster.</small>
        <br />
      </p>
      <br />
      <br />
      <TabButton />

      <Center bg='black' h='100px' >
      <Flex gap='4'>
        <Text color='white' fontSize='25' marginTop='8px'> Many more hiring solutions</Text>
        <Button  bg='#5C4AAE' borderRadius='35' variant='link' color='white' width='170px' height='40px'>Connect with us</Button>
      </Flex>
</Center>
    </div>
  );
}

export default Os;
