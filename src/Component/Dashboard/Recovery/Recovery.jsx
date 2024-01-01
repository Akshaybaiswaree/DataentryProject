// import React, { useEffect, useState } from "react";
// import axios from "axios";
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
//   Grid,
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// const Recovery = () => {
//   const apiUrl = import.meta.env.VITE_APP_API_URL;
//   const [searchQuery, setSearchQuery] = useState(""); // Corrected variable name
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPage, setTotalPage] = useState(1); // Corrected variable name
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   const fetchData = async () => {
//     try {
//       const config = {
//         method: "GET", // Corrected spelling
//         url: `${apiUrl}/user/recovery_user?page=${currentPage}`,
//       };
//       const response = await axios(config);
//       setTotalPage(response.data.totalPages); // Corrected variable name
//       console.log(response.data.totalPages);
//       console.log(response);
//       setUserData(response?.data?.users);
//     } catch (error) {
//       console.log(error, "error");
//     }
//   };

//   const handlePagination = (page) => {
//     setCurrentPage(page);
//   };

//   const handleSearch = () => {
//     if (searchQuery) {
//       searchResponse();
//       setCurrentPage(1);
//       setSearchQuery("");
//     } else {
//       fetchData();
//     }
//   };

//   const searchResponse = async () => {
//     try {
//       const payload = {
//         name: searchQuery,
//       };

//       const response = await axios.post(
//         `${apiUrl}/user/search_user_recovery`,
//         payload
//       );
//       setUserData(response.data.users);
//     } catch (error) {
//       console.log(error, "Error");
//     }
//   };

//   return (
//     <>
//       <Flex>
//         <Box fontSize={"2rem"} fontWeight={"700"}>
//           Recovery
//         </Box>
//       </Flex>
//       <InputGroup mt="1rem" ml={["0rem", "0.5rem"]} width={["100%", "400px"]}>
//         <InputLeftElement
//           pointerEvents="none"
//           children={<SearchIcon color="gray.300" />}
//         />
//         <Input
//           border="1px solid green"
//           width="100%"
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <Button
//           className="employee-btn"
//           colorScheme="teal"
//           mt="0"
//           style={{ marginLeft: "20px" }}
//           onClick={handleSearch}
//         >
//           Search
//         </Button>
//       </InputGroup>

//       <div style={{ display: "flex", alignItems: "center" }}>
//         <h5 style={{ width: "25%" }}>User Name</h5>
//         <h5 style={{ width: "25%" }}>Number</h5>
//         <h5 style={{ width: "25%" }}>Start Date</h5>
//         <h5 style={{ width: "25%" }}>Amount</h5>
//         <h5 style={{ width: "20%" }}></h5>
//       </div>
//       <div className="details" style={{ width: "100%" }}>
//         {userData.map((user) => (
//           <div
//             className="user"
//             key={user._id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginTop: "10px",
//             }}
//           >
//             <h5 style={{ width: "25%" }}>{user.name}</h5>
//             <h5 style={{ width: "25%" }}>{user.mobile}</h5>
//             <h5 style={{ width: "25%" }}>
//               {new Date(user.startDate).toLocaleDateString()}
//             </h5>
//             <h5 style={{ width: "25%" }}>{user.amount}</h5>

//             <NavLink to={`/recoveryprofile/${user._id}`}>
//               <button style={{ background: "black", width: "8.3rem" }}>
//                 View Detail
//               </button>
//             </NavLink>
//           </div>
//         ))}
//         <br />
//         <div className="numbers">
//           <ChevronLeftIcon />
//           {Array.from({ length: totalPage }, (_, index) => (
//             <span
//               key={index + 1}
//               className="num"
//               onClick={() => handlePagination(index + 1)}
//             >
//               {index + 1}
//             </span>
//           ))}
//           <ChevronRightIcon />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Recovery;
// DataTable.js
import React from "react";
import DataTable from "react-data-table-component";
import { Input, Button, InputGroup, InputLeftElement, Box, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";

const Recovery = ({ data, totalPage, currentPage, handlePagination, searchQuery, setSearchQuery, handleSearch }) => {
  const columns = [
    {
      name: "User Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Number",
      selector: "mobile",
      sortable: true,
    },
    {
      name: "Start Date",
      selector: "startDate",
      sortable: true,
      format: (row) => new Date(row.startDate).toLocaleDateString(),
    },
    {
      name: "Amount",
      selector: "amount",
      sortable: true,
    },
    {
      name: "",
      button: true,
      cell: (row) => (
        <NavLink to={`/recoveryprofile/${row._id}`}>
          <button style={{ background: "black", width: "8.3rem" }}>View Detail</button>
        </NavLink>
      ),
    },
  ];

  return (
    <>
      <Flex>
        <Box fontSize={"2rem"} fontWeight={"700"}>
          Recovery
        </Box>
      </Flex>
      <InputGroup mt="1rem" ml={["0rem", "0.5rem"]} width={["100%", "400px"]}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          border="1px solid green"
          width="100%"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          className="employee-btn"
          colorScheme="teal"
          mt="0"
          style={{ marginLeft: "20px" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputGroup>

      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationServer
        paginationTotalRows={totalPage}
        onChangePage={handlePagination}
        paginationDefaultPage={currentPage}
        noHeader
        customStyles={{
          rows: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            },
          },
          headCells: {
            style: {
              width: "25%",
            },
          },
          cells: {
            style: {
              width: "25%",
            },
          },
        }}
      />

      {/* <div className="numbers" style={{ display: 'flex', alignItems: 'center' }}>
        <ChevronLeftIcon onClick={() => handlePagination(currentPage - 1)} />
        {Array.from({ length: totalPage }, (_, index) => (
          <span
            key={index + 1}
            className="num"
            onClick={() => handlePagination(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <ChevronRightIcon onClick={() => handlePagination(currentPage + 1)} />
      </div> */}
    </>
  );
};

export default Recovery;
