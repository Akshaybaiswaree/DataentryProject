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
import axios from "axios";
import React, { useState } from "react";
// import "./EmployeeProfileEdit.css";

import { useNavigate } from "react-router-dom";

const Employeeform = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");

  const AddEmployee = async () => {
    try {
      const EmployeepayLoad = {
        name: name,
        mobile: number,
        email: email,
        address: address,
        designation: designation,
        salary: salary,
      };



      const config={
        method:"POST",
        url:"http://localhost:5000/user/add_employee",
        data: EmployeepayLoad,
      }
       console.log("config",config)

      const ApiResponse= await axios(config)
      console.log("apiresponse" , ApiResponse)
                        
      console.log("data",data);


      console.log("employee=", EmployeepayLoad);
    } catch(err) {

      console.log(err);
    }
  };

  // const Navigate=useNavigate()

  // const handlelogout=()=>{
  //   Navigate("/employees");
  // }

  return (
    <Box className="employee-form-container">
      <form className="employee-form">
        <Stack direction={"row"}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => console.log(setName(e.target.value))}
                width={"400px"}
                type="text"
                placeholder="Kaveri Kappor"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Mobile</FormLabel>
              <Input
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                width={"400px"}
                type="number"
                placeholder="7654654654"
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>email</FormLabel>
              <Input
                value={email}
                onChange={(e) => console.log(setEmail(e.target.value))}
                width={"400px"}
                type="email"
                placeholder="kaveri@2023"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Address</FormLabel>
              <Input 
               value={address}
               onChange={(e) => {
                 setAddress(e.target.value);
               }}
              width={"400px"} type="text" placeholder="Address" />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Designation</FormLabel>
              <Input 
              value={designation}
              onChange={(e) =>{setDesignation(e.target.value)}}
              width={"400px"} type="text" placeholder="designation" />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Salary</FormLabel>
              <Input
              value={salary}
              onChange={(e)=>{setSalary(e.target.value)}}
                width={"400px"}
                type="number"
                placeholder="Salary"
              />
            </FormControl>
          </Box>
        </Stack>
      </form>

      <Button
        onClick={AddEmployee}
        className="employee-btn"
        colorScheme="teal"
        mt="4"
      >
        Save
      </Button>
    </Box>
  );
};

export default Employeeform;
