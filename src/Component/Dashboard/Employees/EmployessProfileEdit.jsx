import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
// import "./EmployeeProfileEdit.css";

const EmployeeProfileEdit = () => {
  return (
    <Box className="employee-form-container">
      <Box as="h3" fontSize="xl" mb="4">
        Edit User Detail
      </Box>
      <form className="employee-form">
        <Stack direction={"row"}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Name</FormLabel>
              <Input width={"400px"} type="text" placeholder="Kaveri Kappor" />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Email</FormLabel>
              <Input
                width={"400px"}
                type="email"
                placeholder="kaveri@gmail.com"
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Password</FormLabel>
              <Input
                width={"400px"}
                type="password"
                placeholder="kaveri@2023"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Access Code</FormLabel>
              <Input width={"400px"} type="text" placeholder="******" />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
        <FormControl className="employee-form-group">
          <FormLabel>Mobile</FormLabel>
          <Input width={"400px"} type="text" placeholder="9647523148" />
        </FormControl>
        </Box>
        <Box>
        <FormControl className="employee-form-group">
          <FormLabel>Address</FormLabel>
          <Input width={"400px"} type="text" placeholder="Enter Address" />
        </FormControl>
        </Box>
        </Stack>
        <FormControl className="employee-form-group">
          <FormLabel>Salary</FormLabel>
          <Input width={"400px"} type="text" placeholder="10000" />
        </FormControl>
       
      </form>
      <Button className="employee-btn" colorScheme="teal" mt="4">
        Save
      </Button>
    </Box>
  );
};

export default EmployeeProfileEdit;
