import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronLeftIcon, SearchIcon,ChevronRightIcon } from "@chakra-ui/icons";

import axios from "axios";

function UserAgreement() {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  
  const [searchQuary, setSearchQuary] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totlePage, setTotlePage] = useState(1);
  const [userData , setUserData] = useState([])

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    const config = {
      method: "GET",
      url: `${apiUrl}/user/get_terms?page=${currentPage}`,
    };
    const GetEmplyeesApiResponse = await axios(config);
    console.log("get user ", GetEmplyeesApiResponse.data);
    setTotlePage(GetEmplyeesApiResponse.data.totalPages);
    setUserData(GetEmplyeesApiResponse.data.allAgreements)
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
        data: {
          status : "Pending"
        }
      };
      console.log(searchQuary,"BackEnd Search Feild");

      const config = {
        method: "POST",
        url: `${apiUrl}/user/search_agreement`,
        data: handlePaylode,
      };

      const responces = await axios(config);
      console.log(responces, "Search Result");
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

      <Box margin={"1rem"}>
        <Box fontSize={"2rem"} fontWeight={"700"}>
          User Agreement Details
        </Box>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            width={"400px"}
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
        <div
          className="table"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            padding: "1rem",
          }}
        >
          {userData && userData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Signature</th>
                  <th>Photo</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.signature}</td>
                    <td>{item.photo}</td>
                    <td>
                      <Box>
                        <NavLink to={`/employmentformdetails/${item._id}`}>
                          <Button
                            colorScheme="blackAlpha"
                            backgroundColor="black"
                            width="80%"
                          >
                            View Detail
                          </Button>
                        </NavLink>
                      </Box>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </Box>
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
    </>
  );
}

export default UserAgreement;
