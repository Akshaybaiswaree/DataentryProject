// import React from "react";
// import "../Employees/Employees.css";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { NavLink } from "react-router-dom";
// import {
//   Box,
//   Button,
//   Flex,
//   Input,
//   InputGroup,
//   InputLeftElement,
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// const Pending = () => {
//   return (
//     <>
//       <Flex direction="column" align="center">
//         <Box
//           color="#DD372D"
//           ml={["1rem", "0rem"]}
//           mt={["1rem", "0"]}
//           mb="1rem"
//           fontSize={["1.5rem", "2rem"]}
//           fontWeight="700"
//         >
//           Pending
//         </Box>
//         <NavLink to="/employeeform">
//           <Button
//             mt="1rem"
//             _hover={{ background: "white", color: "gray" }}
//             p="1rem"
//             color="white"
//             bg="black"
//             width={"6rem"}
//           >
//             Add User
//           </Button>
//         </NavLink>
//       </Flex>
//       <InputGroup mt="1rem" ml={["1rem", "6.5rem"]} width={["90%", "400px"]}>
//         <InputLeftElement
//           pointerEvents="none"
//           children={<SearchIcon color="gray.300" />}
//         />
//         <Input
//           border="1px solid green"
//           width="100%"
//           type="text"
//           placeholder="Search..."
//           // value={search}
//           // onChange={(e) => {
//           //   setSearch(e.target.value);
//           // }}
//         />
//       </InputGroup>
//       <div
//         className="table"
//         style={{
//           justifyContent: "center",
//           alignItems: "center",
//           width: "80%",
//           padding: "1rem",
//         }}
//       >
//         <div className="head">
//           <h5>Name</h5>
//           <h5>Mobile</h5>
//           <h5>Mail</h5>
//         </div>
//         <div className="details">
//           <div className="user">
//             <p>Kaveri Kapoor</p>
//             <h5>9856412372</h5>
//             <p>kaveri@gmail.com</p>
//             <NavLink to="/employeeprofileedit">
//               <button style={{ background: "black", width: "8.3rem" }}>
//                 View Detail
//               </button>
//             </NavLink>
//           </div>
//           <br />
//           <div className="user">
//             <p>Kaveri Kapoor</p>
//             <h5>9856412372</h5>
//             <p>kaveri@gmail.com</p>
//             <button style={{ background: "black" }}>View Detail</button>
//           </div>
//           <br />
//           <div className="user">
//             <p>Kaveri Kapoor</p>
//             <h5>9856412372</h5>
//             <p>kaveri@gmail.com</p>
//             <button style={{ background: "black" }}>View Detail</button>
//           </div>
//           <br />
//           <div className="user">
//             <p>Kaveri Kapoor</p>
//             <h5>9856412372</h5>
//             <p>kaveri@gmail.com</p>
//             <button style={{ background: "black" }}>View Detail</button>
//           </div>
//           <br />
//           <div className="user">
//             <p>Kaveri Kapoor</p>
//             <h5>9856412372</h5>
//             <p>kaveri@gmail.com</p>
//             <button style={{ background: "black" }}>View Detail</button>
//           </div>
//           <div className="numbers">
//             <ChevronLeftIcon />
//             <span className="num">1</span>
//             <span className="num">2</span>
//             <span className="num">3</span>
//             <span className="num">4</span>
//             <ChevronRightIcon />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Pending;


import React, { useEffect, useState } from "react";
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
import axios from "axios";
const Pending = () => {
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
        url: `http://localhost:5000/user/user_pagination?page=${currentPage}&status=Pending`,
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
    }else{
      fetchData()
    }
  };
  const searchResponse = async () => {
    try {
      const handlePaylode = {
        name: searchQuary,
      };
      // console.log(searchQuary,"BackEnd Search Feild");

      const config = {
        method: "POST",
        url: "http://localhost:5000/user/search_user_by_name",
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
      <Flex>
        <Box fontSize={"2rem"} fontWeight={"700"}>
          Pending
        </Box>
        <NavLink to="/employeeform">
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
        <Input
          width={"400px"}
          type="text"
          placeholder="Search..."
          value={searchQuary}
          onChange={(e) => setSearchQuary(e.target.value)}
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
        <div className="head">
          <h5>Name</h5>
          <h5>Mobile</h5>
          <h5>Mail</h5>
        </div>
        {/* {/ Show User /} */}
        <div className="details">
          {userData.map((user) => (
            <div className="user" key={user.id}>
              <p>{user.name}</p>
              <h5>{user.mobile}</h5>
              <p>{user.email}</p>
              <NavLink to="/employeeprofileedit">
                <button style={{ background: "black", width: "8.3rem" }}>
                  View Detail
                </button>
              </NavLink>
            </div>
          ))}
        </div>

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
      </div>
    </>
  );
};

export default Pending;

