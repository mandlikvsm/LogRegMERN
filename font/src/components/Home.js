
import { Box ,Heading,Button,Flex,Spacer,Container,Text,Grid,VStack,HStack,StackDivider ,FormControl,Input,Avatar,Stack,InputGroup,InputLeftElement,InputRightElement,FormHelperText} from '@chakra-ui/react'
import * as React from 'react';
//import { Stack , Button ,AppBar,Box,Container} from '@mui/material';
import { Link } from 'react-router-dom';
function Home () {
	
	return (


  
		<Box bg='blue.500'w = '100%' p={4} color='white' borderWidth='1px' borderRadius='lg' >
			<HStack>
			
				<Heading alignItem='left'>  Dashboard </Heading>
				<Spacer />
				<Link to ="/login" >
				  <Button colorScheme="teal" ml = '4px'>
					Sign In
					
				  </Button></Link>
					
			 
					
				
				   <Link to ="/register">
				  <Button colorScheme="teal" ml = '4px'>Sign Up</Button></Link>
			</HStack>
		</Box>





 

	
	);
}
	 export default Home;