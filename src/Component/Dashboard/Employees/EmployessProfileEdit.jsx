import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

// import "./EmployeeProfileEdit.css";

const EmployeeProfileEdit = () => {
  return (
    <Box className="employee-form-container" mt="8" mx="auto" width="50%">
      <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
        Edit User Details
      </Box>
      <form className="employee-form">
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              width="100%" // Set the width to 100%
              type="text"
              placeholder="Kaveri Kappor"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              width="100%" // Set the width to 100%
              type="email"
              placeholder="kaveri@gmail.com"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              width="100%" // Set the width to 100%
              type="password"
              placeholder="kaveri@2023"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Access Code</FormLabel>
            <Input
              width="100%" // Set the width to 100%
              type="text"
              placeholder="******"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile</FormLabel>
            <Input
              width="100%" // Set the width to 100%
              type="text"
              placeholder="9647523148"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              width="100%" // Set the width to 100%
              type="text"
              placeholder="Enter Address"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Salary</FormLabel>
            <Input
              width="100%" // Set the width to 100%
              type="text"
              placeholder="10000"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
        </Stack>
      </form>
      <Button
        className="employee-btn"
        colorScheme="teal"
        mt="4"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ bgColor: "teal.600" }}
        fontSize="lg"
        fontWeight="bold"
        p={4}
        width="30%"
      >
        Save
      </Button>
    </Box>
  );
};

export default EmployeeProfileEdit;
