

import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Image,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import Logo from "../../Images/Group 1000004815.svg";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  // Move the useState hooks outside the handleSignup function
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleSignup = async () => {
    const userData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };

    const apiUrl = import.meta.env.VITE_APP_API_URL;
    try {
      const response = await fetch(`${apiUrl}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log("res", response);
      if (response.ok) {
        const responseData = await response.json();
        navigate("./Login");
        console.log("Signup successfully. Response:", responseData);
      } else {
        console.error("Signup failed. HTTP Status:", response.status);
      }
      console.log("userdata", userData);
    } catch (error) {
      console.error("Error during signup:", error);
    }
    formRef.current.reset();
  };

  return (
    <>
      <Center>
        <Box mt="1" w={{ base: "80%", md: "400px" }}>
          <Center>
            <Image h="70px" src={Logo} mb="2" />
          </Center>
          <Box
            p={8}
            maxWidth="400px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
          >
            <VStack spacing={4}>
              <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <FormControl id="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormControl>
              <Button colorScheme="blue" w="100%" onClick={handleSignup}>
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
