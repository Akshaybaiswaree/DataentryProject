import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef } from "react";
// import "./EmployeeProfileEdit.css";
import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [plan, setPlan] = useState("");
  const [caller, setCaller] = useState("");


  const formRef = useRef(null);
  // const navigate = useNavigate();

  // const Previouspage = () => {
  //   navigate("/user/registration");
  // };

  const AddUser = async () => {
   

    //to get the data from input in frontend part
    try {
      const userDataPayLoad = {
        name: name,
        email: email,
        mobile: number,
        address: address,
        plan: plan,
        caller: caller,
      };

      //ab backend me pahuchana hai
      console.log("data", userDataPayLoad);

      const config = {
        method: "POST",
        url: "http://localhost:5000/user/add_user",
        data: userDataPayLoad, // kya bhejna hai wo bhej rhe hai
      };


      const AdduserApiResponse = await axios(config);

      console.log("add", AdduserApiResponse);

      formRef.current.reset();
 

      // navigate("/user/registration");
    } catch (err) {
      console.log(err);
    }
  };

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
              <FormLabel>email</FormLabel>
              <Input
                value={email}
                onChange={(e) => console.log(setEmail(e.target.value))}
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
              <FormLabel>Mobile Number</FormLabel>
              <Input
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                width={"400px"}
                type="number"
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
                width={"400px"}
                type="text"
                placeholder="Address"
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Plan</FormLabel>
              <Select
                value={plan}
                onChange={(e) => {
                  setPlan(e.target.value);
                }}
                width={"400px"}
                placeholder="Select option"
              >
                <option value="option1">Plan 1</option>
                <option value="option2">Plan 2</option>
                <option value="option3">Plan 3</option>
                <option value="option3">Plan 4</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Caller</FormLabel>
              <Select
                value={caller}
                onChange={(e) => {
                  setCaller(e.target.value);
                }}
                width={"400px"}
                placeholder="Select option"
              >
                <option value="option1">Caller 1</option>
                <option value="option2">Caller 2</option>
                <option value="option3">Caller 3</option>
                <option value="option3">Caller 4</option>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </form>
     {/* <NavLink to="/user/registration"> */}
      <Button
         onClick={AddUser}
       
        // removeinputnames()
        className="employee-btn"
        colorScheme="teal"
        mt="4"
      >
        Save
      </Button>
      {/* </NavLink> */}
    </Box>
  );
};

export default RegistrationForm;
