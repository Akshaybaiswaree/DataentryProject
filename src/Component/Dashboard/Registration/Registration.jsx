import React from "react";
// import "./Employees.css";
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
const Registration= () => {
  return (
    <>
      <Flex>
        <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
          Registration
        </Box>
        <NavLink to="/user/Registrationform">
          <Button
            marginLeft={"670px"}
            _hover={{ background: "white", color: "gray" }}
            padding={"1rem"}
            color={"white"}
            bg={"black"}
          >
            Add User
          </Button>
        </NavLink>
      </Flex>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input width={"400px"} type="text" placeholder="Search..." />
      </InputGroup>
      <div
        className="table"
        style={{
          marginTop: "1rem",
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

export default Registration;
