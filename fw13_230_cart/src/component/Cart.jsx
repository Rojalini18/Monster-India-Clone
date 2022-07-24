import { Box ,Text, Heading, Image, Divider, Input, Button, Checkbox} from '@chakra-ui/react';
import {DeleteIcon, QuestionOutlineIcon, WarningTwoIcon} from '@chakra-ui/icons'
import React from 'react';
import Styles from './Cart.module.css'

const Cart = () => {
  return (
    <Box w={'100%'}  >
         <Box boxShadow={'md'} w={'100%'} height={'85px'} border={'1px solid transparent'}>
              <Image mt={'10px'} ml={'10px'} w={'11%'}src='https://media.monsterindia.com/trex/public/default/images/monster-logo.svg' />
         </Box>
         {/* Nav complet */}
         <Box mt={'15px'} display={'flex'} justifyContent={'space-between'} w={'100%'} height={'100px'}>
            <Box ml={'23px'} display={'flex'} w={'30%'}><Heading fontSize={'4xl'}  >Cart</Heading>
              <Text fontSize={'20px'} ml={'10px'} mt={'10px'} >1 Item</Text>
            </Box>
            <Box><Heading mt={'20px'} mr={'20px'}  color={'rgb(0,122,255)'} fontSize={'16px'}>CONTINUE SHOPPING</Heading></Box>

         </Box>
         {/* -------- */}
         <Box display={'flex'} w={'100%'}  height={'450px'}>
             <Box w={'65%'}>

                <Box  margin={'auto'} w={'85%'} height={'50px'}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                    <Text color={'gray'} fontSize={'xl'}>Product</Text>
                    <Text color={'gray'} fontSize={'xl'}>Price</Text>
                    </Box>
                    <Divider border={'1px  black'} w={'100%'}/>
                </Box>

                <Box margin={'auto'} w={'85%'} height={'50px'}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Text  fontSize={'xl'}>Featured Profile (Entry Level)</Text>
                    <Text color={'gray'} fontSize={'xl'}>Rs 1999 <DeleteIcon _hover={{color:'red'}} cursor={'pointer'} color={'lightgray'} ml={'5px'} mt={'-2px'}/></Text>
                    </Box>
                </Box>

                <Box  margin={'auto'} w={'85%'}  height={'60px'}>
                    <Box display={'flex'} bg={'rgb(250,243,237);'} ml={'45%'} height={'100%'} w={'55%'} border={'1px dotted red'}>
                          <Input bg={'white'} border={'none'} ml={'5px'} mt={'10px'} height={'70%'} w={'80%'} type="text" placeholder='HAVE COUPON' />
                          <Text mt={'15px'} ml={'8px'} color={'Darkorange'} fontWeight={'bold'} fontSize={'20px'} cursor={'pointer'}  w={'20%'}>APPLY</Text>

                    </Box>
                </Box>

                <Box  margin={'auto'} w={'85%'}  height={'60px'}>
                <Box mt={'15px'} display={'flex'} justifyContent={'space-between'}>
                    <Text  fontSize={'xl'}>Coupon Discount</Text>
                    <Text color={'red'} fontSize={'xl'}>- Rs 0</Text>
                    </Box>
                </Box>

                <Box  margin={'auto'} w={'85%'}  height={'60px'}>
                <Box  display={'flex'} justifyContent={'space-between'}>
                    <Text  fontSize={'xl'}>GST (Goods and Service Tax) at 18 % <QuestionOutlineIcon color={'gray'}/></Text>
                    <Text  fontSize={'xl'}>Rs 360</Text>
                    </Box>
                    
                </Box>

                <Box margin={'auto'} w={'85%'} border={'1px  black'}><Divider mt={'30px'} /></Box>
                
                <Box margin={'auto'} w={'85%'}  height={'60px'}>
                <Box ml={'60%'} w={'40%'}  display={'flex'} justifyContent={'space-between'}>
                    <Text fontWeight={'bold'} fontSize={'xl'}>Total Price</Text>
                    <Text  fontWeight={'bold'} fontSize={'xl'}>Rs 2359</Text>
                    </Box>
                </Box>

             </Box>
          {/* ------- */}

             <Box w={'35%'}>

                <Box mt={'20px'} display={'flex'} w={'100%'} height={'150px'}>
                    <Box color={'gray'} w={'40%'}>
                    <Checkbox  defaultChecked>I have read the</Checkbox>
                           <Text color={'rgb(0,122,255)'} textDecoration={'underline'}>Terms & Conditions</Text></Box>
                    <Box w={'60%'}>
                      <Button color={'white'} bg={'rgb(0,122,255)'}>Login/Sign Up to Place Order</Button>
                    </Box>
                </Box>
             </Box>
         </Box>
          {/* -------- */}
         <Box mt={'-20px'} borderRadius={'10px'} ml={'20px'}  w={'95%'} bg={'rgb(244,244,245)'} height={'120px'}>
              <Box  ml={'15px'} display={'flex'}><WarningTwoIcon mr={'5px'} mt={'10px'} fontSize={'2xl'} /> <Heading mt={'5px'} fontSize={'2xl'}>Disclaimer :-</Heading></Box>
              <Box color={'gray'}  ml={'15px'} >Please note that Monster DOES NOT authorize any agency/partner to contact you for processing REFUNDS. Beware of such suspicious calls/emails/SMSs pretending to be from Monster. Monster DOES NOT seek fees/ deposit towards any job offer or interview.</Box>
              <Box  color={'gray'} ml={'15px'} mt={'10px'}>We advise you to report any suspicious mailers/activity, pretending to be from Monster, to our following email addresses: spam@monsterindia.com / jobseeker@monsterindia.com</Box>
         </Box>
         <br />
         <br />
    </Box>
  )
}

export default Cart