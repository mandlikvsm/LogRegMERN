
import * as React from 'react';
import { Box ,Heading,Button,Flex,Spacer,Container,Text,Grid,VStack,HStack,StackDivider ,FormControl,Input,Avatar,Stack,InputGroup,InputLeftElement,InputRightElement,FormHelperText,Wrap,FormLabel,Select} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Register () {
	
	return (
	
	
<Box  w='100%'>
		
		<Box bg='blue.500' p={4} color='white' borderWidth='1px' borderRadius='lg' >
			<HStack>
				<Link to ="/" >
				  <Button colorScheme="teal" ml = '4px'>
					Home
					
				  </Button></Link>
					<Spacer />
					<Heading alignItem='center'>  Registration Page </Heading>
			 
					<Spacer />
				
				   <Link to ="/login">
				  <Button colorScheme="teal" ml = '4px'>Sign In</Button></Link>
			</HStack>
		</Box>
			  
			<VStack flexDir="column" >
				<Flex >
						<Box w='400px' />
						<Spacer />
						
						<Box w='570px' h='1000' bg='gray.200' >
						
						<Stack
							flexDir="column"
							mb="2"
							justifyContent="center"
							alignItems="center"
						  >
							<Avatar bg="teal.500" />
						
							<Box minW={{ base: "90%", md: "468px" }}/>
							
							<form>
								<Stack
								  spacing={4}
								  p="1rem"
								  backgroundColor="whiteAlpha.900"
								  boxShadow="md">
								  
								  <FormControl>
									
									<InputGroup>
									  
									  <InputLeftElement
										pointerEvents="none"/>
										
									  <Input type="text" placeholder="First Name" />
									  
									</InputGroup>
									</FormControl>
									
									 
								  <FormControl>
									
									<InputGroup>
									  
									  <InputLeftElement
										pointerEvents="none"/>
										
									  <Input type="text" placeholder="Last Name" />
									  
									</InputGroup>
									</FormControl>
									
									<FormControl>
									 
									  <Select id='gender' placeholder='Select Gender'>
										<option>Male</option>
										<option>Female</option>
										<option>Other</option>
									  </Select>
									</FormControl>
									
									 
								  <FormControl>
									
									<InputGroup>
									  
									  <InputLeftElement
										pointerEvents="none"/>
										
									  <Input type="email" placeholder="Email Address" />
									  
									</InputGroup>
									</FormControl>
									
									<FormControl>
									<InputGroup>
									  
									  <InputLeftElement
										pointerEvents="none"/>
										
									  <Input type="Password" placeholder="Password" />
											  
										
									  </InputGroup>
									  </FormControl>
									  
									<FormControl>
									<InputGroup>
									  
									  <InputLeftElement
										pointerEvents="none"/>
										
									  <Input type="Password" placeholder="Confirm Password" />
											  
										
									  </InputGroup>
									  
									  	 
								  </FormControl>
								  
									<Button
										borderRadius={0}
										type="submit"
										variant="solid"
										colorScheme="teal"
										width="full"
									>
										Register
									  </Button>
								</Stack>
							</form>
							<Box>
        Already Registered ? <Link to ="/login" > Sign In  </Link>
      
          
        
      </Box>
							</Stack>
							</Box>
							
							
						
									
						<Spacer />
						<Box w='480px'/>
			  </Flex>
		  </VStack>
</Box>


	);
}
	 export default Register;