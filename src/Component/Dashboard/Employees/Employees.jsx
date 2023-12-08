// import React, { useEffect } from "react";
// import "./Employees.css";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { NavLink } from "react-router-dom";
// import { Box, Button, Flex } from "@chakra-ui/react";
// import axios from "axios";

// const Employees = () => {
//   const [getdata, setGetdata] = useState([]);


//   useEffect(() =>{
//     showdata
//   } ,[])

//   const showdata = async () => {
//     const config = {
//       method: "GET",
//       url: "http://localhost:10000/user/get_all_employee",
//     };
//     const getapiresponse=await axios(config);

//     console.log("getapiresponse",getapiresponse)
//   };

//   return (
//     <>
//       <Flex>
//         <Box fontSize={"2rem"} fontWeight={"700"}>
//           Employee
//         </Box>
//         <NavLink to="/employeeform">
//           <Button
//             marginLeft={"670px"}
//             _hover={{ background: "white", color: "gray" }}
//             padding={"1rem"}
//             color={"white"}
//             bg={"black"}
//           >
//             Add Employee
//           </Button>
//         </NavLink>
//       </Flex>
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

// export default Employees;


import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
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
      <InputGroup>
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
        gap={4}
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
                    width="100%"
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

