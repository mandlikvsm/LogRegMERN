
import * as React from 'react';
import { Box ,Heading,Button,Flex,Spacer,Container,Text,Grid,VStack,HStack,StackDivider ,FormControl,Input,Avatar,Stack,InputGroup,InputLeftElement,InputRightElement,FormHelperText,Wrap} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Login () {
	
	return (
	
	
<Box  w='100%'>
		
		<Box bg='blue.500' p={4} color='white' borderWidth='1px' borderRadius='lg' >
			<HStack>
				<Link to ="/" >
				  <Button colorScheme="teal" ml = '4px'>
					Home
					
				  </Button></Link>
					<Spacer />
					<Heading alignItem='center'>  Login Page </Heading>
			 
					<Spacer />
				
				   <Link to ="/register">
				  <Button colorScheme="teal" ml = '4px'>Sign Up</Button></Link>
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
							<Avatar bg="orange.500" />
							<Heading color="orange.400">Welcome</Heading>
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
										
									  <Input type="email" placeholder="Email Address" />
									  
									</InputGroup>
									</FormControl>
									
									<FormControl>
									<InputGroup>
									  
									  <InputLeftElement
										pointerEvents="none"/>
										
									  <Input type="Password" placeholder="Password" />
											  
										<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" >
										 Show
										</Button>
									  </InputRightElement>
									  </InputGroup>
									  
									  	 <FormHelperText textAlign="right">
											  forgot password?
											</FormHelperText>  
									
								  </FormControl>
								  
									<Button
										borderRadius={0}
										type="submit"
										variant="solid"
										colorScheme="teal"
										width="full"
									>
										Login
									  </Button>
								</Stack>
							</form>
							<Box>
        New to us ? <Link to ="/register" > Sign Up </Link>
      
         
        
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
	 export default Login;