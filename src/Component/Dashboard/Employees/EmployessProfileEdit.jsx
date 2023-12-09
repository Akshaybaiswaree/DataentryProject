// import {
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogContent,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogOverlay,
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
// } from "@chakra-ui/react";

// // import { NavLink } from "react-router-dom";
// // import axios from "axios";
// // import { useEffect } from "react";

// // import "./EmployeeProfileEdit.css";
// import EditIcon from "@mui/icons-material/Edit";
// import { DeleteIcon } from "@chakra-ui/icons";
// const EmployeeProfileEdit = () => {
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [salary, setSalary] = useState("");

//   const { userId } = useParams();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cancelRef = useRef();
//   const navigate = useNavigate();

//   useEffect(() => {
//     //console.log("user",userId)

//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/user/getemployee_by_id/${userId}`
//         );
//         const data = response.data;
//         console.log(data);
//         // console.log(data?.User.name);.

//         setName(data?.User.name);
//         setEmail(data?.User.email);
//         setAddress(data?.User.address);
//         setDesignation(data?.User.designation);
//         setMobile(data?.User.mobile);
//         setSalary(data?.User.salary);
//         // alert("Saved successfully.");
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };
//     fetchUserDetails();
//   }, [userId]);

//   const UpdatedValue = async () => {
//     try {
//       const payload = {
//         name: name,
//         email: email,
//         mobile: mobile,
//         address: address,
//         designation: designation,
//         salary: salary,
//       };

//       const config = {
//         method: "PUT",
//         url: `http://localhost:5000/user/edit_employee/${userId}`,
//         data: payload,
//       };

//       const response = await axios(config);
//       navigate("/employees");
//       alert("Saved successfully.");
//       console.log(response, "res");
//     } catch (err) {
//       console.log("error in fetching", err);
//     }
//   };

//   //delete data

//   const DeleteUser = async (id) => {
//     try {
//       // const apiresponse
//       //console.log(id)
//       const response = await axios.delete(
//         `http://localhost:5000/user/delete_employee/${id}`
//       );
//       console.log("res", response);

//       navigate("/employees");
//       alert("User Deleted Succesfully.");
//     } catch (err) {
//       console.log("fetching error", err);
//     }
//   };

//   return (
//     <Box className="employee-form-container" mt="8" mx="auto" width="50%">
//       <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
//         Edit User Details
//       </Box>
//       <form className="employee-form">
//         <Stack spacing={4}>
//           <FormControl>
//             <FormLabel>Name</FormLabel>
//             <Input
//               width="100%" // Set the width to 100%
//               type="text"
//               placeholder="Kaveri Kappor"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Email</FormLabel>
//             <Input
//               width="100%" // Set the width to 100%
//               type="email"
//               placeholder="kaveri@gmail.com"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Password</FormLabel>
//             <Input
//               width="100%" // Set the width to 100%
//               type="password"
//               placeholder="kaveri@2023"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Access Code</FormLabel>
//             <Input
//               width="100%" // Set the width to 100%
//               type="text"
//               placeholder="******"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Mobile</FormLabel>
//             <Input
//               width="100%" // Set the width to 100%
//               type="text"
//               placeholder="9647523148"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Address</FormLabel>
//             <Input
//               width="100%" // Set the width to 100%
//               type="text"
//               placeholder="Enter Address"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Salary</FormLabel>
//             <Input
//               width="100%" // Set the width to 100%
//               type="text"
//               placeholder="10000"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//         </Stack>
//       </form>
//       <Button
//         className="employee-btn"
//         colorScheme="teal"
//         mt="4"
//         mx="auto"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         _hover={{ bgColor: "teal.600" }}
//         fontSize="lg"
//         fontWeight="bold"
//         p={4}
//         width="30%"
//       >
//         Save
//       </Button>
//     </Box>
//   );
// };

// export default EmployeeProfileEdit;
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import axios, { Axios } from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import "./EmployeeProfileEdit.css";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteIcon } from "@chakra-ui/icons";
const EmployeeProfileEdit = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");

  const { userId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    //console.log("user",userId)

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/getemployee_by_id/${userId}`
        );
        const data = response.data;
        console.log(data);
        // console.log(data?.User.name);.

        setName(data?.User.name);
        setEmail(data?.User.email);
        setAddress(data?.User.address);
        setDesignation(data?.User.designation);
        setMobile(data?.User.mobile);
        setSalary(data?.User.salary);
        // alert("Saved successfully.");
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, [userId]);

  const UpdatedValue = async () => {
    try {
      const payload = {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        designation: designation,
        salary: salary,
      };

      const config = {
        method: "PUT",
        url: `http://localhost:5000/user/edit_employee/${userId}`,
        data: payload,
      };

      const response = await axios(config);
      navigate("/employees");
      alert("Saved successfully.");
      console.log(response, "res");
    } catch (err) {
      console.log("error in fetching", err);
    }
  };

  //delete data

  const DeleteUser = async (id) => {
    try {
      // const apiresponse
      //console.log(id)
      const response = await axios.delete(
        `http://localhost:5000/user/delete_employee/${id}`
      );
      console.log("res", response);

      navigate("/employees");
      alert("User Deleted Succesfully.");
    } catch (err) {
      console.log("fetching error", err);
    }
  };

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
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                width={"400px"}
                stype="text"
                placeholder="Kaveri Kappor"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                width={"400px"}
                type="email"
                placeholder="kaveri@gmail.com"
              />
            </FormControl>
          </Box>
        </Stack>
        {/* <Stack direction={"row"}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>P</FormLabel>
              <Input
              value={email}
              onChange={(e)=>(setEmail(e.target.value))}
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
        </Stack> */}
        <Stack direction={"row"}>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Mobile</FormLabel>
              <Input
                value={mobile}
                onChange={(e) => setNumber(e.target.value)}
                width={"400px"}
                type="text"
                placeholder="9647523148"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Address</FormLabel>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                width={"400px"}
                type="text"
                placeholder="Enter Address"
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            {" "}
            <FormControl className="employee-form-group">
              <FormLabel>Salary</FormLabel>
              <Input
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                width={"400px"}
                type="text"
                placeholder="10000"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>designation</FormLabel>
              <Input
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                width={"400px"}
                type="text"
                placeholder="10000"
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            {" "}
            <FormControl className="employee-form-group">
              <FormLabel>Access code</FormLabel>
              <Input
                // value={salary}
                // onChange={(e) => setSalary(e.target.value)}
                width={"400px"}
                type="text"
                placeholder="10000"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className="employee-form-group">
              <FormLabel>Password</FormLabel>
              <Input
                // value={designation}
                // onChange={(e) => setDesignation(e.target.value)}
                width={"400px"}
                type="password"
                placeholder="10000"
              />
            </FormControl>
          </Box>
        </Stack>
      </form>

      <Link to={`/employeeprofileedit/${userId}`}>
        <EditIcon />
      </Link>

      <DeleteIcon onClick={onOpen} />
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
                  DeleteUser(userId);
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
        onClick={UpdatedValue}
        className="employee-btn"
        colorScheme="teal"
        mt="4"
      >
        Save
      </Button>
    </Box>
  );
};

export default EmployeeProfileEdit;