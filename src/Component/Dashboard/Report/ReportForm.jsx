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
  
  const ReportForm= () => {

  const Navigate=useNavigate()

  const handlelogout=()=>{
    Navigate("/report");
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
                <FormLabel>Address</FormLabel>
                <Input width={"400px"} type="text" placeholder="Caller" />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Start Date</FormLabel>
            <Input width={"400px"} type="text" placeholder="start date" />
          </FormControl>
          </Box>
          <Box>
          <FormControl className="employee-form-group">
            <FormLabel>End Date</FormLabel>
            <Input width={"400px"} type="number" placeholder="End Date" />
          </FormControl>
          </Box>
          </Stack>

          <Stack direction={"row"}>
            <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Total Form</FormLabel>
            <Input width={"400px"} type="number" placeholder="start date" />
          </FormControl>
          </Box>
          <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Filled Form</FormLabel>
            <Input width={"400px"} type="number" placeholder="End Date" />
          </FormControl>
          </Box>
          </Stack>

          <Stack direction={"row"}>
            <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Right Form</FormLabel>
            <Input width={"400px"} type="number" placeholder="start date" />
          </FormControl>
          </Box>
          <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Filled Form</FormLabel>
            <Input width={"400px"} type="number" placeholder="End Date" />
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
  
  export default ReportForm;
  