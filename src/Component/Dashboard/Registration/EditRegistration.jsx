// import {
//     Box,
//     Button,
//     Flex,
//     FormControl,
//     FormLabel,
//     Input,
//     Select,
//     Stack,
//     StackDivider,
//   } from "@chakra-ui/react";
//   import axios from "axios";
//   import React, { useEffect, useRef } from "react";
//   // import "./EmployeeProfileEdit.css";
//   import { useState } from "react";
  
//   import { NavLink, useNavigate } from "react-router-dom";
  
//   const EditRegistration = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [number, setNumber] = useState("");
//     const [address, setAddress] = useState("");
//     const [plan, setPlan] = useState("");
//     const [caller, setCaller] = useState("");
  
  
//     // const formRef = useRef(null);
//     // const navigate = useNavigate();
  
//     // const Previouspage = () => {
//     //   navigate("/user/registration");
//     // };
  
//     // const AddUser = async () => {
     
  
//     //   //to get the data from input in frontend part
//     //   try {
//     //     const userDataPayLoad = {
//     //       name: name,
//     //       email: email,
//     //       mobile: number,
//     //       address: address,
//     //       plan: plan,
//     //       caller: caller,
//     //     };
  
//     //     //ab backend me pahuchana hai
//     //     console.log("data", userDataPayLoad);
  
//     //     const config = {
//     //       method: "POST",
//     //       url: "http://localhost:5000/user/add_user",
//     //       data: userDataPayLoad, // kya bhejna hai wo bhej rhe hai
//     //     };
  
  
//     //     const AdduserApiResponse = await axios(config);
  
//     //     console.log("add", AdduserApiResponse);
  
//     //     formRef.current.reset();
   
  
//     //     // navigate("/user/registration");
//     //   } catch (err) {
//     //     console.log(err);
//     //   }
//     // };
  
//     return (
//       <Box className="employee-form-container">
//         <form className="employee-form">
//           <Stack direction={"row"}>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>Name</FormLabel>
//                 <Input
//                   value={name}
//                   onChange={(e) => console.log(setName(e.target.value))}
//                   width={"400px"}
//                   type="text"
//                   placeholder="Kaveri Kappor"
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>email</FormLabel>
//                 <Input
//                   value={email}
//                   onChange={(e) => console.log(setEmail(e.target.value))}
//                   width={"400px"}
//                   type="email"
//                   placeholder="kaveri@gmail.com"
//                 />
//               </FormControl>
//             </Box>
//           </Stack>
//           <Stack direction={"row"}>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>Password</FormLabel>
//                 <Input
//                   value={number}
//                   onChange={(e) => {
//                     setNumber(e.target.value);
//                   }}
//                   width={"400px"}
//                   type="password"
//                   placeholder="kaveri@2023"
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>Access Code</FormLabel>
//                 <Input
//                   value={address}
//                   onChange={(e) => {
//                     setAddress(e.target.value);
//                   }}
//                   width={"400px"}
//                   type="text"
//                   placeholder="Address"
//                 />
//               </FormControl>
//             </Box>
//           </Stack>
         

//           <Stack direction={"row"}>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>Mobile</FormLabel>
//                 <Input
                 
//                   width={"400px"}
//                   type="number"
//                   placeholder="kaveri@2023"
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>Address</FormLabel>
//                 <Input
                  
//                   width={"400px"}
//                   type="text"
//                   placeholder="Address"
//                 />
//               </FormControl>
//             </Box>
//           </Stack>


//           <Stack direction={"row"}>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>caller</FormLabel>
//                 <Input
                 
//                   width={"400px"}
//                   type="number"
//                   placeholder="kaveri@2023"
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>Amount</FormLabel>
//                 <Input
                  
//                   width={"400px"}
//                   type="number"
//                   placeholder="Address"
//                 />
//               </FormControl>
//             </Box>
//           </Stack>
//           <Stack direction={"row"}>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>Start Date</FormLabel>
//                 <Input
                 
//                   width={"400px"}
//                   type="date"
//                   placeholder="kaveri@2023"
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>End date</FormLabel>
//                 <Input
                  
//                   width={"400px"}
//                   type="date"
//                   placeholder="Address"
//                 />
//               </FormControl>
//             </Box>
//           </Stack>
//           <Box>
//               <FormControl className="employee-form-group">
//                 <FormLabel>Remark</FormLabel>
//                 <Input
                  
//                   width={"400px"}
//                   type="text"
//                   placeholder="Address"
//                 />
//               </FormControl>
//             </Box>

//         </form>

//         <Button className="employee-btn" colorScheme="teal" mt="4">
//         Save
//       </Button>
    
//       </Box>
//     );
//   };
  
//   export default  EditRegistration;
  

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
  
  import { Link, useNavigate, useParams } from "react-router-dom";
  
  const EditRegistration = () => {
    // getting id from params
    const { userId } = useParams();
    const navigate = useNavigate();
    console.log(userId);
  
    const [inputField, setInputField] = useState({
      name: "",
      email: "",
      mobile: "",
      address: "",
      plan: "",
      caller: "",
      endDate: "",
      startDate: "",
      status: "",
    });
  
    // useEffect to call
    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/user/getuser_by_id/${userId}`
          );
          const data = response.data;
          console.log(data?.User.name);
          console.log(data?.User);
          setInputField({
            name: data?.User?.name,
            email: data?.User?.email,
            mobile: data?.User?.mobile,
            address: data?.User?.address,
            plan: "",
            caller: data?.User?.caller,
            endDate: formatDate(data?.User?.endDate),
            startDate: formatDate(data?.User?.startDate),
            status: "",
          });
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
  
      fetchUserDetails();
    }, [userId]);
  
    const formatDate = (dateString) => {
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB", options);
    };
  
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
      let formattedValue = value;
  
      if (name.includes("Date")) {
        formattedValue = formatDate(new Date(value));
      }
  
      setInputField((prevValue) => ({
        ...prevValue,
        [name]: formattedValue,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputField);
      try {
        const response = await axios.put(
          `http://localhost:5000/user/edit_user/${userId}`,
          inputField,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(response);
        alert("Saved successfully.");
        navigate("/user/registration");
      } catch (error) {
        console.log(`Error is ${error}`);
      }
    };
    
    return (
      <Box 
      marginLeft={'1rem'}
      marginTop={'1rem'}
      className="employee-form-container">
        <form className="employee-form" onSubmit={handleSubmit}>
          <Stack direction= {{base:"column" , md:"row"}}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Name</FormLabel>
                <Input
                  width={"400px"}
                  type="text"
                  placeholder="Kaveri Kappor"
                  name="name"
                  value={inputField.name}
                  onChange={onChangeHandler}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  value={inputField.email}
                  onChange={onChangeHandler}
                  width={"400px"}
                  type="email"
                  mailto:placeholder="kaveri@gmail.com"
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={[ "column" ,"row"]}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  value={inputField.password}
                  onChange={onChangeHandler}
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
                  name="name"
                  value={inputField.name}
                  onChange={onChangeHandler}
                  width={"400px"}
                  type="text"
                  placeholder="Address"
                />
              </FormControl>
            </Box>
          </Stack>
  
          <Stack direction={[ "column" ,"row"]}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Mobile</FormLabel>
                <Input
                  width={"400px"}
                  type="number"
                  name="mobile"
                  value={inputField.mobile}
                  onChange={onChangeHandler}
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
                  name="address"
                  value={inputField.address}
                  onChange={onChangeHandler}
                />
              </FormControl>
            </Box>
          </Stack>
  
          <Stack direction={[ "column" ,"row"]}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Caller</FormLabel>
                <Input
                  width={"400px"}
                  type="text"
                  placeholder="kaveri@2023"
                  name="caller"
                  value={inputField.caller}
                  onChange={onChangeHandler}
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
                  name="plan"
                  value={inputField.plan}
                  onChange={onChangeHandler}
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={[ "column" ,"row"]}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Start Date</FormLabel>
                <Input
                  width={"400px"}
                  name="startDate"
                  value={inputField.startDate}
                  onChange={onChangeHandler}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>End date</FormLabel>
                <Input
                  width={"400px"}
                  name="endDate"
                  value={inputField.endDate}
                  onChange={onChangeHandler}
                />
              </FormControl>
            </Box>
          </Stack>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Remark</FormLabel>
              <Input width={"400px"} type="text" placeholder="Remark" name="" />
            </FormControl>
          </Box>
  
          <Button
            className="employee-btn"
            colorScheme="teal"
            mt="4"
            type="submit"
          >
            Save
          </Button>
        </form>
      </Box>
    );
  };
  
  export default EditRegistration;
  