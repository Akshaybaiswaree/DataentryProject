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
  import { useNavigate } from "react-router-dom";
  const PendingForm = () => {

const Navigate=useNavigate()

const PreviousPage=()=>{
    Navigate("/user/pending")
}

    return (
      <Box className="employee-form-container">
        <Box 
        fontWeight={'700'}
        as="h3" fontSize="xl" mb="4">
         Darshan Mishra
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
                <FormLabel>Mobile</FormLabel>
                <Input
                  width={"400px"}
                  type="number"
                  placeholder="number"
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Email</FormLabel>
                <Input
                  width={"400px"}
                  type="email"
                  placeholder="kaveri@2023"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Caller Code</FormLabel>
                <Input width={"400px"} type="text" placeholder="******" />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Start date</FormLabel>
            <Input width={"400px"} type="date" placeholder="Enter Start Date" />
          </FormControl>
          </Box>
          <Box>
          <FormControl className="employee-form-group">
            <FormLabel>End date</FormLabel>
            <Input width={"400px"} type="date" placeholder="Enter End Date" />
          </FormControl>
          </Box>
          </Stack>

          <Stack direction={"row"}>
            <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Total Form</FormLabel>
            <Input width={"400px"} type="number" placeholder="780" />
          </FormControl>
          </Box>
          <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Filled form</FormLabel>
            <Input width={"400px"} type="number" placeholder="450" />
          </FormControl>
          </Box>
          </Stack>
          
         
        </form>
        <Button 
        onClick={PreviousPage}
        className="employee-btn" colorScheme="teal" mt="4">
          Save
        </Button>
      </Box>
    );
  };
  
  export default PendingForm;
  