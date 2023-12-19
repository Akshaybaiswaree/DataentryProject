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
import { ChevronLeftIcon, SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

function UserAgreement() {
  const [getdata, setGetData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    ShowData();
  }, [setGetData]);

  const ShowData = async () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/user/get_terms",
    };
    const GetEmplyeesApiResponse = await axios(config);
    console.log("get user ", GetEmplyeesApiResponse.data);
    setGetData(GetEmplyeesApiResponse.data);
    console.log(getdata, "getdata");
  };

  const filteredList = getdata?.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* <Flex>
        <Box fontSize={"2rem"} fontWeight={"700"}>
          User Agreement Details
        </Box>

        <Button
          ml={"1rem"}
          _hover={{ background: "white", color: "gray" }}
          padding={"1rem"}
          color={"white"}
          bg={"black"}
        >
          Add User
        </Button>
      </Flex>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          width={"400px"}
          type="text"
          placeholder="Search..."
          // value={name}
          // onChange={(e) => setSearchQuary(e.target.value)}
        />

        <Button
          ml={"1rem"}
          className="employee-btn"
          colorScheme="teal"
          mt="4"
          //onClick={handleSearch}
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
        <div className="head">
          <h5>Name</h5>
          <h5>Address</h5>
          <h5>EMail</h5>
          <h5>Signature</h5>
          <h5>Photo</h5>
        </div>
        {getdata && getdata.length > 0 ? (
          getdata?.map((item) => (
            <React.Fragment key={item.id}>
              <Box>{item.name}</Box>
              <Box>{item.mobile}</Box>
              <Box>{item.email}</Box>
              <Box>{item.signature}</Box>
              <Box>{item.photo}</Box>
            </React.Fragment>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div> */}
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
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
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
          {getdata && getdata.length > 0 ? (
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
                {filteredList.map((item) => (
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
    </>
  );
}

export default UserAgreement;
