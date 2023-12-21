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
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// // import React from "react";

// // import "./EmployeeProfileEdit.css";

// const NewAssignment = () => {
//   const {
//     handleSubmit,
//     register,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const token = JSON.parse(localStorage.getItem("token"));
//   const { email, _id } = token;
//   const Navigate = useNavigate();
//   const [data, setData] = useState("");
//   const [inputFields, setInputFields] = useState({
//     name: "",
//     address: "",
//     pinCode: "",
//     jobFunctional: "",
//     phone: "",
//     annualRevenue: "",
//     cleanCode: "",
//   });
//   useEffect(() => {
//     getDataAssignment();
//   }, [email]);
//   console.log(email);

//   const getDataAssignment = async () => {
//     const apiUrl = import.meta.env.VITE_APP_API_URL;
//     try {
//       const config = {
//         method: "POST",
//         url: `${apiUrl}/user/get_assignment_details`,
//         data: { email: email }, // Pass the email as part of the request body
//       };

//       const response = await axios(config);
//       console.log("Get response:", response.data);
//       // Assuming you have a state variable setData to store the response
//       setData(response?.data?.assignmentDetail);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   // console.log(data, "Get Data");

//   // console.log(data?._id ,"Assingment ID");
//   const RelodeHandle = async () => {
//     try {
//       const config = {
//         method: "GET",
//         url: `http://localhost:5000/user/refresh_assignment_detail/${data?._id}`,
//       };
//       const responce = await axios(config);
//       // console.log(responce , "Relode ");
//       getDataAssignment();
//     } catch (err) {
//       console.log("error", err);
//     }
//   };


//   // handle to submit form data
//   const onSubmit = async (data) => {
//     // e.preventDefault();

//     // console.log(inputFields);
//     console.log(data,"Data ");
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/user/add_assignment",
//         data,
        
//         // inputFields,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       // console.log(response);
//       alert("Saved successfully.");
//       getDataAssignment();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Box className="employee-form-container">
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(4, 1fr)"
//         gap={4}
//         p="7"
//         borderWidth="1px"
//         borderRadius="md"
//         mb="4"
//         color="#393e46"
//       >
//         <Box>
//           <Text fontSize="xl">Name : {data?.name}</Text>
//         </Box>
//         <Box>
//           <Text fontSize="xl">Address : {data?.address}</Text>
//         </Box>
//         <Box>
//           <Text fontSize="xl">Pin Code : {data?.pinCode}</Text>
//         </Box>
//         <Box>
//           <Text fontSize="xl">Job Function :{data?.jobFunctional}</Text>
//         </Box>

//         <Divider gridColumn="span 4" my="2" />

//         <Box>
//           <Text fontSize="xl">Mobile : {data?.phone}</Text>
//         </Box>
//         <Box>
//           <Text fontSize="xl">Annual Revenue : {data?.annualRevenue}</Text>
//         </Box>
//         <Box>
//           <Text fontSize="xl">Client Code : {data?.cleanCode}</Text>
//         </Box>
//       </Box>
//       <Box
//         marginBottom={"1rem"}
//         fontSize={"2rem"}
//         fontWeight={"700"}
//         p={"20px"}
//       >
//         New Assignment
//       </Box>

//       <form
//         className="employee-form"
//         onSubmit={handleSubmit(onSubmit)}
//         style={{ padding: "20px" }}
       
//       >
//         <Stack spacing={4}  direction={"row"} >
//           <Box>
//             <FormControl   className="employee-form-group">
//               <FormLabel> Name</FormLabel>
//               <Input
//                 name="name"
//                 id="name"
//                 type="text"
//                 {...register("name", {
//                   required: "Name is Requird",
//                   message: "invalid input",
//                 })}
//                 placeholder="Enter Name"
//                 _hover={{ borderColor: "teal.500" }}
//               />
//                {errors.name && <Box color="red">{errors.name.message}</Box>}
//             </FormControl>
//           </Box>
//           <Box>
//             <FormControl  className="employee-form-group">
//               <FormLabel>Address</FormLabel>
//                <Input
//               name="address"
//               id="address"
//               type="text"
//               {...register("address", { required: "Address is required" })}
//               placeholder="Address"
//               _hover={{ borderColor: "teal.500" }}
//             />
//             {errors.address && <Box color="red">{errors.address.message}</Box>}
//             </FormControl>
//           </Box>
//         </Stack>
//         <Stack direction={"row"}>
//           <Box>
//             <FormControl  className="employee-form-group">
//               <FormLabel>PinCode</FormLabel>
//               <Input
//               type="number"
//               id="pinCode"
//               name="pinCode"
//               {...register("pinCode", { required: "pinCode number is required" })}
//               placeholder="Enter pinCode No"
//               _hover={{ borderColor: "teal.500" }}
//             />
//             {errors.pinCode && <Box color="red">{errors.pinCode.message}</Box>}
//             </FormControl>
//           </Box>
//           <Box>
//             <FormControl  className="employee-form-group">
//               <FormLabel>Job Function</FormLabel>
//               <Input
//               type="text"
//               id="jobFunctional"
//               name="jobFunctional"
//               {...register("jobFunctional", { required: "jobFunctional number is required" })}
//               placeholder="Enter jobFunctional No"
//               _hover={{ borderColor: "teal.500" }}
//             />
//             {errors.jobFunctional && <Box color="red">{errors.jobFunctional.message}</Box>}
//             </FormControl>
//           </Box>
//         </Stack>
//         <Stack direction={"row"}>
//           <Box>
//             <FormControl  className="employee-form-group">
//               <FormLabel>Mobile</FormLabel>
//               <Input
//               type="number"
//               id="phone"
//               name="phone"
//               {...register("phone", { required: "phone number is required" })}
//               placeholder="Enter phone No"
//               _hover={{ borderColor: "teal.500" }}
//             />
//             {errors.phone && <Box color="red">{errors.phone.message}</Box>}
//             </FormControl>
//           </Box>
//           <Box >
//             <FormControl  className="employee-form-group">
//               <FormLabel>Annual Revenue</FormLabel>
//               <Input
              
//               type="number"
//               id="annualRevenue"
//               name="annualRevenue"
//               {...register("annualRevenue", { required: "annualRevenue number is required" })}
//               placeholder="Enter annualRevenue No"
//               _hover={{ borderColor: "teal.500" }}
//             />
//             {errors.annualRevenue && <Box color="red">{errors.annualRevenue.message}</Box>}
//             </FormControl>
//           </Box>
//         </Stack>

//         <Box>
//           <FormControl  className="employee-form-group">
//             <FormLabel>Client Code</FormLabel>
//             <Input
//             width='50%'
//               type="number"
//               id="cleanCode"
//               name="cleanCode"
//               {...register("cleanCode", { required: "cleanCode number is required" })}
//               placeholder="Enter cleanCode No"
//               _hover={{ borderColor: "teal.500" }}
//             />
//             {errors.cleanCode && <Box color="red">{errors.cleanCode.message}</Box>}
//           </FormControl>
//         </Box>

//         <Box
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "30px",
//           }}
//         >
//           <Button
//             className="employee-btn"
//             colorScheme="teal"
//             mt="4"
//             type="submit"
//           >
//             Submit
//           </Button>

//           <Button
//             className="employee-btn"
//             colorScheme="teal"
//             mt="4"
//             style={{
//               marginLeft: "50px",
//             }}
//             onClick={RelodeHandle}
//           >
//             Reload
//           </Button>
//         </Box>
//       </form>
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
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// import React from "react";

// import "./EmployeeProfileEdit.css";

const NewAssignment = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { email , _id} = token;
  // console.log(email, "Get Email");
  // console.log(_id, "Get ID");
  const Navigate = useNavigate();
  // state hook to take input from form
  const [data, setData] = useState("");
  const [inputFields, setInputFields] = useState({
    name: "",
    address: "",
    pinCode: "",
    jobFunctional: "",
    phone: "",
    annualRevenue: "",
    cleanCode: "",
  });
  useEffect(() => {
    getDataAssignment();
  }, [email]);
  console.log(email, )

  const getDataAssignment = async () => {
    try {
      const config = {
        method: "POST",
        url: "http://localhost:5000/user/get_assignment_details",
        data: { email: email }, // Pass the email as part of the request body
      };

      const response = await axios(config);
       console.log("Get response:", response.data);
      // Assuming you have a state variable setData to store the response
      setData(response?.data?.assignmentDetail);

    } catch (error) {
      console.error("Error:", error);
    }
  };
  // console.log(data, "Get Data");

  // console.log(data?._id ,"Assingment ID");
  const RelodeHandle = async()=>{

    try{
      const config = {
        method : "GET",
        url : `http://localhost:5000/user/refresh_assignment_detail/${data?._id}`
      }
      const responce = await axios (config)
      // console.log(responce , "Relode ");
      getDataAssignment()
    }
    catch(err){
      console.log("error" , err);
    }      
  }

  // on change capture the input from frontsnd handler
  const onChangehandler = (e) => {
    //console.log(e , "e")
    const { name, value } = e.target;
    setInputFields((prev) => {
      return {
        ...prev,  // value saari isme daalra
        [name]: value,
      };
    });
  };

  // handle to submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(inputFields);
    try {
      const response = await axios.post(
        "http://localhost:5000/user/add_assignment",

        inputFields,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
       
      );
      // console.log(response);
      alert("Saved successfully.");
      getDataAssignment()
    } catch (error) {
      console.log(error);
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
  <Text fontSize="xl">Name : {data?.name}</Text>
</Box>
<Box>
  <Text fontSize="xl">Address : {data?.address}</Text>
</Box>
<Box>
  <Text fontSize="xl">Pin Code : {data?.pinCode}</Text>
</Box>
<Box>
  <Text fontSize="xl">Job Function :{data?.jobFunctional}</Text>
</Box>
<Divider gridColumn="span 4" my="2" />
<Box>
  <Text fontSize="xl">Mobile : {data?.phone}</Text>
</Box>
<Box>
  <Text fontSize="xl">Annual Revenue : {data?.annualRevenue}</Text>
</Box>
<Box>
  <Text fontSize="xl">Client Code : {data?.cleanCode}</Text>
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
        onSubmit={handleSubmit}
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
                onChange={onChangehandler}
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
                onChange={onChangehandler}
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
                onChange={onChangehandler}
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
                name="jobFunctional"
                onChange={onChangehandler}
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
                name="phone"
                onChange={onChangehandler}
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
                onChange={onChangehandler}
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
              name="cleanCode"
              onChange={onChangehandler}
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
            onClick={RelodeHandle}
          >
            Reload
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default NewAssignment;
