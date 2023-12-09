import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";

const Employees = () => {
  const [getdata, setGetData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    ShowData();
  }, []);

  const ShowData = async () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/user/get_all_employee",
    };
    const GetEmplyeesApiResponse = await axios(config);
    console.log("get user ", GetEmplyeesApiResponse.data.Employee);
    setGetData(GetEmplyeesApiResponse.data.Employee);
  };

  const filteredList = getdata?.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Flex>
        <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
          Employee
        </Box>
        <NavLink to="/employeeform">
          <Button
            marginTop={"15px"}
            marginLeft={"670px"}
            _hover={{ background: "white", color: "gray" }}
            padding={"1rem"}
            color={"white"}
            bg={"black"}
          >
            Add Employee
          </Button>
        </NavLink>
      </Flex>
      <InputGroup marginLeft="6.5rem">
        <InputLeftElement
          pointerEvents="none"
          // children={<SearchIcon color="gray.300" />}
        />
        <Input
          width={"400px"}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </InputGroup>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={3}
        width="80%"
        margin="1rem auto"
      >
        <Box fontWeight="bold">Name</Box>
        <Box fontWeight="bold">Mobile</Box>
        <Box fontWeight="bold">Mail</Box>
        <Box></Box> {/* Empty box for the View Details button column */}
        {getdata && getdata.length > 0 ? (
          getdata?.map((item) => (
            <React.Fragment key={item.id}>
              <Box>{item.name}</Box>
              <Box>{item.mobile}</Box>
              <Box>{item.email}</Box>
              <Box>
                <NavLink to="/employeeprofileedit" style={{ color: "white" }}>
                  <Button
                    colorScheme="blackAlpha"
                    backgroundColor="black"
                    width="80%"
                  >
                    View Detail
                  </Button>
                </NavLink>
              </Box>
            </React.Fragment>
          ))
        ) : (
          <p>No data available</p>
        )}
      </Grid>
      {/* </div> */}
    </>
  );
};

export default Employees;
