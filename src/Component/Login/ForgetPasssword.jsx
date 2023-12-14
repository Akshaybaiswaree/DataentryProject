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
import { NavLink } from "react-router-dom";
//import OtpInput from "react-otp-input";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleGetOtp = () => {
    // Perform logic to send OTP to the email address
    onOpen();
  };

  const handleVerifyOtp = () => {
    // Perform logic to verify the entered OTP
    onClose();
  };

  // function to submit email oncick
  const submitEmail = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/user/forgot-password`,
        email,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      alert("Saved successfully.");
      onOpen();
    } catch (error) {
      console.log(`Error is ${error}`);
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
        <Heading>Forget Password</Heading>
      </Flex>

      <Input
        marginTop={"1rem"}
        padding={"1rem"}
        width={"30%"}
        mx="auto"
        background="#ebe9eb"
        height="3rem"
        type="email"
        placeholder="Enter Email"
        onFocus={(e) => (e.target.style.outline = "none")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Box width={"100%"} marginTop="1rem">
        <Button color={"white"} bg={"black"} onClick={submitEmail}>
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
