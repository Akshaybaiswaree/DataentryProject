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

import { useNavigate } from "react-router-dom";

// import React from "react";


// import "./EmployeeProfileEdit.css";

const NewAssignment = () => {
  const Navigate = useNavigate();

  const Previouspage = () => {
    Navigate("/assignment");
  };

  return (
    <Box className="employee-form-container">
<Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap={4}
      p="4"
      borderWidth="1px"
      borderRadius="md"
      mb="4"
      color="#393e46"
    >
      <Box>
        <Text fontSize="xl">Kaveri Kappor</Text>
      </Box>
      <Box>
        <Text fontSize="xl">4d Apply Ridge Road</Text>
      </Box>
      <Box>
        <Text fontSize="xl">440018</Text>
      </Box>
      <Box>
        <Text fontSize="xl">Vice President</Text>
      </Box>

      <Divider gridColumn="span 4" my="2" />

      <Box>
        <Text fontSize="xl">0000000000</Text>
      </Box>
      <Box>
        <Text fontSize="xl">$6 Billion</Text>
      </Box>
      <Box>
        <Text fontSize="xl">CD5B32r3rA9eFPH</Text>
      </Box>
    </Box>
      <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
        New Assignment
      </Box>

      <form className="employee-form">
        <Stack direction={"row"}>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel> Name</FormLabel>
              <Input width={"400px"} type="text" placeholder="Kaveri Kappor" />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>Address</FormLabel>
              <Input
                width={"400px"}
                type="text"
                placeholder="4d Apply Ridge Road"
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>PinCode</FormLabel>
              <Input width={"400px"} type="number" placeholder="440018" />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>Job Function</FormLabel>
              <Input width={"400px"} type="text" placeholder="Vice President" />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={"row"}>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>Mobile</FormLabel>
              <Input width={"400px"} type="number" placeholder="0000000000" />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired className="employee-form-group">
              <FormLabel>Annual Revenue</FormLabel>
              <Input width={"400px"} type="text" placeholder="$6 Billion" />
            </FormControl>
          </Box>
        </Stack>

        <Box>
          <FormControl isRequired className="employee-form-group">
            <FormLabel>Client Code</FormLabel>
            <Input width={"400px"} type="text" placeholder="CD5B32r3rA9eFPH" />
          </FormControl>
        </Box>
      </form>

      <Button
        onClick={Previouspage}
        className="employee-btn"
        colorScheme="teal"
        mt="4"
      >
        Submit
      </Button>
    </Box>
  );
};

export default NewAssignment;
