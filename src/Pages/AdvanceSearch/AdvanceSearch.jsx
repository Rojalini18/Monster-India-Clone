import { Box, Button, Checkbox, Image, Input, InputGroup, InputLeftElement, Select, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'



const AdvanceSearch = () => {
    const navigate = useNavigate()

    const [keywords,setKeywords] = useState('')
    const [experience,setExperience] = useState('')
    const [location,setLocation] = useState('')
    const [industry,setIndustry] = useState('')
    const [functional,setFunctional] = useState('')
    const [role,setRole]= useState('')
    const [minSalary,setMinsalary]= useState('')
    const [maxSalary,setMaxsalary]= useState('')
    //const [debounce,setDebounce] = useState("")

  

const handleSearch =()=>{
    let searchData = {
        keywords: keywords,
        experience : experience,
        location  : location,
        industry : industry,
        functional : functional,
        role : role,
        minSalary : minSalary,
        maxSalary : maxSalary
    }
    if(keywords || experience || location || industry || functional || role || minSalary || maxSalary){
        navigate("/filterpage")
    console.log(searchData)
    }
    else{
        alert("Please fill at least one field to proceed")
    }
    
}

  return (
    <>
    <Navbar/>
    <Box p={6} h={'auto'} bg={'#F5F5F5'} >  
        <Text fontSize={'2xl'} fontWeight={500} >Advance Job Search</Text>
        <Box h={'auto'}  display={'flex'} gap={10} mt={6}>

            {/* Inputs for Search */}
            <Box w={900} h={'auto'} bg={'white'} p={10} >
            <Stack spacing={4}>
                  {/* job profile */}
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color='gray.300' />}
                />
                <Input value={keywords}  onChange={(e)=>setKeywords(e.target.value)} focusBorderColor='none' borderRadius={'none'} placeholder='Keyword' />
            </InputGroup>
            
                <Box display={'flex'} gap={5}>
                      {/* experience */}
                    <Select value={experience}  onChange={(e)=>setExperience(e.target.value)}  focusBorderColor='none' placeholder='Experience' color='gray.500'  borderRadius={'none'} border={'1px solid black'}>
                        <option value='0'>0 Year</option>
                        <option value='1'>1 Year</option>
                        <option value='2'>2 Year</option>
                        <option value='3'>3 Year</option>
                        <option value='4'>4 Year</option>
                        <option value='5'>5 Year</option>
                    </Select>
                
                    {/* location */}
                    <Box w={700} display={'flex'} gap={1} border={'1px solid lightgrey'}>
                        <Image w={5} m={2} h={5} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Media_Viewer_Icon_-_Location.svg/480px-Media_Viewer_Icon_-_Location.svg.png'/>
                        <Input value={location}  onChange={(e)=>setLocation(e.target.value)} focusBorderColor='none' variant='unstyled' border={'none'} textDecoration={'none'} borderRadius={'none'} type='tel' placeholder='Location' />
                    </Box>
                </Box>
                
            {/* industry */}
           
                <Input value={industry}  onChange={(e)=>setIndustry(e.target.value)} focusBorderColor='none' borderRadius={'none'} border={'1px solid black'} type='tel' placeholder='Industry' />
    

            {/* function */}
           
                <Input value={functional}  onChange={(e)=>setFunctional(e.target.value)} focusBorderColor='none' borderRadius={'none'} border={'1px solid black'} type='tel' placeholder='Function' />
        

            {/* role */}
            <Input value={role}  onChange={(e)=>setRole(e.target.value)} focusBorderColor='none' borderRadius={'none'} border={'1px solid black'} type='tel' placeholder='Role' />
        
            {/* salary */}
            <Box display={'flex'} gap={5}>

                      {/* min salary */}
                    <Select value={minSalary}  onChange={(e)=>setMinsalary(e.target.value)} focusBorderColor='none' w={190} placeholder='Minimum Salary' color='gray.500'  borderRadius={'none'} border={'1px solid black'}>
                        <option value='100000'>100000</option>
                        <option value='200000'>200000</option>
                        <option value='300000'>300000</option>
                        <option value='400000'>100000</option>
                        <option value='500000'>200000</option>
                        <option value='600000'>300000</option>
                    </Select>

                    {/* max salary */}
                    <Select value={maxSalary}  onChange={(e)=>setMaxsalary(e.target.value)} focusBorderColor='none' w={190} placeholder='Maximum Salary' color='gray.500'  borderRadius={'none'} border={'1px solid black'}>
                        <option value='1000000'>1000000</option>
                        <option value='2000000'>2000000</option>
                        <option value='3000000'>3000000</option>
                        <option value='4000000'>1000000</option>
                        <option value='5000000'>2000000</option>
                        <option value='6000000'>3000000</option>
                    </Select>
                  
                    {/* checkbox */}
                    <Stack spacing={5} direction='row'>
                    <Checkbox >Jobs that don't include salary</Checkbox>                 
                    </Stack>
            </Box>  
                     {/*search button */}
            
            <Button onClick={handleSearch} bg='#6C54DA' borderRadius={'none'} _hover={{bg : '#243A73'}} color={'white'}>Search</Button>

        </Stack>
    </Box>

        {/* Advertisement */}
        <Box width={'35%'} >
            <Box mb={4}  h={'auto'}>
                <Image src='https://s0.2mdn.net/simgad/7604713160055615317' />
            </Box>

            <Box w={300} p={2} bg={'white'} >
                <Text fontSize={'large'} color={'#6C54DA'}>Search Tips</Text>
                <Box p={2} display={'flex'} gap={2}>
                    <Image h={10} m={3} ml={0} w={10} src='https://cdn-icons-png.flaticon.com/512/3867/3867781.png'/>
                    <Box lineHeight={1.2}>
                        <Text color={'blue'}>Exact Job Search</Text>
                        <Text>Looking for an keyword search?</Text>
                        <Text>Put double quotes around the "keyword" to search for exact word/phrases.</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
        </Box>
    </Box>
    <Footer/>

    </>
  )
}

export default AdvanceSearch