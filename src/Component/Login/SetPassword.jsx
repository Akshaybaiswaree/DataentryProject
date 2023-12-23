import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    Flex,
    VStack,
    Center,
    Heading,
    Image,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import logo from "../../Images/Group 1000004815.svg";
  
  const SetPassword = () => {
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_APP_API_URL;
    const [password, setPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");
  
    const token = localStorage.getItem("token");
    const tokenData = JSON.parse(token);
  
    // Access the _id field
    const id = tokenData._id;
    console.log(token, id, "tokan");
  
    const passwordIntegrate = async () => {
      // console.log("Click");
  
      try {
        const handlePaylode = {
          newPassword: password,
          confirmPassword: conformPassword,
        };
  
        const config = {
          method: "PUT",
          url: `${apiUrl}/user/submit_password/${id}`,
          data: handlePaylode,
        };
  
        const responce = await axios(config);
        navigate("/userlogin");
        //   setPassword(responce);
        //   setConformPassword(responce);
        console.log(responce, "Forgot Password");
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <>
        <Center height="100vh">
              
          <VStack spacing={4} width="300px">
       <Flex direction="column" alignItems="center" fontFamily="Poppins">
          <Image src={logo} alt="" />
        
        </Flex>
            <FormControl>
  
              <Heading p="0.5rem">SET PASSWORD</Heading>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
  
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={conformPassword}
                onChange={(e) => setConformPassword(e.target.value)}
              />
            </FormControl>
            <Button
            bg={"black"}
            color={'white'}
            _hover={{bg:"lightgray",color:"black"}}
              size="lg"
              width="100%"
              onClick={passwordIntegrate}
            >
              Submit
            </Button>
          </VStack>
        </Center>
      </>
    );
  };
  
  export default SetPassword;
  