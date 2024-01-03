// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Stack,
// } from "@chakra-ui/react";
// import { useParams } from "react-router-dom";

// const ReportForm = () => {
//   const apiUrl = import.meta.env.VITE_APP_API_URL;
//   const { userId } = useParams();

//   const [inputField, setInputField] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     address: "",
//     plan: "",
//     caller: "",
//   });

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/user/get_report_by_id/${userId}`);
//         const data = response.data;

//         setInputField({
//           name: data?.user?.name || "",
//           email: data?.user?.email || "",
//           mobile: data?.user?.mobile || "",
//           address: data?.user?.address || "",
//           plan: "",
//           caller: data?.user?.caller || "",
//         });
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };
//     fetchUserDetails();
//   }, [userId]);

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;

//     setInputField({
//       ...inputField,
//       [name]: value,
//     });
//   };

//   return (
//     <Box marginLeft="1rem" marginTop="1rem" className="employee-form-container">
//       <form className="employee-form">
//         {/* Your existing form fields */}
//         <Stack direction={["column", "row"]}>
//           <Box>
//             <FormControl className="employee-form-group">
//               <FormLabel>Name</FormLabel>
//               <Input
//                 name="name"
//                 onChange={onChangeHandler}
//                 value={inputField.name}
//                 width={{ base: "300px", md: "400px" }}
//                 type="text"
//                 placeholder="Kaveri Kappor"
//               />
//             </FormControl>
//           </Box>
//           {/* Add other form fields similarly */}
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default ReportForm;
