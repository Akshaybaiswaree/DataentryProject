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
import logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";

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
        <Button  color={'white'}
        bg={'black'} onClick={handleGetOtp}>
          Get OTP
        </Button>
      </Box>
      <Input
        marginTop={"1rem"}
        padding={"1rem"}
        width={"30%"}
        mx="auto"
        background="#ebe9eb"
        height="3rem"
        type="text"
        placeholder="Enter Passowrd"
        onFocus={(e) => (e.target.style.outline = "none")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        marginTop={"1rem"}
        padding={"1rem"}
        width={"30%"}
        mx="auto"
        background="#ebe9eb"
        height="3rem"
        type="text"
        placeholder="Confirm password"
        onFocus={(e) => (e.target.style.outline = "none")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    
       
     <Box width={"100%"} marginTop="1rem">
        <NavLink to="/dashboard">
        <Button colorScheme="blue" onClick={handleGetOtp}>
          Submit
        </Button>
        </NavLink>
      </Box>
     
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"whitesmoke"}>
          <ModalHeader>Enter OTP</ModalHeader>
          <ModalCloseButton bg={"gray"} />
          <ModalBody>
            <InputGroup>
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleVerifyOtp}>
                  Verify
                </Button>
              </InputRightElement>
            </InputGroup>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ForgetPassword;
