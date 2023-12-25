

import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import logo from "../../Images/Group 1000004815.svg";
import { useNavigate } from 'react-router-dom';
import OtpInput from "react-otp-input";
import axios from "axios";

const ForgetPassword = () => {

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleGetOtp = () => {
    // Perform logic to send OTP to the email address
    onOpen();
    forOtpIntegration()
  };

  const forOtpIntegration = async ()=>{
// console.log("OTP Mil raha");
    const handlePaylode = {
      passwordResetOTP : otp
    }

    const config = {
      method : "POST",
      url :  `${apiUrl}/user/verify_otp`,
      data : handlePaylode
    }
    const responce = await axios(config)
    setOtp(responce)
   navigate=("/setPassword")
    console.log(responce,"For Otp ");
  }

  const handleVerifyOtp = () => {
    // Perform logic to verify the entered OTP
    onClose();
  };

  // function to submit email oncick
  const submitEmail = async () => {

    try{
      const handlePaylode = {
        email : email
      }
      const config = {
        method : "POST",
        url : `${apiUrl}/user/forgot_password`,
        data : handlePaylode
      }
  
      const responce = await axios(config)
      setEmail(responce)
      console.log(responce, "Yaha pr Email Show Hoga");
      alert("Saved successfully.");
       onOpen();
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
       justifyContent={"center"}
      height={"100vh"}
      textAlign="center"
    >
      <Flex direction="column" alignItems="center" fontFamily="Poppins">
        <Image width={"60%"} src={logo} alt="" />
        <Heading
        marginTop={'1rem'}
        >Forget Password</Heading>
      </Flex>

      <Input
        marginTop={"1rem"}
        padding={"1rem"}
        width={{base:"80%" , md:"30%"}}
        mx="auto"
        background="#ebe9eb"
        height="3rem"
        type="email"
        placeholder="Enter Email"
        onFocus={(e) => (e.target.style.outline = "none")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Box 
      
      width={{base:"100%",md:"100%"}}
    
      marginTop="1rem">
        <Button 
          _hover={{bg:"lightgray",color:"black"}}
          height={{base:"3rem"}}
        color={"white"} bg={"black"} onClick={submitEmail}>
          Get OTP
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"whitesmoke"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ModalHeader>Enter OTP</ModalHeader>
          <ModalCloseButton bg={"gray"} />
          <ModalBody
            style={{ width: "90%", display: "flex", justifyContent: "center" }}
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span style={{ padding: "3px" }}>-</span>}
             
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    width: "30px",
                    border: "2px solid black",
                    display: "flex",
                    textAlign: "center",
                  }}
                />
              )}
            />
          </ModalBody>
          <ModalFooter>
            <Box width={"100%"} marginTop="1rem">
              <Button color={"white"} bg={"black"} onClick={handleGetOtp}>
                Verify OTP
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ForgetPassword;
