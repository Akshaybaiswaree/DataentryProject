import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react';
import Logo from "../../Images/logo.png"
const SignUp = () => {
  // Move the useState hooks outside the handleSignup function
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

  const handleSignup = async () => {
    //saari value store/get krne ke liye
    const userData = {
      //backend:frontend
      firstname: firstName,
      lastname: lastName,
      email:email,
      password:password,
      confirm_password: confirmPassword,
    };

    try {
        //  fetch we return promise and it will wait to be resolved , agar await nhi likhe toh fetch function ko pata nhi kaha rukhna
        
      const response = await fetch('http://localhost:5000/user/signup',
       {
        method: 'POST',
        //header isiliye q ki fetch use kiya
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
 
        //"firstname" : "firstname" key value pair pe aagaya
      });
        console.log("res",response)
      if (response.ok) {

        const responseData = await response.json();
        console.log('Signup successfully. Response:', responseData);
      } else {
        console.error('Signup failed. HTTP Status:', response.status);
      }
      console.log("userdata", userData);

    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <>
    {/* <Box>
    <Image src={Logo}></Image>
    <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
      <VStack spacing={4}>
        <FormControl id="firstName">
          <FormLabel>First Name</FormLabel>
          <Input type="text" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <FormControl id="confirmPassword">
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSignup}>
          Sign Up
        </Button>
      </VStack>
    </Box>
    </Box> */}
      <Center>
      <Box>
        <Image src={Logo}></Image>
        <Box 
        
        p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <VStack 
           height={'15rem'}
          spacing={4}>
            <FormControl id="firstName">
              <FormLabel>First Name</FormLabel>
              <Input type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            </FormControl>
            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </FormControl>
            <FormControl id="email">
               <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <FormControl id="confirmPassword">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="teal" size="lg" onClick={handleSignup}>
              Sign Up
            </Button>
          </VStack>
        </Box>
      </Box>
    </Center>
    </>
  );
};

export default SignUp;
