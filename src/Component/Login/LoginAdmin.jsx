


import { Box, Button, Flex, Heading, Image, Input, Alert,
  AlertIcon,
  AlertTitle, } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Icons from react-icons library
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";
import logo from "../../Images/Group 1000004815.svg";
import { jwtDecode } from "jwt-decode";
import { useUserContext } from "../Context/UserContext";

// Admin Login Page
const LoginAdmin = () => {
  const { setUserContext } = useUserContext();

  const [userrole , setUserrole] =useState("")

  const [errors , setErrors] = useState({})
  const navigate = useNavigate();
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
  
  const validationForm = (inputFields) => {
    // console.log(inputFields);
    const newError = {};
    if (!inputFields.email.match(emailRegex)) {
      newError.email = "Invalid Email Address";
    }
    // console.log("email success");
    if(!inputFields.password.match(passwordRegex)){
      newError.password = "Invalid Password "
    }
    setErrors(newError);
    // console.log(" success");
    return true;
  };
  // handle submit login button
  const handleSubmit = async (e) => {
    console.log("called");
    e.preventDefault();
    const validate = validationForm(inputFields);
    console.log(validate);
       if(!validate){
      return alert("fields are not valid")
    }
    console.log(inputFields , "inputFields")
 
    try {
      const apiUrl = import.meta.env.VITE_APP_API_URL;
      const response = await axios.post(
        ` ${apiUrl}/user/adminsignin`,
        inputFields, // Pass inputFields directly as the request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response,"Admin Ka Email and Password");

      setUserrole(response.data.role)
      setUserContext(response.data.role);
      console.log(response.data.role , "response.data.role")
      // extracting token from response
      const token = response.data.token;
      // decodint the token
      const decodedToken = jwtDecode(token);
      // save the token in localstorage
      localStorage.setItem("token", JSON.stringify(decodedToken));
      // alert("Login successfully.");
      //  Navigate to dahboard after login
      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        alert("Invalid credentials ");
      }
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };
  return (
    <form >
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
            Admin Login
          </Heading>
        </Box>

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
          <Alert width="20%" status='error'>
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
          <Alert width="20%" status='error'>
            <AlertIcon />
            <AlertTitle>{errors.password}</AlertTitle>
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
          <Button height={"3rem"} style={buttonStyle} type="submit" onClick={handleSubmit}>
            Login
            {/* </Link> */}
          </Button>
        </Flex>
      </Box>
    </form>
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

export default LoginAdmin;

