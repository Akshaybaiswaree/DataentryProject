// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Stack,
//   StackDivider,
// } from "@chakra-ui/react";
// import axios from "axios";
// import React, { useEffect, useRef } from "react";
// // import "./EmployeeProfileEdit.css";
// import { useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import { NavLink, useNavigate } from "react-router-dom";

// const RegisterUserDetail = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [plan, setPlan] = useState("");
//   const [caller, setCaller] = useState("");

//   // const formRef = useRef(null);
//   // const navigate = useNavigate();

//   // const Previouspage = () => {
//   //   navigate("/user/registration");
//   // };

//   // const AddUser = async () => {

//   //   //to get the data from input in frontend part
//   //   try {
//   //     const userDataPayLoad = {
//   //       name: name,
//   //       email: email,
//   //       mobile: number,
//   //       address: address,
//   //       plan: plan,
//   //       caller: caller,
//   //     };

//   //     //ab backend me pahuchana hai
//   //     console.log("data", userDataPayLoad);

//   //     const config = {
//   //       method: "POST",
//   //       url: "http://localhost:5000/user/add_user",
//   //       data: userDataPayLoad, // kya bhejna hai wo bhej rhe hai
//   //     };

//   //     const AdduserApiResponse = await axios(config);

//   //     console.log("add", AdduserApiResponse);

//   //     formRef.current.reset();

//   //     // navigate("/user/registration");
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   return (
//     <Box className="employee-form-container">
//       <form className="employee-form">
//         <Stack direction={"row"}>
//           <Box>
//             <FormControl className="employee-form-group">
//               <FormLabel>Name</FormLabel>
//               <Input
//                 value={name}
//                 onChange={(e) => console.log(setName(e.target.value))}
//                 width={"400px"}
//                 type="text"
//                 placeholder="Kaveri Kappor"
//               />
//             </FormControl>
//           </Box>
//           <Box>
//             <FormControl className="employee-form-group">
//               <FormLabel>email</FormLabel>
//               <Input
//                 value={email}
//                 onChange={(e) => console.log(setEmail(e.target.value))}
//                 width={"400px"}
//                 type="email"
//                 placeholder="kaveri@gmail.com"
//               />
//             </FormControl>
//           </Box>
//         </Stack>
//         <Stack direction={"row"}>
//           <Box>
//             <FormControl className="employee-form-group">
//               <FormLabel>Mobile Number</FormLabel>
//               <Input
//                 value={number}
//                 onChange={(e) => {
//                   setNumber(e.target.value);
//                 }}
//                 width={"400px"}
//                 type="number"
//                 placeholder="kaveri@2023"
//               />
//             </FormControl>
//           </Box>
//           <Box>
//             <FormControl className="employee-form-group">
//               <FormLabel>Address</FormLabel>
//               <Input
//                 value={address}
//                 onChange={(e) => {
//                   setAddress(e.target.value);
//                 }}
//                 width={"400px"}
//                 type="text"
//                 placeholder="Address"
//               />
//             </FormControl>
//           </Box>
//         </Stack>
//         <Stack direction={"row"}>
//           <Box>
//             <FormControl className="employee-form-group">
//               <FormLabel>Plan</FormLabel>
//               <Select
//                 value={plan}
//                 onChange={(e) => {
//                   setPlan(e.target.value);
//                 }}
//                 width={"400px"}
//                 placeholder="Select option"
//               >
//                 <option value="option1">Plan 1</option>
//                 <option value="option2">Plan 2</option>
//                 <option value="option3">Plan 3</option>
//                 <option value="option3">Plan 4</option>
//               </Select>
//             </FormControl>
//           </Box>
//           <Box>
//             <FormControl className="employee-form-group">
//               <FormLabel>Caller</FormLabel>
//               <Select
//                 value={caller}
//                 onChange={(e) => {
//                   setCaller(e.target.value);
//                 }}
//                 width={"400px"}
//                 placeholder="Select option"
//               >
//                 <option value="option1">Caller 1</option>
//                 <option value="option2">Caller 2</option>
//                 <option value="option3">Caller 3</option>
//                 <option value="option3">Caller 4</option>
//               </Select>
//             </FormControl>
//           </Box>
//         </Stack>

//         <Stack direction={"row"}>
//           <Box>
//             <FormControl className="employee-form-group">
//               <FormLabel>Status</FormLabel>
//               <Input width={"400px"} type="text" placeholder="kaveri@2023" />
//             </FormControl>
//           </Box>
//           <Box>
//             <FormControl className="employee-form-group">
//               <FormLabel>Login Status</FormLabel>
//               <Input width={"400px"} type="text" placeholder="Address" />
//             </FormControl>
//           </Box>
//         </Stack>
//       </form>

//       <NavLink to="/user/editregistration">
//         <DeleteIcon />
//       </NavLink>
//       <EditIcon />
//       {/* <NavLink to="/user/registration">
//         <Button
//            onClick={AddUser}

//           // removeinputnames()
//           className="employee-btn"
//           colorScheme="teal"
//           mt="4"
//         >
//           Save
//         </Button>
//         </NavLink> */}
//     </Box>
//   );
// };

// export default RegisterUserDetail;

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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
// import "./EmployeeProfileEdit.css";
import { useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const RegisterUserDetail = () => {
  // using navigate
  const navigate = useNavigate();
  // userId of the user
  const { userId } = useParams();

  // input fields for all inputs
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    plan: "",
    caller: "",
    status: "",
    loginStatus: "",
  });
  
  

  // modal button
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  // useEffect to fetch specific user by ID
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
       `http://localhost:5000/user/getuser_by_id/${userId}`   
        //   `http://localhost:5000/user/sendUserInfo/${userId}`
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
          status: data?.User?.status,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, [userId]);

  // form change handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInputField({
      ...prevValue,
      [name]: value,
    });
  };

  // delete function call
  const deleteUser = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(
        `http://localhost:5000/user/delete_user/${id}`
      );
      if (response.status === 200) {
        navigate("/user/registration");
        alert("User Deleted Succesfully.");
      } else {
        alert("Failed to delete user.");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const SendEmail = async(id) => {
    console.log(id ,"id")
       try {
         const response = await axios.post(`http://localhost:5000/user/sendUserInfo/${id}`);

         if (response.status === 200) {
          
            alert("Mail Send Successfully.");
          } else {
            alert("Failed to send mail.");
          }
       } 
       
       catch (error) {
        console.log(error);
       }
    
    
  }

  return (
    <Box
      marginLeft={"1rem"}
      marginTop={"1rem"}
      className="employee-form-container"
    >
      <form className="employee-form">
        <Stack direction={["column", "row"]}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                onChange={onChangeHandler}
                value={inputField.name}
                width={"400px"}
                type="text"
                placeholder="Kaveri Kappor"
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
                placeholder="kaveri@gmail.com"
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={["column", "row"]}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Mobile Number</FormLabel>
              <Input
                name="mobile"
                onChange={onChangeHandler}
                value={inputField.mobile}
                width={"400px"}
                type="number"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Address</FormLabel>
              <Input
                name="address"
                value={inputField.address}
                onChange={onChangeHandler}
                width={"400px"}
                type="text"
                placeholder="Address"
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={["column", "row"]}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Plan</FormLabel>
              <Select
                name="plan"
                onChange={onChangeHandler}
                value={inputField.plan}
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
                name="caller"
                onChange={onChangeHandler}
                value={inputField.caller}
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

        <Stack direction={"row"}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Status</FormLabel>
              <Input
                width={"400px"}
                type="text"
                name="status"
                onChange={onChangeHandler}
                value={inputField.status}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Login Status</FormLabel>
              <Input
                width={"400px"}
                type="text"
                name="status"
                value={inputField.status}
                onChange={onChangeHandler}
              />
            </FormControl>
          </Box>
        </Stack>
      </form>

      {/* <DeleteIcon onClick={onOpen} /> */}
      <Button
        marginTop={"1rem"}
        _hover={{ background: "white", color: "gray" }}
        onClick={onOpen}
        bg={"red"}
      >
        Delete
      </Button>
      {/* Modal Code */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to delete !!.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onClose();
                  deleteUser(userId);
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Button 
    //   onClick={fetchUserDetails}
    onClick={SendEmail(userId)}
      marginTop={"1rem"} marginLeft={"1rem"} colorScheme="blue"
      >
        Gmail
      </Button>
    </Box>
  );
};

export default RegisterUserDetail;
