
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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";

const Employees = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const [searchQuary, setSearchQuary] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totlePage, setTotlePage] = useState(1);
  const [userData , setUserData] = useState([])

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    
    try {
      const config = {
        methode: "GET",
        url: `${apiUrl}/user/user_pagination?page=${currentPage}`,
        data: {
          status : "Pending"
        }
      };
      const responce = await axios(config);
      setTotlePage(responce.data.totalPages);
      console.log(responce.data.totalPages); // we get the Total Number of Pages
      console.log(responce);
      setUserData(responce?.data?.users)
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleSearch = () => {
    if(searchQuary){
      searchResponse()
      setCurrentPage(1);
      setSearchQuary("")
    }else{
      fetchData()
    }
  };

  const searchResponse = async () => {
    try {
      const handlePaylode = {
        name: searchQuary,
      };
      console.log(searchQuary,"BackEnd Search Feild");
     
      const config = {
        method: "POST",
        url: `${apiUrl}/user/search_employee`,
        data: handlePaylode,
      };

      const responces = await axios(config);
      // console.log(responces, "Search Result");
      setUserData(responces.data.users);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  const handlePaggination = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Flex direction="column" align="center">
        <Box
          color="#DD372D"
          ml={["1rem", "0rem"]}
          mt={["1rem", "0"]}
          mb="1rem"
          fontSize={["1.5rem", "2rem"]}
          fontWeight="700"
        >
          Employee
        </Box>
        <NavLink to="/employeeform">
          <Button
            mt="1rem"
            mb={"1rem"}
            _hover={{ background: "white", color: "gray" }}
            p="1rem"
            color="white"
            bg="black"
            width={"8rem"}
          >
            Add Employee
          </Button>
        </NavLink>
      </Flex>
      <InputGroup mt="1rem" ml={["1rem", "6.5rem"]} width={["90%", "400px"]}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          border="1px solid green"
          width="100%"
          type="text"
          placeholder="Search..."
          value={searchQuary}
          onChange={(e) => {
            setSearchQuary(e.target.value);
          }}
        />
        <Button
          className="employee-btn"
          colorScheme="teal"
          mt="4"
          onClick={handleSearch}
        >
          Search
        </Button>
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
        {userData && userData.length > 0 ? (
          userData?.map((item) => (
            <React.Fragment key={item.id}>
              <Box>{item.name}</Box>
              <Box>{item.mobile}</Box>
              <Box>{item.email}</Box>
              <Box>
                <NavLink to={`/employeeprofileedit/${item._id}`}>
                  <Button
                    style={{ color: "white" }}
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
      <div className="numbers">
          <ChevronLeftIcon />
          {Array.from({ length: totlePage }, (_, index) => (
            <span
              key={index + 1}
              className="num"
              onClick={() => handlePaggination(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <ChevronRightIcon />
        </div>
      {/* </div> */}
    </>
  );
};

export default Employees;

