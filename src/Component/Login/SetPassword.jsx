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

  const passwordIntegrate = async () => {
    // console.log("Click");
    const user_id = localStorage.getItem("forgot_password_user_id");

    try {
      const handlePaylode = {
        newPassword: password,
        confirmPassword: conformPassword,
      };

      const config = {
        method: "PUT",
        url: `${apiUrl}/user/submit_password/${user_id}`,
        data: handlePaylode,
      };

      const responce = await axios(config);
      console.log(responce, "Forgot Password");
      if (responce.status === 200) {
        // navigate("/userlogin");
      } else {
        alert("Input Feild Required");
      }
      //   setPassword(responce);
      //   setConformPassword(responce);
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
            <Heading marginLeft={{ base: "2.2rem", md: "1rem" }}>
              SET PASSWORD
            </Heading>
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
            color={"white"}
            _hover={{ bg: "lightgray", color: "black" }}
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
