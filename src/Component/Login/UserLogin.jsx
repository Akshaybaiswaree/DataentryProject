<<<<<<< HEAD
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Image, Input, Flex, Button, Heading } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Icons from react-icons library
import logo from "../../Images/logo.png";
import axios from "axios";

const UserLogin = () => {

  const [userId , setUserID] = useState('')
  const [password , setPassword] = useState('')

  const handleSubmit = async()=>{
      try{
          const userDataPayLoad = {
            email : userId,
            password : password
          }
          const config = {
            methode : "post",
            url : "http://localhost:10000/user/signin",
            data : userDataPayLoad
          }
          const usarLogInApi = await axios (config)
          console.log(usarLogInApi, "userLogIn");
      }
      catch(err){
        console.error(err)
      }
  }


  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="20px"
      bg="#ebe9eb"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginY="20px"
      >
        <Image width={"13rem"} src={logo} alt="" />
=======
// export default UserLogin;
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Icons from react-icons library
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";
// import logo from "../../Images/logo.png";
import logo from "../../Images/Group 1000004815.svg";
import { jwtDecode } from "jwt-decode";
import { useUserContext } from "../Context/UserContext";

const UserLogin = () => {
  const { setUserContext } = useUserContext();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const [errors, setErrors] = useState({});

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputFields((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  const validationForm = () => {
    const newError = {};
    if (!inputFields.email.match(emailRegex)) {
      newError.email = "Invalid Email Address";
    }

    if(!inputFields.password.match(passwordRegex)){
      newError.password = "Invalid Password "
    }
    setErrors(newError);
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!validationForm()) {
    //   return; // If validation fails, don't proceed with submission
    // }
    try {
      const response = await axios.post(
        `${apiUrl}/user/userlogin`,
        inputFields, // Pass inputFields directly as the request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response, "response");
      if (response.data.status === "Freeze") {
        navigate("/qccheck");
      }

>>>>>>> sagar
      
      else if (response.status === 200) {
        console.log(response);
        navigate("/assignment");
      } else {
        alert("Invalid credentials");
      }
      
      console.log(response.data, "response.data.status");
      setUserContext(response.data.role);
      // ectracting token from response
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      localStorage.setItem("token", JSON.stringify(decodedToken));
      // alert("Login successfully.");
      //  Navigate to dahboard after login

     
    } catch (error) {
      console.log(`Error is ${error}`);
      // Handle error appropriately, e.g., show a user-friendly error message
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box  
     
     width={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }} // Adjust width based on screen size
     marginX="auto" // Center horizontally
     minHeight="100vh" // Ensure full height even if content is not enough
     display="flex"
     flexDirection="column"
     alignItems="center"
     justifyContent={"center"}
     padding="20px"
     bg="#ebe9eb"
      >
        
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginY="20px"
        >
          <Image width={"13rem"} src={logo} alt="" />
          <Heading
          marginTop={'1rem'}
          color="#000" fontFamily="Poppins, serif" size="lg">
            User Login
          </Heading>
        </Box>
<<<<<<< HEAD
        <NavLink to ="/">
        <Button height={"3rem"} style={buttonStyle} onClick={handleSubmit}>
            Login
        </Button>
        </NavLink>
      </Flex>
    </Box>
=======

        <Flex
          direction="column"
          width={["90%", "70%", "50%", "40%"]}
         
        >
          <Flex alignItems="center" bg="white" borderRadius="30px" p="10px">
            <FaEnvelope style={{ width: "4%", marginLeft: "20px" }} />
            <Input
              name="email"
              type="text"
              placeholder="UserID"
              style={inputStyle}
              onFocus={(e) => (e.target.style.outline = "none")}
              required
              onChange={onChangeHandler}
              value={inputFields.email}
            />
          </Flex>
        </Flex>
        {errors.email && (
          <Alert w="70" status='error'>
            <AlertIcon />
            <AlertTitle> {errors.email}</AlertTitle>
          </Alert>
        )}

        <Flex
          direction="column"
          width={["90%", "70%", "50%", "40%"]}
          marginY="10px"
        >
          <Flex alignItems="center" bg="white" borderRadius="30px" p="10px">
            <FaLock style={{ width: "4%", marginLeft: "20px" }} />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              style={inputStyle}
              onFocus={(e) => (e.target.style.outline = "none")}
              value={inputFields.password}
              onChange={onChangeHandler}
            />
          </Flex>
        </Flex>
        {errors.email && (
          <Alert w="70" status='error'>
            <AlertIcon />
            <AlertTitle> {errors.email}</AlertTitle>
          </Alert>
        )}
        <Flex direction="column" width={["90%", "70%", "50%", "40%"]}>
          <Box marginBottom={"0.6rem"} display="flex" justifyContent="flex-end">
            <NavLink
              to="/ForgetPassword"
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                color: "black",
                marginRight: "20px",
              }}
            >
              Forget the password?
            </NavLink>
          </Box>
          <Button
            height={"3rem"}
            style={buttonStyle}
            type="submit"
            _hover={{ background: "FloralWhite", color: "black" }}
          >
            Login
          </Button>
        </Flex>
      </Box>
    </form>
>>>>>>> sagar
  );
};

const inputStyle = {
  outline: "none",
  marginLeft: "10px",
  width: "100%",
  border: "none",
  background: "white",
  fontSize: "16px",
  color: "gray",
  fontFamily: '"Poppins", sans-serif',
  fontWeight: "400",
  height: "45px",
  borderRadius: "20px",
};

const buttonStyle = {
  padding: "15px",
  width: "100%",
  borderRadius: "25px",
  border: "2px solid black",
  color: "#fff",
  background: "black",
  fontWeight: "700",
  fontFamily: '"Poppins", sans-serif',
};

export default UserLogin;
