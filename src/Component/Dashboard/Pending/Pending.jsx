import React from "react";
import "../Employees/Employees.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const Pending = () => {
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
          Pending
        </Box>
        <NavLink to="/employeeform">
          <Button
            mt="1rem"
            _hover={{ background: "white", color: "gray" }}
            p="1rem"
            color="white"
            bg="black"
            width={"6rem"}
          >
            Add User
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
          // value={search}
          // onChange={(e) => {
          //   setSearch(e.target.value);
          // }}
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
        <div className="head">
          <h5>Name</h5>
          <h5>Mobile</h5>
          <h5>Mail</h5>
        </div>
        <div className="details">
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <NavLink to="/employeeprofileedit">
              <button style={{ background: "black", width: "8.3rem" }}>
                View Detail
              </button>
            </NavLink>
          </div>
          <br />
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <button style={{ background: "black" }}>View Detail</button>
          </div>
          <br />
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <button style={{ background: "black" }}>View Detail</button>
          </div>
          <br />
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <button style={{ background: "black" }}>View Detail</button>
          </div>
          <br />
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <button style={{ background: "black" }}>View Detail</button>
          </div>
          <div className="numbers">
            <ChevronLeftIcon />
            <span className="num">1</span>
            <span className="num">2</span>
            <span className="num">3</span>
            <span className="num">4</span>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pending;
