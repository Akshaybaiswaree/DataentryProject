import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Image, Input, Flex, Button, Heading } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Icons from react-icons library
import logo from "../../Images/logo.png";

const LoginAdmin = () => {
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
        <Heading color="#000" fontFamily="Poppins, serif" size="lg">
          Admin Login
        </Heading>
      </Box>

      <Flex
        direction="column"
        width={["90%", "70%", "50%", "40%"]}
        marginY="10px"
      >
        <Flex alignItems="center" bg="white" borderRadius="30px" p="10px">
          <FaEnvelope style={{ width: "4%", marginLeft: "20px" }} />
          <Input
            type="text"
            placeholder="UserID"
            style={inputStyle}
            onFocus={(e) => (e.target.style.outline = "none")}
          />
        </Flex>
      </Flex>

      <Flex
        direction="column"
        width={["90%", "70%", "50%", "40%"]}
        marginY="10px"
      >
        <Flex alignItems="center" bg="white" borderRadius="30px" p="10px">
          <FaLock style={{ width: "4%", marginLeft: "20px" }} />
          <Input
            type="password"
            placeholder="Password"
            style={inputStyle}
            onFocus={(e) => (e.target.style.outline = "none")}
          />
        </Flex>
      </Flex>

      <Flex direction="column" width={["90%", "70%", "50%", "40%"]}>
        <Box marginBottom={"0.6rem"} display="flex" justifyContent="flex-end">
          <NavLink to="/ForgetPassword"
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
        <Button height={"3rem"} style={buttonStyle}>
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/ForgetPassword"
          >
            Login
          </Link>
        </Button>
      </Flex>
    </Box>
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
