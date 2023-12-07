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
  
  const EditRegistration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [plan, setPlan] = useState("");
    const [caller, setCaller] = useState("");
  
  
    // const formRef = useRef(null);
    // const navigate = useNavigate();
  
    // const Previouspage = () => {
    //   navigate("/user/registration");
    // };
  
    // const AddUser = async () => {
     
  
    //   //to get the data from input in frontend part
    //   try {
    //     const userDataPayLoad = {
    //       name: name,
    //       email: email,
    //       mobile: number,
    //       address: address,
    //       plan: plan,
    //       caller: caller,
    //     };
  
    //     //ab backend me pahuchana hai
    //     console.log("data", userDataPayLoad);
  
    //     const config = {
    //       method: "POST",
    //       url: "http://localhost:5000/user/add_user",
    //       data: userDataPayLoad, // kya bhejna hai wo bhej rhe hai
    //     };
  
  
    //     const AdduserApiResponse = await axios(config);
  
    //     console.log("add", AdduserApiResponse);
  
    //     formRef.current.reset();
   
  
    //     // navigate("/user/registration");
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
  
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
                <FormLabel>Password</FormLabel>
                <Input
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  width={"400px"}
                  type="password"
                  placeholder="kaveri@2023"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Access Code</FormLabel>
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
                <FormLabel>Mobile</FormLabel>
                <Input
                 
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
                <FormLabel>caller</FormLabel>
                <Input
                 
                  width={"400px"}
                  type="number"
                  placeholder="kaveri@2023"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Amount</FormLabel>
                <Input
                  
                  width={"400px"}
                  type="number"
                  placeholder="Address"
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Start Date</FormLabel>
                <Input
                 
                  width={"400px"}
                  type="date"
                  placeholder="kaveri@2023"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>End date</FormLabel>
                <Input
                  
                  width={"400px"}
                  type="date"
                  placeholder="Address"
                />
              </FormControl>
            </Box>
          </Stack>
          <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Remark</FormLabel>
                <Input
                  
                  width={"400px"}
                  type="text"
                  placeholder="Address"
                />
              </FormControl>
            </Box>

        </form>

        <Button className="employee-btn" colorScheme="teal" mt="4">
        Save
      </Button>
    
      </Box>
    );
  };
  
  export default  EditRegistration;
  