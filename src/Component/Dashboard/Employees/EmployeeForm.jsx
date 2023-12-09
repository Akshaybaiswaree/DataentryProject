import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";

const Employeeform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");

  const formRef = useRef(null);

  const AddEmployee = async () => {
    try {
      const employeesDataPayload = {
        name: name,
        email: email,
        mobile: number,
        address: address,
        designation: designation,
        salary: salary,
      };

      console.log("data", employeesDataPayload);

      const config = {
        method: "POST",
        url: "http://localhost:5000/user/add_employee",
        data: employeesDataPayload,
      };

      const AddEmployeeApiResponse = await axios(config);

      console.log("add", AddEmployeeApiResponse);

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className="employee-form-container" textAlign="center">
      <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
        Add Employees
      </Box>
      <form className="employee-form">
        <Stack spacing={4} position="relative">
          <FormControl>
            <FormLabel textAlign="top" width="50%">
              Name
            </FormLabel>
            <Input
              width="50%"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Kaveri Kapoor"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign="top" width="50%">
              Mobile
            </FormLabel>
            <Input
              width="50%"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              placeholder="9647523148"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign="top" width="50%">
              Email
            </FormLabel>
            <Input
              width="50%"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="kaveri@gmail.com"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign="top" width="50%">
              Address
            </FormLabel>
            <Input
              width="50%"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign="top" width="50%">
              Designation
            </FormLabel>
            <Input
              width="50%"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              type="text"
              placeholder="Designation"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign="top" width="50%">
              Salary
            </FormLabel>
            <Input
              width="50%"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              type="number"
              placeholder="Enter Salary"
              _hover={{ borderColor: "teal.500" }}
            />
          </FormControl>
        </Stack>
      </form>
      <NavLink to="/employees">
        <Button
          onClick={AddEmployee}
          className="employee-btn"
          colorScheme="teal"
          mt="4"
          _hover={{ bgColor: "teal.600" }}
          width="30%"
        >
          Save
        </Button>
      </NavLink>
    </Box>
  );
};

export default Employeeform;
