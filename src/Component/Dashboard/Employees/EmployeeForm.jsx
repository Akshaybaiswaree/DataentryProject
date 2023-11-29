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
  
  const Employeeform = () => {

  const Navigate=useNavigate()

  const handlelogout=()=>{
    Navigate("/employees");
  }

    return (
      <Box className="employee-form-container">
       
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
                  placeholder="kaveri@gmail.com"
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>email</FormLabel>
                <Input
                  width={"400px"}
                  type="email"
                  placeholder="kaveri@2023"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Address</FormLabel>
                <Input width={"400px"} type="text" placeholder="Address" />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Designation</FormLabel>
            <Input width={"400px"} type="text" placeholder="caller" />
          </FormControl>
          </Box>
          <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Salary</FormLabel>
            <Input width={"400px"} type="number" placeholder="Enter Address" />
          </FormControl>
          </Box>
          </Stack>
         
         
        </form>
        
        <Button 
        onClick={handlelogout}
        className="employee-btn" colorScheme="teal" mt="4">
          Save
        </Button>
      </Box>
    );
  };
  
  export default Employeeform;
  