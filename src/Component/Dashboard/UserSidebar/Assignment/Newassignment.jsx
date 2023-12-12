// import {
//   Box,
//   Button,
//   Divider,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Text,
// } from "@chakra-ui/react";

// import { useNavigate } from "react-router-dom";

// // import React from "react";

// // import "./EmployeeProfileEdit.css";

// const NewAssignment = () => {
//   const Navigate = useNavigate();

//   const Previouspage = () => {
//     Navigate("/assignment");
//   };

//   return (
//     <Box className="employee-form-container">
// <Box
//       display="grid"
//       gridTemplateColumns="repeat(4, 1fr)"
//       gap={4}
//       p="4"
//       borderWidth="1px"
//       borderRadius="md"
//       mb="4"
//       color="#393e46"
//     >
//       <Box>
//         <Text fontSize="xl">Kaveri Kappor</Text>
//       </Box>
//       <Box>
//         <Text fontSize="xl">4d Apply Ridge Road</Text>
//       </Box>
//       <Box>
//         <Text fontSize="xl">440018</Text>
//       </Box>
//       <Box>
//         <Text fontSize="xl">Vice President</Text>
//       </Box>

//       <Divider gridColumn="span 4" my="2" />

//       <Box>
//         <Text fontSize="xl">0000000000</Text>
//       </Box>
//       <Box>
//         <Text fontSize="xl">$6 Billion</Text>
//       </Box>
//       <Box>
//         <Text fontSize="xl">CD5B32r3rA9eFPH</Text>
//       </Box>
//     </Box>
//       <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
//         New Assignment
//       </Box>

//       <form className="employee-form">
//         <Stack direction={"row"}>
//           <Box>
//             <FormControl isRequired className="employee-form-group">
//               <FormLabel> Name</FormLabel>
//               <Input width={"400px"} type="text" placeholder="Kaveri Kappor" />
//             </FormControl>
//           </Box>
//           <Box>
//             <FormControl isRequired className="employee-form-group">
//               <FormLabel>Address</FormLabel>
//               <Input
//                 width={"400px"}
//                 type="text"
//                 placeholder="4d Apply Ridge Road"
//               />
//             </FormControl>
//           </Box>
//         </Stack>
//         <Stack direction={"row"}>
//           <Box>
//             <FormControl isRequired className="employee-form-group">
//               <FormLabel>PinCode</FormLabel>
//               <Input width={"400px"} type="number" placeholder="440018" />
//             </FormControl>
//           </Box>
//           <Box>
//             <FormControl isRequired className="employee-form-group">
//               <FormLabel>Job Function</FormLabel>
//               <Input width={"400px"} type="text" placeholder="Vice President" />
//             </FormControl>
//           </Box>
//         </Stack>
//         <Stack direction={"row"}>
//           <Box>
//             <FormControl isRequired className="employee-form-group">
//               <FormLabel>Mobile</FormLabel>
//               <Input width={"400px"} type="number" placeholder="0000000000" />
//             </FormControl>
//           </Box>
//           <Box>
//             <FormControl isRequired className="employee-form-group">
//               <FormLabel>Annual Revenue</FormLabel>
//               <Input width={"400px"} type="text" placeholder="$6 Billion" />
//             </FormControl>
//           </Box>
//         </Stack>

//         <Box>
//           <FormControl isRequired className="employee-form-group">
//             <FormLabel>Client Code</FormLabel>
//             <Input width={"400px"} type="text" placeholder="CD5B32r3rA9eFPH" />
//           </FormControl>
//         </Box>
//       </form>

//       <Button
//         onClick={Previouspage}
//         className="employee-btn"
//         colorScheme="teal"
//         mt="4"
//       >
//         Submit
//       </Button>
//     </Box>
//   );
// };

// export default NewAssignment;

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CameraswitchSharp } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// import React from "react";

// import "./EmployeeProfileEdit.css";

const NewAssignment = () => {
  // const Navigate = useNavigate();
  // // state hook to take input from form
  // const [inputFields, setInputFields] = useState({
  //   name: "",
  //   address: "",
  //   pinCode: "",
  //   jobFunction: "",
  //   mobile: "",
  //   annualRevenue: "",
  //   clientCode: "",
  // });

  // // on change capture the input from frontsnd handler
  // const onChangehandler = (e) => {
  //   const { name, value } = e.target;
  //   setInputFields((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };

  // // handle to submit form data
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log(inputFields);
  //   // try {
  //   //   const response = await axios.post(
  //   //     `http://localhost:8000/employee`,
  //   //     inputFields,
  //   //     {
  //   //       headers: {
  //   //         "Content-Type": "application/json",
  //   //       },
  //   //     }
  //   //   );
  //   //   console.log(response);
  //   //   alert("Saved successfully.");
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // };

  // // handle to get assingment from backend

  // useEffect(() => {
  //   fetchAssingements();
  // }, []);

  // const fetchAssingements = async () => {
  //   try {
  //     const response = await axios.get(``);
  //     console.log(response);
  //   } catch (error);
  //   }
  // };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, , setPincodde] = useState("");
  const [jobFunction, setJobFunction] = useState("");
  const [number, setNumber] = useState("");
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [clientCode, setClientCode] = useState("");

  const GetDetails = async () => {
    try {
      // const payloads = {
      //   firstName: name,
      //   address: address,
      //   pincode: pincode,
      //   jobFunctional: jobFunction,
      //   phone: number,
      //   annualRevenue: annualRevenue,
      //   cleanCode: clientCode,
      // };

      const config = {
        method: "GET",
        url: "http://localhost:5000/user/get_assignment_details",
        //  data: payloads,
      };

      const fetchingdetails = await axios(config);

      console.log("fetchingdetails", fetchingdetails);
    } catch(err) {
      console.log("error in fetching",err);
    }
  };

  return (
    <Box className="employee-form-container">
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={4}
        p="7"
        borderWidth="1px"
        borderRadius="md"
        mb="4"
        color="#393e46"
      >
        <Box>
          <Text fontSize="xl">Name : Kaveri Kappor</Text>
        </Box>
        <Box>
          <Text fontSize="xl">Address : 4d Apply Ridge Road</Text>
        </Box>
        <Box>
          <Text fontSize="xl">Pin Code : 440018</Text>
        </Box>
        <Box>
          <Text fontSize="xl">Job Function : Vice President</Text>
        </Box>

        <Divider gridColumn="span 4" my="2" />

        <Box>
          <Text fontSize="xl">Mobile : 1234567890</Text>
        </Box>
        <Box>
          <Text fontSize="xl">Annual Revenue : $6 Billion</Text>
        </Box>
        <Box>
          <Text fontSize="xl">Client Code : CD5B32r3rA9eFPH</Text>
        </Box>
      </Box>
      <Box
        marginBottom={"1rem"}
        fontSize={"2rem"}
        fontWeight={"700"}
        p={"20px"}
      >
        New Assignment
      </Box>

      <form
        className="employee-form"
        // onSubmit={handleSubmit}
        style={{ padding: "20px" }}
      >
        <Stack direction={"row"}>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel> Name</FormLabel>
              <Input
                width={"400px"}
                type="text"
                placeholder="Kaveri Kappor"
                name="name"
                // onChange={onChangehandler}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>Address</FormLabel>
              <Input
                width={"400px"}
                type="text"
                placeholder="4d Apply Ridge Road"
                name="address"
                // onChange={onChangehandler}
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>PinCode</FormLabel>
              <Input
                width={"400px"}
                type="number"
                placeholder="440018"
                name="pinCode"
                // onChange={onChangehandler}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>Job Function</FormLabel>
              <Input
                width={"400px"}
                type="text"
                placeholder="Vice President"
                name="jobFunction"
                // onChange={onChangehandler}
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>Mobile</FormLabel>
              <Input
                width={"400px"}
                type="number"
                placeholder="0000000000"
                name="mobile"
                // onChange={onChangehandler}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>Annual Revenue</FormLabel>
              <Input
                width={"400px"}
                type="text"
                placeholder="$6 Billion"
                name="annualRevenue"
                // onChange={onChangehandler}
              />
            </FormControl>
          </Box>
        </Stack>

        <Box>
          <FormControl isRequired className="employee-form-group">
            <FormLabel>Client Code</FormLabel>
            <Input
              width={"400px"}
              type="text"
              placeholder="CD5B32r3rA9eFPH"
              name="clientCode"
              // onChange={onChangehandler}
            />
          </FormControl>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Button
            className="employee-btn"
            colorScheme="teal"
            mt="4"
            type="submit"
            onClick={GetDetails}
          >
            Submit
          </Button>

          <Button
            // onClick={Previouspage}
            className="employee-btn"
            colorScheme="teal"
            mt="4"
            style={{
              marginLeft: "50px",
            }}
            // onClick={fetchAssingements}
          >
            Reload
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NewAssignment;
