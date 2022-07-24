import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Image,
    Text,
    
  } from '@chakra-ui/react'
import { ArrowRight } from '@material-ui/icons'
import { Navigate, useNavigate } from 'react-router-dom'
  

export function Payment() {
    const navigate = useNavigate()
    const total = localStorage.getItem("total_price")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handlePay = ()=>{
        alert("Payment Link has been sent to your registered mobile number.Proceed from the link provided to you")
        navigate("/")
    }
    return (
      <>
        <Button bg={"blue"} color={"white"} w={"250px"} onClick={onOpen}>Procced To Payment</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Select Payment Options to pay </ModalHeader>
            <ModalHeader mt={"-15px"}>Rs {total}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box count={2} />
              
            <Box display={"flex"} justifyContent={"space-between"} mt={"5px"} bg={"white"} borderRadius={"5px"} p={2} border={"1px solid black"} h={38} w={400}><Image h={"80px"}  mt={"-30px"} w={"120px"} src={"https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"}/><ChevronRightIcon style={{cursor:"pointer"}} onClick={()=>handlePay()}/></Box>
            <Box display={"flex"} justifyContent={"space-between"} mt={"5px"} bg={"white"} borderRadius={"5px"} p={2} border={"1px solid black"} h={38} w={400}><Image h={"20px"} ml={"12px"} mt={"0px"} w={"110px"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/2560px-Google_Pay_Logo_%282020%29.svg.png"}/><ChevronRightIcon style={{cursor:"pointer"}} onClick={()=>handlePay()}/></Box>
            <Box display={"flex"} justifyContent={"space-between"} mt={"5px"} bg={"white"} borderRadius={"5px"} p={2} border={"1px solid black"} h={38} w={400}><Image h={"20px"} mt={"0px"} w={"50px"} src={"https://img.lovepik.com/free-png/20210919/lovepik-credit-card-png-image_400515492_wh1200.png"}/> <Text color={"grey"} ml={"-220px"}>Credit Card</Text><ChevronRightIcon style={{cursor:"pointer"}} onClick={()=>handlePay()}/></Box>
            <Box display={"flex"} justifyContent={"space-between"} mt={"5px"} bg={"white"} borderRadius={"5px"} p={2} border={"1px solid black"} h={38} w={400}><Image h={"40px"} ml={"-10px"} mt={"-10px"} w={"160px"} src={"data:image/png;base64,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"}/><ChevronRightIcon style={{cursor:"pointer"}} onClick={()=>handlePay()}/></Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }