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
    filledform: "0",
    rightform: "0",
    incorrectform: "0",
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
            enddate: data.user.endDate||"",
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
          <Input width={"400px"} type="text" placeholder="End Date" onChange={onChangeHandler}
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
                value={inputField.filledform} defaultValue="0" />
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