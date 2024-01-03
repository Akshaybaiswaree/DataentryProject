
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
  import { useEffect, useState } from "react";
  // import "./EmployeeProfileEdit.css";
  import axios from "axios";

  import { useNavigate, useParams  } from "react-router-dom";
  
  const ReportForm = () => {
    const apiUrl = import.meta.env.VITE_APP_API_URL;
    const { userId } = useParams();
    const [inputField, setInputField] = useState({
      name: "",
      email: "",
      mobile: "",
      caller: "",
      startdate: "",
      enddate: "",
      totalform: "",
      filledform: "",
      rightform: "",
      incorrectform: "",
    });
  
    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(
            `${apiUrl}/user/get_report_by_id/${userId}`
          );
          const data = response.data;
    
          if (data && data.user) {
            console.log(data.user.name);
            console.log(data.user);
            setInputField({
              name: data.user.name || "",
              email: data.user.email || "",
              mobile: data.user.mobile || "",
              caller: data.user.caller || "",
              startdate: data.user.startDate || "",
              enddate: data.user.endDate,
              totalform: data.user.totalAssingment || "",
              filledform: data.user.submitdAssingment || "",
              rightform: data.user.correctAssignment || "",
              incorrectform: data.user.incorrectAssignment || "",
            });
          } else {
            console.error("User data not available");
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
    
      fetchUserDetails();
    }, [userId]);

    // form change handler
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
  
      setInputField((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    };
  
    const Navigate = useNavigate();
  
    const handlelogout = () => {
      Navigate("/report");
    };
    return (
      <Box className="employee-form-container">
       
        <form className="employee-form">
          <Stack direction={"row"}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Name</FormLabel>
                <Input width={"400px"} type="text" placeholder="Kaveri Kappor"onChange={onChangeHandler}
                  value={inputField.name} />
              </FormControl>
            </Box>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Mobile</FormLabel>
                <Input
                  width={"400px"}
                  type="number"
                  placeholder="9876543210"
                  onChange={onChangeHandler}
                  value={inputField.mobile}
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Email</FormLabel>
                <Input
                  width={"400px"}
                  type="email"
                  placeholder="kaveri@2023"
                  onChange={onChangeHandler}
                  value={inputField.email}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl className="employee-form-group">
                <FormLabel>Caller</FormLabel>
                <Input width={"400px"} type="text" placeholder="Caller"onChange={onChangeHandler}
                  value={inputField.caller} />
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Start Date</FormLabel>
            <Input width={"400px"} type="text" placeholder="start date" onChange={onChangeHandler}
                  value={inputField.startdate}/>
          </FormControl>
          </Box>
          <Box>
          <FormControl className="employee-form-group">
            <FormLabel>End Date</FormLabel>
            <Input width={"400px"} type="number" placeholder="End Date" onChange={onChangeHandler}
                  value={inputField.enddate} />
          </FormControl>
          </Box>
          </Stack>

          <Stack direction={"row"}>
            <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Total Form</FormLabel>
            <Input width={"400px"} type="number" placeholder="Total Form" onChange={onChangeHandler}
                  value={inputField.totalform}/>
          </FormControl>
          </Box>
          <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Filled Form</FormLabel>
            <Input width={"400px"} type="number" placeholder="Filled Form" onChange={onChangeHandler}
                  value={inputField.filledform} />
          </FormControl>
          </Box>
          </Stack>

          <Stack direction={"row"}>
            <Box>
          <FormControl className="employee-form-group">
            <FormLabel>Right Form</FormLabel>
            <Input width={"400px"} type="number" placeholder="correct form" onChange={onChangeHandler}
                  value={inputField.rightform}/>
          </FormControl>
          </Box>
          <Box>
          <FormControl className="employee-form-group">
            <FormLabel>InCorrect Form</FormLabel>
            <Input width={"400px"} type="number" placeholder="Incorrect form" onChange={onChangeHandler}
                  value={inputField.incorrectform}/>
          </FormControl>
          </Box>
          </Stack>
         
         
        </form>
        
        <Button 
        onClick={handlelogout}
        className="employee-btn" colorScheme="teal" mt="4">
          Save
        </Button>
      </Box>
    );
  };
  
  export default ReportForm;
  
=======
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

