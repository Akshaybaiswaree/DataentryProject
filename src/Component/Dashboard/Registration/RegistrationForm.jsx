// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Stack,
// } from "@chakra-ui/react";

// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { useRef } from "react";
// import { useState } from "react";

// // import "./EmployeeProfileEdit.css";

// const RegistrationForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [plan, setPlan] = useState("");
//   const [caller, setCaller] = useState("");

//   const formRef = useRef(null);
//   // const navigate = useNavigate();

//   // const Previouspage = () => {
//   //   navigate("/user/registration");
//   // };

//   const AddUser = async () => {
//     //to get the data from input in frontend part
//     try {
//       const userDataPayLoad = {
//         name: name,
//         email: email,
//         mobile: number,
//         address: address,
//         plan: plan,
//         caller: caller,
//       };

//       //ab backend me pahuchana hai
//       console.log("data", userDataPayLoad);

//       const config = {
//         method: "POST",
//         url: "http://localhost:5000/user/add_user",
//         data: userDataPayLoad, // kya bhejna hai wo bhej rhe hai
//       };

//       const AdduserApiResponse = await axios(config);

//       console.log("add", AdduserApiResponse);

//       formRef.current.reset();

//       // navigate("/user/registration");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Box className="employee-form-container" mt="8" mx="auto" width="50%">
//       <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
//         Add User
//       </Box>
//       <form className="employee-form">
//         <Stack spacing={4}>
//           <FormControl>
//             <FormLabel>Name</FormLabel>
//             <Input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Kaveri Kappor"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Email</FormLabel>
//             <Input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="kaveri@gmail.com"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Mobile Number</FormLabel>
//             <Input
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               type="number"
//               placeholder="kaveri@2023"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Address</FormLabel>
//             <Input
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               type="text"
//               placeholder="Address"
//               _hover={{ borderColor: "teal.500" }}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Plan</FormLabel>
//             <Select
//               value={plan}
//               onChange={(e) => setPlan(e.target.value)}
//               placeholder="Select option"
//               _hover={{ borderColor: "teal.500" }}
//             >
//               <option value="option1">Plan 1</option>
//               <option value="option2">Plan 2</option>
//               <option value="option3">Plan 3</option>
//               <option value="option4">Plan 4</option>
//             </Select>
//           </FormControl>
//           <FormControl>
//             <FormLabel>Caller</FormLabel>
//             <Select
//               value={caller}
//               onChange={(e) => setCaller(e.target.value)}
//               placeholder="Select option"
//               _hover={{ borderColor: "teal.500" }}
//             >
//               <option value="option1">Caller 1</option>
//               <option value="option2">Caller 2</option>
//               <option value="option3">Caller 3</option>
//               <option value="option4">Caller 4</option>
//             </Select>
//           </FormControl>
//         </Stack>
//       </form>
//       <NavLink to={"/user/registration"}>
//         <Button
//           onClick={AddUser}
//           className="employee-btn"
//           colorScheme="teal"
//           mt="4"
//           mx="auto"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           _hover={{ bgColor: "teal.600" }}
//           fontSize="lg"
//           fontWeight="bold"
//           p={4}
//           width="30%" // Set the width to 100%
//         >
//           Save
//         </Button>
//       </NavLink>
//     </Box>
//   );
// };

// export default RegistrationForm;

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [plan, setPlan] = useState("");
  const [caller, setCaller] = useState("");

  const formRef = useRef(null);

  const AddUser = async () => {
    try {
      const userDataPayload = {
        name: name,
        email: email,
        mobile: number,
        address: address,
        plan: plan,
        caller: caller,
      };

      const config = {
        method: "POST",
        url: "http://localhost:5000/user/add_user",
        data: userDataPayload,
      };

      const AdduserApiResponse = await axios(config);

      console.log("add", AdduserApiResponse);

      formRef.current.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box mt="8" mx="auto" width={["90%", "50%"]}>
      <Box
       color="#DD372D"
      mb="1rem" fontSize={["1.5rem", "2rem"]} fontWeight="700">
        Add User
      </Box>
      <form>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder=".......@gmail.com"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              placeholder="Enter Mobile No"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Plan</FormLabel>
            <Select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              placeholder="Select option"
              _hover={{ borderColor: "teal.500" }}
            >
              <option value="option1">Plan 1</option>
              <option value="option2">Plan 2</option>
              <option value="option3">Plan 3</option>
              <option value="option4">Plan 4</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Caller</FormLabel>
            <Select
              value={caller}
              onChange={(e) => setCaller(e.target.value)}
              placeholder="Select option"
              _hover={{ borderColor: "teal.500" }}
            >
              <option value="option1">Caller 1</option>
              <option value="option2">Caller 2</option>
              <option value="option3">Caller 3</option>
              <option value="option4">Caller 4</option>
            </Select>
          </FormControl>
        </Stack>
      </form>
      <NavLink to={"/user/registration"}>
        <Button
          onClick={AddUser}
          colorScheme="teal"
          mt="4"
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{ bgColor: "teal.600" }}
          fontSize="lg"
          fontWeight="bold"
          p={4}
          width="100%" // Set the width to 100% for mobile view
        >
          Save
        </Button>
      </NavLink>
    </Box>
  );
};

export default RegistrationForm;

