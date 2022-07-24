import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, Image, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Text } from '@chakra-ui/react'
  import React, { useState } from 'react' ;
  import { AddIcon, BellIcon, MinusIcon, Search2Icon, StarIcon} from '@chakra-ui/icons' 
  import { Link, useNavigate, useSearchParams } from "react-router-dom";
  import { data } from '../../db' 
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
  
  const FilterJobs = () => {
        const navigate = useNavigate()
      const [categoryParams, setCategoryParams] = useSearchParams();
      const category = categoryParams.getAll("category") || [];
      const local = categoryParams.getAll("local") || [];
      const [products, setProducts] = useState(data);
      const [filterData, setFilterData] = useState([]);
      const [page,setPage] = useState(5)
      const [search,setSearch] =useState('')
      const [loc,setLoc] = useState('')
      
      // console.log(page)
      // console.log("categoryParams",categoryParams)
      // console.log("category",category)
      // console.log("filterData",filterData)
  
      const handleFilter = () => {
          // console.log("local",local)
          const data1 = products.filter((item) => {
            if(local.length) 
            {
                if(local.length && category.length) 
                {
                  if(local.includes(item.locations) && 
                  (category.includes(item.value) || category.includes(item.exp) || category.includes(item.salary)) )
                    return true;
                }
                else if(local.length) 
                {
                  if(local.includes(item.locations)) return true;
                }
            }
            else if(category.length)
            {
              if (category.includes(item.value)  || category.includes(item.exp) || category.includes(item.salary)) return true;
            }
            return false;
          });
          setFilterData(data1);
        };
  
      const handleChange = (e) => {
  
      let value = e.target.value;
      if (category.includes(value)) 
      {
        category.splice(category.indexOf(value), 1);
      } 
      else 
      {
        category.push(value);
      }
      setCategoryParams({local,category});
      handleFilter();
    };
  
      const handleColor = (e) => {
          let value = e.target.value;
          //console.log("value", value);
          if(local.includes(value)) 
          {   
              local.splice(local.indexOf(value), 1);
          } 
          else 
          {
              local.push(value);
          }
          setCategoryParams({local,category});
          handleFilter();
        };
     
      const handleSearch =()=>{
  
          let newCategory = [...category]
          if(category.includes(search || loc))
          {
            newCategory.splice(newCategory.indexOf(search || loc),1) 
          }
          else
          {
            newCategory.push(search || loc) ;
          }
          let array = [] ;
          const temp1  = products.map((el)=>(el.locations === newCategory.toString() && array.push(el)))
          console.log(temp1)
         
          if(array.length !==0)
          {
              setProducts(array) ;
          }
          else
          {
              setProducts(data)
          }    
      }
  
  
      // const handleCheckbox =(e)=>{
  
          // let option = e.target.value;
      
          // let newCategory = [...category]
      
          // if(category.includes(option))
          // {
          //   newCategory.splice(newCategory.indexOf(option),1) 
          // }
          // else{
          //   newCategory.push(option) ;
          // }
          // setCategory(newCategory)
          // let arr = [] 
          // const temp  = jobs.map((el)=>(el.value === newCategory.toString() && arr.push(el)))
          // const temp1  = jobs.map((el)=>(el.locations === newCategory.toString() && arr.push(el)))
          // const temp2  = jobs.map((el)=>(el.exp === newCategory.toString() && arr.push(el)))
          
          // console.log("ab1",temp)
          // console.log("ab2",temp1)
          // console.log("ab3",temp2)
         
          // console.log(arr)
          // if(arr.length!==0)
          // {
          //     jobs = arr ;
          // }
          // else
          // {
          //     jobs= data.data
          // }
         
      //   }
      //   console.log(category)
      //   console.log(filterData)
       
  
    return (
        <>
    <Navbar/>
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
              <Input size='lg' onChange={(e)=>setSearch(e.target.value)} type='job' placeholder='Search by Skills, Company & Job Title'  border="1px solid black" borderRadius={'none'} bg={'white'} focusBorderColor={'none'} /> 
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
              <Input size='lg'  onChange={(e)=>setLoc(e.target.value)} type='tel' placeholder='Location'  border="1px solid black" borderRadius={'none'} bg={'white'} focusBorderColor={'none'} /> 
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
          <Button onClick={handleSearch} ml={-2} bg={'#6C54DA'} _hover={{bg:'#4A2189'}} borderRadius={'none'}  color='white' size='lg'>Search</Button>
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
                              <input type='checkbox' 
                              value='IT'  
                              onChange={(e) => {handleChange(e, "category");
                              }}  
                              defaultChecked={categoryParams.getAll("category").includes("IT")} />
                              <label style={{marginLeft:'10px'}}>IT</label> 
                              </Box>
                              <label >(1999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input  type='checkbox' value='IT/Software Development' 
                           onChange={(e) => {handleChange(e, "category");
                              }}  
                               defaultChecked={categoryParams.getAll("category").includes("IT/Software Development")}  />
                          <label style={{marginLeft:'10px'}}>IT/Software Develo...</label> 
                          </Box>
                          <label  >(1749)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='IT/Hardware/Telecommunication'
                           onChange={(e) => {handleChange(e, "category");
                          }}  
                           defaultChecked={categoryParams.getAll("category").includes("IT/Hardware/Telecommunication")}  />
                          <label style={{marginLeft:'10px'}}>IT/Hardware/Teleco...</label> 
                          </Box>
                          <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='Manufacturing' 
                           onChange={(e) => {handleChange(e, "category");
                          }}  
                           defaultChecked={categoryParams.getAll("category").includes("Manufacturing")}  />
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
                              <input type='checkbox' value='Software Engineer'  onChange={(e) => {handleChange(e, "category");
                              }}  
                               checked={category.includes('Software Engineer')} />
                              <label style={{marginLeft:'10px'}}> Software Engineer </label> 
                              </Box>
                              <label >(1999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='IT Application Designer Specialist'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('IT Application Designer Specialist')}  />
                          <label style={{marginLeft:'10px'}}> IT Application.. </label> 
                          </Box>
                          <label  >(1749)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='Application Engineer'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('Application Engineer')}  />
                          <label style={{marginLeft:'10px'}}> Application Engineer..</label> 
                          </Box>
                          <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='Solution Architect/Enterprise Architect'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('Solution Architect/Enterprise Architect')} />
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
                              <input type='checkbox' value='0 - 1 Years'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('0 - 1 Years')} />
                              <label style={{marginLeft:'10px'}}>0 - 1 Years</label> 
                              </Box>
                              <label >(1999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='1 - 2 Years'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('1 - 2 Years')}  />
                          <label style={{marginLeft:'10px'}}>1 - 2 Years</label> 
                          </Box>
                          <label  >(1749)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='2 - 3 Years'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('2 - 3 Years')}  />
                          <label style={{marginLeft:'10px'}}>2- 3 Years</label> 
                          </Box>
                          <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='3 - 4 Years'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('3 - 4 Years')} />
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
                              <input type='checkbox' value='Bangalore' onChange={handleColor} 
                              defaultChecked={categoryParams.getAll("local").includes("Bangalore")} />
                              <label style={{marginLeft:'10px'}}>Bangalore </label> 
                              </Box>
                              <label >(1999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='Pune' onChange={handleColor} 
                          defaultChecked={categoryParams.getAll("local").includes("Pune")}  />
                          <label style={{marginLeft:'10px'}}>Pune</label> 
                          </Box>
                          <label  >(1749)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='Hydrabad' onChange={handleColor} 
                          defaultChecked={categoryParams.getAll("local").includes("Hydrabad")}  />
                          <label style={{marginLeft:'10px'}}>Hydrabad</label> 
                          </Box>
                          <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='Chennai' onChange={handleColor} 
                          defaultChecked={categoryParams.getAll("local").includes("Chennai")}  />
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
                              <input type='checkbox' value='0-1Lakhs'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('0-1Lakhs')} />
                              <label style={{marginLeft:'10px'}}>0-1Lakhs</label> 
                              </Box>
                              <label >(1999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='1-2Lakhs'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('1-2Lakhs')}  />
                          <label style={{marginLeft:'10px'}}>1-2Lakhs</label> 
                          </Box>
                          <label  >(1749)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='2-5Lakhs'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('2-5Lakhs')}  />
                          <label style={{marginLeft:'10px'}}>2-5Lakhs</label> 
                          </Box>
                          <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='5-10Lakhs'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('5-10Lakhs')} />
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
                              <input type='checkbox' value=' Show Only GPTW Jobs '  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes(' Show Only GPTW Jobs ')} />
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
                              <input type='checkbox' value=' Bachelor Of Technology (B.Tech/B.E) '  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes(' Bachelor Of Technology (B.Tech/B.E) ')} />
                              <label style={{marginLeft:'10px'}}> Bachelor Of Tech.. </label> 
                              </Box>
                              <label >(1999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value=' Bachelor Of Computer Application (B.C.A) '  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes(' Bachelor Of Computer Application (B.C.A) ')}  />
                          <label style={{marginLeft:'10px'}}> Bachelor Of Comp.. </label> 
                          </Box>
                          <label  >(1749)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value=' Master in Computer Application (M.C.A) '  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes(' Master in Computer Application (M.C.A) ')}  />
                          <label style={{marginLeft:'10px'}}> Master in Comp..</label> 
                          </Box>
                          <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value=' Masters in Technology (M.Tech/M.E/M.Sc)'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes(' Masters in Technology (M.Tech/M.E/M.Sc)')} />
                          <label style={{marginLeft:'10px'}}> Masters in Tech..</label> 
                          </Box>
                          <label  style={{marginLeft:'15px'}}>(999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value=' Aviation'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes(' Aviation')} />
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
                              <input type='checkbox' value='Amazon'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('Amazon')} />
                              <label style={{marginLeft:'10px'}}>Amazon</label> 
                              </Box>
                              <label >(1999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='Accenture'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('Accenture')}  />
                          <label style={{marginLeft:'10px'}}>Accenture</label> 
                          </Box>
                          <label  >(1749)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='Siemens'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('Siemens')}  />
                          <label style={{marginLeft:'10px'}}>Siemens</label> 
                          </Box>
                          <label  style={{marginLeft:'5px'}}>(999)</label> <br></br>
                          </Box>
  
                          <Box display={'flex'} w={240} justifyContent={'space-between'}>
                          <Box w={280}>
                          <input type='checkbox' value='TCS'  onChange={(e) => {handleChange(e, "category");
                              }}  
                          checked={category.includes('TCS')} />
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
                    
                          <Box display={'flex'} gap={2}>
                              <BellIcon mt={2} color={'#6C54DA'} />
                              <Text fontWeight={500} color={'#6C54DA'}>Create Alert</Text>
                              <Button size='sm' color={'black'} borderRadius={'none'} bg={'white'} _hover={{bg:'#4A2189',color:'white'}} border='1px' borderColor='blue.500'>Save Search </Button>
                          </Box>
                      </Box>
  
                  <Box mt={5} w={900} display={'flex'} gap={5}>
                      <Box fontSize={'sm'} p={3} display={'flex'} gap={2} h={14} width={650} bg={'white'}>
                          <Text color={'blue.500'}>How is the search relevance?</Text>
                          <Text>Show:</Text>
                          <Select h={7} p={0} onChange={(e)=>setPage(e.target.value)} focusBorderColor={'none'} borderRadius={'none'} width={20} >
                              <option value={5}>5</option>
                              <option value={10}>10</option>
                              <option value={15}>15</option>
                              <option value={20}>20</option>
                          </Select>
                          <Text>Per Page</Text>
  
                          <Text>Sort By : </Text>
                          <Select h={7} color='gray.500' p={0} focusBorderColor={'none'} borderRadius={'none'} width={40} placeholder={'Relevance'}>
                              <option>Freshness</option>
                          </Select>
                      </Box> 
                  </Box>
  
                    {/* MAP RESULTS HERE */}
                  
                  {local.length || category.length
                  ? filterData.map((el,index)=>(  
                  index < page &&
                    <Box width={650}  _hover={{boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"}}>
                    <Box p={2} mt={4} width={650} bg={'white'} h={150}>
                        <Text>{el.title}</Text>
                        <Text fontSize={'sm'} color={'#5D73C5'}>{el.companyName}</Text>
                        <Box w={'100%'} display={'flex'} gap={28}>
                            <Box display={'flex'} gap={2}>
                                <Image mt={1} w={4} h={4} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXH7ayI-h7hqew7lOIuHnAAy2FGVm-NQqZv6zQQyu7Bbjnw78IIOFjsgjckcdx_V_DY4Q&usqp=CAU' />
                                <Text fontSize={'sm'}>{el.locations}</Text>
                            </Box>
                            <Box display={'flex'} gap={2}>
                                <Image w={5} src='https://thumb1.shutterstock.com/mosaic_250/169597876/575849710/stock-vector-vector-illustration-of-gray-business-bag-icon-575849710.jpg' />
                                <Text fontSize={'sm'}>{el.exp}</Text>
                            </Box>
                            <Box display={'flex'} gap={2}>
                                <Image w={5} src='https://geeuinstitute.org/wp-content/uploads/2018/01/2-512.png' />
                                <Text fontSize={'sm'}>{el.salary} INR</Text>
                            </Box>
                        </Box>
                        <Box fontSize={'sm'} color={'gray.700'} w={'100%'}>
                            <Text>
                            Job Description:A part of the Tata group,India's largest multinational business group,TCS has over 500,000 over the world’s best-trained consultants in 46 countries.
                            </Text>
                            <Text>
                            Skills:{el.skills}
                            </Text>
                        </Box>
                    </Box>
                    <Box fontSize={'sm'} display={'flex'}  justifyContent={'space-between'} h={'50px'} p={2} w={650} bg={'#EBEBEB'}>
                      <Box display={'flex'} gap={2}>
                        <Image h={5} w={5} src='https://www.pngitem.com/pimgs/m/20-200060_icon-green-leaf-png-transparent-png.png' />
                        <Text>{el.updatedAt} </Text>
                        <Text  color={'#6C54DA'}>India</Text>
                      </Box>
    
                      <Box display={'flex'} gap={2}>
                        <StarIcon mt={1} fontSize={'xl'} color={'gray'} />
                        <Image h={7} w={7} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sharethis-grey.svg/800px-Sharethis-grey.svg.png' />
                        <ButtonGroup variant='outline' spacing='6'>
                        <a href='https://www.tcs.com/careers/tcs-bps-hiring' target="_blank"><Button  _hover={{bg:'#6C54DA',color:"white",border:"1px solid #6C54DA "}} size='sm'borderRadius={'none'} border={'2px solid blue'} color={'#6C54DA'} colorScheme='#6C54DA'>APPLY</Button></a>
                        </ButtonGroup>
                      </Box>
                    </Box>
                  </Box>
                    ))
                  : products.map((el,index)=>(
                      index < page &&
                    <Box width={650}  _hover={{boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"}}>
                    <Box p={2} mt={4} width={650} bg={'white'} h={150}>
                        <Text>{el.title}</Text>
                        <Text fontSize={'sm'} color={'#5D73C5'}>{el.companyName}</Text>
                        <Box w={'100%'} display={'flex'} gap={28}>
                            <Box display={'flex'} gap={2}>
                                <Image mt={1} w={4} h={4} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXH7ayI-h7hqew7lOIuHnAAy2FGVm-NQqZv6zQQyu7Bbjnw78IIOFjsgjckcdx_V_DY4Q&usqp=CAU' />
                                <Text fontSize={'sm'}>{el.locations}</Text>
                            </Box>
                            <Box display={'flex'} gap={2}>
                                <Image w={5} src='https://thumb1.shutterstock.com/mosaic_250/169597876/575849710/stock-vector-vector-illustration-of-gray-business-bag-icon-575849710.jpg' />
                                <Text fontSize={'sm'}>{el.exp}</Text>
                            </Box>
                            <Box display={'flex'} gap={2}>
                                <Image w={5} src='https://geeuinstitute.org/wp-content/uploads/2018/01/2-512.png' />
                                <Text fontSize={'sm'}>{el.salary} INR</Text>
                            </Box>
                          
                        </Box>
                        <Box fontSize={'sm'} color={'gray.700'} w={'100%'}>
                            <Text>
                            Job Description:A part of the Tata group,India's largest multinational business group,TCS has over 500,000 over the world’s best-trained consultants in 46 countries.
                            </Text>
                            <Text>
                            Skills:{el.skills}
                            </Text>
                        </Box>
                    </Box>
                    <Box fontSize={'sm'} display={'flex'}  justifyContent={'space-between'} h={'50px'} p={2} w={650} bg={'#EBEBEB'}>
                      <Box  display={'flex'} gap={2}>
                        <Image h={5} w={5} src='https://www.pngitem.com/pimgs/m/20-200060_icon-green-leaf-png-transparent-png.png' />
                        <Text>{el.updatedAt} </Text>
                        <Text  color={'#6C54DA'}>India</Text>
                      </Box>
                      <Box display={'flex'} gap={2}>
                        <StarIcon mt={1} fontSize={'xl'} color={'gray'} />
                        <Image h={7} w={7} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sharethis-grey.svg/800px-Sharethis-grey.svg.png' />
                        <ButtonGroup variant='outline' spacing='6'>
                        <a href='https://www.tcs.com/careers/tcs-bps-hiring' target="_blank"><Button  _hover={{bg:'#6C54DA',color:"white",border:"1px solid #6C54DA "}} size='sm'borderRadius={'none'} border={'2px solid blue'} color={'#6C54DA'} colorScheme='#6C54DA'>APPLY</Button></a>
                        </ButtonGroup>
                      </Box>
                    </Box>
                  </Box>
                   ))
                  }
                  </Box>
                  <Image h={600} ml={-200} mt={14} src='https://tpc.googlesyndication.com/simgad/8888453308644972334'/>
              </Box>
          </Box>
     </Box>
     <Footer/>
     </>
    )
  }
  
  export default FilterJobs