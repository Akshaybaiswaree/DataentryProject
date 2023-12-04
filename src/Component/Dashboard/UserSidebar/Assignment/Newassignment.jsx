import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    StackDivider,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  // import "./EmployeeProfileEdit.css";


  import { useNavigate } from "react-router-dom";
  
  const NewAssignment = () => {

  const Navigate=useNavigate()

  const Previouspage=()=>{
    Navigate("/assignment");
  }

    return (
      <Box className="employee-form-container">
        <Text  fontWeight={'600'}marginY={'1rem'}>New Assignment</Text>
       
        <form className="employee-form">
          <Stack direction={"row"}>
            <Box>
              <FormControl isRequired className="employee-form-group">
                <FormLabel> First Name</FormLabel>
                <Input width={"400px"} type="text" placeholder="Kaveri Kappor" />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired className="employee-form-group">
                <FormLabel>Last Name</FormLabel>
                <Input
                  width={"400px"}
                  type="number"
                  placeholder="kaveri@gmail.com"
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
              <FormControl isRequired className="employee-form-group">
                <FormLabel>email</FormLabel>
                <Input
                  width={"400px"}
                  type="email"
                  placeholder="kaveri@2023"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired className="employee-form-group">
                <FormLabel>Mobile Number</FormLabel>
                <Input width={"400px"} type="number" placeholder="Address" />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
          <FormControl isRequired className="employee-form-group">
            <FormLabel>Licence </FormLabel>
            <Input width={"400px"} type="text" placeholder="caller" />
          </FormControl>
          </Box>
          <Box>
          <FormControl isRequired className="employee-form-group">
            <FormLabel>IP</FormLabel>
            <Input width={"400px"} type="text" placeholder="Enter Address" />
          </FormControl>
          </Box>
          </Stack>

          <Box>
          <FormControl isRequired className="employee-form-group">
            <FormLabel>Pincode</FormLabel>
            <Input width={"400px"} type="number" placeholder="Enter Address" />
          </FormControl>
          </Box>
         
         
        </form>
        
        <Button 
        onClick={Previouspage}
        className="employee-btn" colorScheme="teal" mt="4">
          Submit
        </Button>
      </Box>
    );
  };
  
  export default NewAssignment;
  