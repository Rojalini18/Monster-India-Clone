import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Checkbox, CSSReset, Image, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react' ;
import { AddIcon, BellIcon, MinusIcon, Search2Icon} from '@chakra-ui/icons' 



const FilterJobs = () => {

    const [category,setCategory] = useState('')


    const handleCheckbox =(e)=>{

        let option = e.target.value ;
    
        let newCategory = [...category]
    
        if(category.includes(option))
        {
          newCategory.splice(newCategory.indexOf(option),1) 
        }
        else{
          newCategory.push(option) ;
        }
        setCategory(newCategory)
       
      }

  return (
   <Box bg={'#F5F5F5'} pt={5}>

     {/* Poster advertisement */}
    <Box m={2}>
         <Image m={'auto'} src='https://tpc.googlesyndication.com/simgad/12267176381814666887' alt='addvetise' />
    </Box>

        {/* Search Part */}
    <Box display={'flex'} bg={'#E8E8E8'} mb={4} p={2} pl={10} pr={2} gap={1}>
        <Box w={480}>  
            <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon mt={3} color='gray.300' />}
            />
            <Input size='lg' type='tel' placeholder='Search by Skills, Company & Job Title'  border="1px solid black" borderRadius={'none'} bg={'white'} focusBorderColor={'none'} /> 
            <InputRightElement
            pointerEvents='none'
            children={<Image w={5} src='data:image/png;base64,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' mt={3} color='gray.300' />}
            />
            </InputGroup>
        </Box>
        <Box w={350}>  
            <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            children={<Image mt={3} w={5}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXH7ayI-h7hqew7lOIuHnAAy2FGVm-NQqZv6zQQyu7Bbjnw78IIOFjsgjckcdx_V_DY4Q&usqp=CAU'/>}
            />
            <Input size='lg' type='tel' placeholder='Location'  border="1px solid black" borderRadius={'none'} bg={'white'} focusBorderColor={'none'} /> 
            </InputGroup>
        </Box>
        <Box w={250}>  
        <Select size='lg' color='gray.500' borderRadius={'none'} bg={'white'} focusBorderColor={'none'} placeholder='Experience'>
            <option value='option2'>1 Year</option>
            <option value='option3'>2 Year</option>
            <option value='option1'>3 Year</option>
            <option value='option2'>4 Year</option>
            <option value='option3'>5 Year</option>
        </Select>
        </Box>
        <Button ml={-2} bg={'#6C54DA'} _hover={{bg:'#4A2189'}} borderRadius={'none'}  color='white' size='lg'>Search</Button>
    </Box>
    
    {/* Main Filter Part */}
        <Box display={'flex'} gap={3} p={4} pl={8} pr={0}>

            {/* Filter Choices */}
            <Box w={280} >
                <Text mb={7} fontWeight={500}>Search Results - </Text>
                <Box  bg={'white'}>
                    <Box p={3} pl={5} fontSize={'lg'}  color={'gray.500'} width={'100%'} borderBottom={'1px solid lightgrey'}>Filter By</Box>

                {/* ACCORDIAN FILTER 1 */}
                <Box p={1}  width={'100%'} borderBottom={'1px solid lightgrey'}>
                <Accordion allowMultiple bg={'white'} _hover={{bg:"white"}} border={'1px solid white'}>
                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton fontWeight={500}  _hover={{bg:"white"}}>
                            <Box flex='1' textAlign='left'>
                           Function
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon font fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        
                        <div>
                        <Box display={'flex'} w={270} justifyContent={'space-between'}>
                            <Box w={40}>
                            <input type='checkbox' value='IT' onChange={handleCheckbox} checked={category.includes('IT')} />
                            <label style={{marginLeft:'10px'}}>IT</label> 
                            </Box>
                            <label >(1999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='IT/Software Development' onChange={handleCheckbox} checked={category.includes('IT/Software Development')}  />
                        <label style={{marginLeft:'10px'}}>IT/Software Develo...</label> 
                        </Box>
                        <label  >(1749)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='IT/Hardware/Telecommunication' onChange={handleCheckbox} checked={category.includes('IT/Hardware/Telecommunication')}  />
                        <label style={{marginLeft:'10px'}}>IT/Hardware/Teleco...</label> 
                        </Box>
                        <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='Manufacturing' onChange={handleCheckbox} checked={category.includes('Manufacturing')} />
                        <label style={{marginLeft:'10px'}}>Manufacturing</label> 
                        </Box>
                        <label  style={{marginLeft:'15px'}}>(999)</label> <br></br>
                        </Box>
                    </div>
                    
                        </AccordionPanel>
                    </>
                    )}
                   </AccordionItem>
                </Accordion>
                </Box>

                {/* ACCORDIAN FILTER 2 */}
                <Box p={1}  width={'100%'} borderBottom={'1px solid lightgrey'}>
                <Accordion allowMultiple bg={'white'} _hover={{bg:"white"}} border={'1px solid white'}>
                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton fontWeight={500}  _hover={{bg:"white"}}>
                            <Box flex='1' textAlign='left'>
                           Role
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon font fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        
                        <div>
                        <Box display={'flex'} w={270} justifyContent={'space-between'}>
                            <Box w={40}>
                            <input type='checkbox' value=' Software Engineer/Programmer ' onChange={handleCheckbox} checked={category.includes(' Software Engineer/Programmer ')} />
                            <label style={{marginLeft:'10px'}}> Software Engineer </label> 
                            </Box>
                            <label >(1999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value=' IT Application Designer Specialist ' onChange={handleCheckbox} checked={category.includes(' IT Application Designer Specialist ')}  />
                        <label style={{marginLeft:'10px'}}> IT Application.. </label> 
                        </Box>
                        <label  >(1749)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value=' Application Engineer ' onChange={handleCheckbox} checked={category.includes(' Application Engineer ')}  />
                        <label style={{marginLeft:'10px'}}> Application Engineer..</label> 
                        </Box>
                        <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value=' Solution Architect/Enterprise Architect ' onChange={handleCheckbox} checked={category.includes(' Solution Architect/Enterprise Architect ')} />
                        <label style={{marginLeft:'10px'}}> Solution Architect..</label> 
                        </Box>
                        <label  style={{marginLeft:'15px'}}>(999)</label> <br></br>
                        </Box>
                    </div>
                    
                        </AccordionPanel>
                    </>
                    )}
                   </AccordionItem>
                </Accordion>
                </Box>
                

                {/* ACCORDIAN FILTER 3 */}
                <Box p={1}  width={'100%'} borderBottom={'1px solid lightgrey'}>
                <Accordion allowMultiple bg={'white'} _hover={{bg:"white"}} border={'1px solid white'}>
                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton fontWeight={500}  _hover={{bg:"white"}}>
                            <Box flex='1' textAlign='left'>
                           Experience
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon font fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        
                        <div>
                        <Box display={'flex'} w={270} justifyContent={'space-between'}>
                            <Box w={40}>
                            <input type='checkbox' value='0 - 1 Years ' onChange={handleCheckbox} checked={category.includes('0 - 1 Years ')} />
                            <label style={{marginLeft:'10px'}}>0 - 1 Years </label> 
                            </Box>
                            <label >(1999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='1 - 2 Years' onChange={handleCheckbox} checked={category.includes('1 - 2 Years')}  />
                        <label style={{marginLeft:'10px'}}>1 - 2 Years</label> 
                        </Box>
                        <label  >(1749)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value=' 2- 3 Years' onChange={handleCheckbox} checked={category.includes('2 - 3 Years')}  />
                        <label style={{marginLeft:'10px'}}>2- 3 Years</label> 
                        </Box>
                        <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='3 - 4 Years' onChange={handleCheckbox} checked={category.includes('3 - 4 Years')} />
                        <label style={{marginLeft:'10px'}}>3 - 4 Years</label> 
                        </Box>
                        <label  style={{marginLeft:'15px'}}>(999)</label> <br></br>
                        </Box>
                    </div>
                    
                        </AccordionPanel>
                    </>
                    )}
                   </AccordionItem>
                </Accordion>
                </Box>

                {/* ACCORDIAN FILTER 4 */}
                <Box p={1}  width={'100%'} borderBottom={'1px solid lightgrey'}>
                <Accordion allowMultiple bg={'white'} _hover={{bg:"white"}} border={'1px solid white'}>
                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton fontWeight={500}  _hover={{bg:"white"}}>
                            <Box flex='1' textAlign='left'>
                           City
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon font fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        
                        <div>
                        <Box display={'flex'} w={270} justifyContent={'space-between'}>
                            <Box w={40}>
                            <input type='checkbox' value=' Bengaluru / Bangalore ' onChange={handleCheckbox} checked={category.includes(' Bengaluru / Bangalore ')} />
                            <label style={{marginLeft:'10px'}}>Bangalore </label> 
                            </Box>
                            <label >(1999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='Pune' onChange={handleCheckbox} checked={category.includes('Pune')}  />
                        <label style={{marginLeft:'10px'}}>Pune</label> 
                        </Box>
                        <label  >(1749)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='Hyadrabad' onChange={handleCheckbox} checked={category.includes('Hyadrabad')}  />
                        <label style={{marginLeft:'10px'}}>Hyadrabad</label> 
                        </Box>
                        <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='Chennai' onChange={handleCheckbox} checked={category.includes('Chennai')} />
                        <label style={{marginLeft:'10px'}}>Chennai</label> 
                        </Box>
                        <label  style={{marginLeft:'15px'}}>(999)</label> <br></br>
                        </Box>
                    </div>
                    
                        </AccordionPanel>
                    </>
                    )}
                   </AccordionItem>
                </Accordion>
                </Box>

                {/* ACCORDIAN FILTER 5 */}
                <Box p={1}  width={'100%'} borderBottom={'1px solid lightgrey'}>
                <Accordion allowMultiple bg={'white'} _hover={{bg:"white"}} border={'1px solid white'}>
                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton fontWeight={500}  _hover={{bg:"white"}}>
                            <Box flex='1' textAlign='left'>
                           Salary(INR)
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon font fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        
                        <div>
                        <Box display={'flex'} w={270} justifyContent={'space-between'}>
                            <Box w={40}>
                            <input type='checkbox' value='0-1Lakhs' onChange={handleCheckbox} checked={category.includes('0-1Lakhs')} />
                            <label style={{marginLeft:'10px'}}>0-1Lakhs</label> 
                            </Box>
                            <label >(1999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='1-2Lakhs' onChange={handleCheckbox} checked={category.includes('1-2Lakhs')}  />
                        <label style={{marginLeft:'10px'}}>1-2Lakhs</label> 
                        </Box>
                        <label  >(1749)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='2-5Lakhs' onChange={handleCheckbox} checked={category.includes('2-5Lakhs')}  />
                        <label style={{marginLeft:'10px'}}>2-5Lakhs</label> 
                        </Box>
                        <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='5-10Lakhs' onChange={handleCheckbox} checked={category.includes('5-10Lakhs')} />
                        <label style={{marginLeft:'10px'}}>5-10Lakhs</label> 
                        </Box>
                        <label  style={{marginLeft:'15px'}}>(999)</label> <br></br>
                        </Box>
                    </div>
                    
                        </AccordionPanel>
                    </>
                    )}
                   </AccordionItem>
                </Accordion>
                </Box>

                {/* ACCORDIAN FILTER 6 */}
                <Box p={1}  width={'100%'} borderBottom={'1px solid lightgrey'}>
                <Accordion allowMultiple bg={'white'} _hover={{bg:"white"}} border={'1px solid white'}>
                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton fontWeight={500}  _hover={{bg:"white"}}>
                            <Box flex='1' textAlign='left'>
                            Great Place to Work
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon font fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        
                        <div>
                        <Box display={'flex'} w={270} justifyContent={'space-between'}>
                            <Box w={40}>
                            <input type='checkbox' value=' Show Only GPTW Jobs ' onChange={handleCheckbox} checked={category.includes(' Show Only GPTW Jobs ')} />
                            <label style={{marginLeft:'10px'}}> Show Only GPTW </label> 
                            </Box>
                            <label >(99)</label><br></br>
                        </Box>
                    </div>
                    
                        </AccordionPanel>
                    </>
                    )}
                   </AccordionItem>
                </Accordion>
                </Box>

                {/* ACCORDIAN FILTER 7 */}
                <Box p={1}  width={'100%'} borderBottom={'1px solid lightgrey'}>
                <Accordion allowMultiple bg={'white'} _hover={{bg:"white"}} border={'1px solid white'}>
                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton fontWeight={500}  _hover={{bg:"white"}}>
                            <Box flex='1' textAlign='left'>
                             Qualification
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon font fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        
                        <div>
                        <Box display={'flex'} w={270} justifyContent={'space-between'}>
                            <Box w={40}>
                            <input type='checkbox' value=' Bachelor Of Technology (B.Tech/B.E) ' onChange={handleCheckbox} checked={category.includes(' Bachelor Of Technology (B.Tech/B.E) ')} />
                            <label style={{marginLeft:'10px'}}> Bachelor Of Tech.. </label> 
                            </Box>
                            <label >(1999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value=' Bachelor Of Computer Application (B.C.A) ' onChange={handleCheckbox} checked={category.includes(' Bachelor Of Computer Application (B.C.A) ')}  />
                        <label style={{marginLeft:'10px'}}> Bachelor Of Comp.. </label> 
                        </Box>
                        <label  >(1749)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value=' Master in Computer Application (M.C.A) ' onChange={handleCheckbox} checked={category.includes(' Master in Computer Application (M.C.A) ')}  />
                        <label style={{marginLeft:'10px'}}> Master in Comp..</label> 
                        </Box>
                        <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value=' Masters in Technology (M.Tech/M.E/M.Sc)' onChange={handleCheckbox} checked={category.includes(' Masters in Technology (M.Tech/M.E/M.Sc)')} />
                        <label style={{marginLeft:'10px'}}> Masters in Tech..</label> 
                        </Box>
                        <label  style={{marginLeft:'15px'}}>(999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value=' Aviation' onChange={handleCheckbox} checked={category.includes(' Aviation')} />
                        <label style={{marginLeft:'12px'}}>Aviation</label> 
                        </Box>
                        <label  style={{marginLeft:'15px'}}>(999)</label> <br></br>
                        </Box>
                    </div>
                </AccordionPanel>
                    </>
                    )}
                   </AccordionItem>
                </Accordion>
                </Box>

                {/* ACCORDIAN FILTER 8 */}
                <Box p={1}  width={'100%'} borderBottom={'1px solid lightgrey'}>
                <Accordion allowMultiple bg={'white'} _hover={{bg:"white"}} border={'1px solid white'}>
                <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton fontWeight={500}  _hover={{bg:"white"}}>
                            <Box flex='1' textAlign='left'>
                            Top Companies
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon font fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        
                        <div>
                        <Box display={'flex'} w={270} justifyContent={'space-between'}>
                            <Box w={40}>
                            <input type='checkbox' value='Amazon' onChange={handleCheckbox} checked={category.includes('Amazon')} />
                            <label style={{marginLeft:'10px'}}>Amazon</label> 
                            </Box>
                            <label >(1999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='Accenture' onChange={handleCheckbox} checked={category.includes('Accenture')}  />
                        <label style={{marginLeft:'10px'}}>Accenture</label> 
                        </Box>
                        <label  >(1749)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='Siemens' onChange={handleCheckbox} checked={category.includes('Siemens')}  />
                        <label style={{marginLeft:'10px'}}>Siemens</label> 
                        </Box>
                        <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                        </Box>

                        <Box display={'flex'} w={240} justifyContent={'space-between'}>
                        <Box w={280}>
                        <input type='checkbox' value='TCS' onChange={handleCheckbox} checked={category.includes('TCS')} />
                        <label style={{marginLeft:'10px'}}>TCS</label> 
                        </Box>
                        <label  style={{marginLeft:'15px'}}>(999)</label> <br></br>
                        </Box>
                    </div>
                    
                        </AccordionPanel>
                    </>
                    )}
                   </AccordionItem>
                </Accordion>
                </Box>


                    
                </Box>


            </Box>

            {/* Filter Results */}
            <Box  w={950} display={'flex'}  gap={0}>

                {/* Show Results */}
                <Box>
                    <Box width={850} display={'flex'} justifyContent={'space-between'}>
                        <Box>
                            <Text fontWeight={500}>Team Leader/Technical Leader jobs</Text>
                        </Box>
                  
                        <Box  display={'flex'} gap={2}>
                            <BellIcon mt={2} color={'#6C54DA'} />
                            <Text fontWeight={500} color={'#6C54DA'}>Create Alert</Text>
                            <Button size='sm' color={'black'} borderRadius={'none'} bg={'white'} _hover={{bg:'#4A2189',color:'white'}} border='1px' borderColor='blue.500'>Save Search </Button>
                        </Box>
                    </Box>

                <Box mt={5} w={900} display={'flex'} gap={5}>
                    <Box fontSize={'sm'} p={3} display={'flex'} gap={2} h={14} width={650} bg={'white'}>
                        <Text color={'blue.500'}>How is the search relevance?</Text>
                        {/* <Box>
                        <ThemeProvider>
                            <CSSReset/>
                            <Rating
                                size={48}
                                icon="star"
                                scale={5}
                                fillColor="gold"
                                strokeColor="grey"
                            />
                            </ThemeProvider>
                        </Box> */}
                        <Text>Show:</Text>
                        <Select h={7} p={0} focusBorderColor={'none'} borderRadius={'none'} width={20} placeholder={25}>
                            <option>50</option>
                            <option>75</option>
                            <option>100</option>
                        </Select>
                        <Text>Per Page</Text>


                        <Text>Sort By : </Text>
                        <Select h={7} color='gray.500' p={0} focusBorderColor={'none'} borderRadius={'none'} width={40} placeholder={'Relevance'}>
                            <option>Freshness</option>
                        </Select>
                    </Box>
                    
                </Box>
                
                {/* MAP RESULTS HERE */}

                <Box mt={5} width={650} bg={'white'} h={140}>

                </Box>


                </Box>
                <Image ml={-200} mt={14} src='https://tpc.googlesyndication.com/simgad/8888453308644972334'/>
            </Box>
        </Box>
   </Box>
  )
}

export default FilterJobs