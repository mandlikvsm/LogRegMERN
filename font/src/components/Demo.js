import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  HStack,
  Spacer,
  VStack,Center,Text,Square,Grid
} from "@chakra-ui/react";

const Demo = () => {
 

  return (
 <Box w = '100%'bg = "yellow">
  <Text>Flex and Spacer: Full width, equal Spacing</Text>
  <Flex  backgroundColor="gray.200">
    <Box w='400px' h='10' bg='red.500' />
    <Spacer />
    <Box w='170px' h='10' bg='white.500' />
    <Spacer />
    <Box w='480px' h='10' bg='red.500' />
  </Flex>

  <Text>
    Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
  </Text>
  <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    <Box w='70px' h='10' bg='blue.500' />
    <Box w='170px' h='10' bg='blue.500' />
    <Box w='180px' h='10' bg='blue.500' />
  </Grid>

  <Text>
    HStack: The children have equal spacing but don't span the whole container
  </Text>
  <HStack spacing='24px'>
    <Box w='100px' h='10' bg='red.500' />
    <Box w='170px' h='10' bg='teal.500' />
    <Box w='180px' h='10' bg='red.500' />
  </HStack>
</Box>
	 
  );
};

export default Demo;
