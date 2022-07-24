import React from 'react';
import {Text, Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Settings for the slider
const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
};

export default function Carousal3() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    {
        "id" : 1,
        "name" : "Hucon Solution",
        "image" : "https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg",
        "mkt" : "Customer support Exwcutive ",
        "price" : "Experience: 0-5 years",
        "mrp" : "location: Hyderabad/Bangalore"
    },
    {
        "id" : 2,
        "name" : "Teleperformance Global",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg',
        "mkt" : "Email and Chat process",
        "price" : "Experience: 0-3 years",
        "mrp" : "location: Chennai"
    },
    {
        "id" : 3,
        "name" : "Larsen & Tubro",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/august/6P61ns5WeVzLF5ajZVTMDC20iVeCX7moBrZxkFY6.jpeg',
        "mkt" : "Sourcing Executive",
        "price" :"Experience: 2-5 years" ,
        "mrp" : "location: Mumbai"
    },
    {
        "id" : 4,
        "name" : "Hucon Solution",
        "image" : "https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg",
        "mkt" : "Customer support Exwcutive ",
        "price" : "Experience: 0-5 years",
        "mrp" : "location: Hyderabad/Bangalore"
    },
    {
        "id" : 5,
        "name" : "Teleperformance Global",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg',
        "mkt" : "Email and Chat process",
        "price" : "Experience: 0-3 years",
        "mrp" : "location: Chennai"
    },
    {
        "id" : 6,
        "name" : "Larsen & Tubro",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/august/6P61ns5WeVzLF5ajZVTMDC20iVeCX7moBrZxkFY6.jpeg',
        "mkt" : "Sourcing Executive",
        "price" :"Experience: 2-5 years" ,
        "mrp" : "location: Mumbai"
    },

    {
        "id" : 7,
        "name" : "Hucon Solution",
        "image" : "https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg",
        "mkt" : "Customer support Exwcutive ",
        "price" : "Experience: 0-5 years",
        "mrp" : "location: Hyderabad/Bangalore"
    },

    {
        "id" : 8,
        "name" : "Teleperformance Global",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg',
        "mkt" : "Email and Chat process",
        "price" : "Experience: 0-3 years",
        "mrp" : "location: Chennai"
    },
    {
        "id" : 9,
        "name" : "Larsen & Tubro",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/august/6P61ns5WeVzLF5ajZVTMDC20iVeCX7moBrZxkFY6.jpeg',
        "mkt" : "Sourcing Executive",
        "price" :"Experience: 2-5 years" ,
        "mrp" : "location: Mumbai"
    },
    {
        "id" : 10,
        "name" : "Hucon Solution",
        "image" : "https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg",
        "mkt" : "Customer support Exwcutive ",
        "price" : "Experience: 0-5 years",
        "mrp" : "location: Hyderabad/Bangalore"
    },
    
    
  ];
 
 

  return (
    <div style={{margin:"100px 0 0 150px",height:"170px",width:"900px",marginLeft:"140px",backgroundColor:"white"}
    }>
    <h1 style={{fontSize:"22px",fontWeight:"bold",letterSpacing:"2px",marginTop:"30px",padding:"20px 0 0 30px"}}>Recent Jobs</h1>
    <Box
      position={'relative'}
      height={'auto'}
      width={'900px'}
      bg={'white'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
         <IconButton
         marginTop={'0px'}
        aria-label="left-arrow"
        colorScheme="blue"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
          <ChevronLeftIcon/>
        </IconButton>
      {/* Right Icon */}
      <IconButton
        marginTop={'0px'}
        aria-label="right-arrow"
        colorScheme="blue"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
          <ChevronRightIcon/>
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url,index) => (
          <Box
          display={"flex"}
          pl={index > 0 ? "-100px" :"20px"}
            marginTop={8}
            key={index}
            height={'150px'}
            
            width={'auto'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            // backgroundImage={`url(${url})`}
          >
          <Box  fontSize='sm'  rounded={10} p={4}  ml={12}  bg={'rgb(245,245,245)'} width={'auto'} height={'auto'}>
            {/* <img style={{paddingLeft:"14px",paddingTop:"-8px",marginTop:"-13px"}} src={url.image} alt=''/> */}
            <Text color={'black'} fontWeight={500}>{url.name}</Text>
            {/* <Text as={"i"} fontSize="smaller" color={'#717486'}>{url.mkt}</Text><br></br> */}
            <Text style={{color:"#6F7284",fontWeight:"500px"}}>{url.mkt}  </Text>
            <Text style={{color:"#EF4281"}}>{url.price}</Text><br></br>
            <Text color={'#717486'} >{url.mrp}</Text>
            
          </Box>
           
          </Box>
        ))}
      </Slider>
    </Box>
    </div>
  );
}