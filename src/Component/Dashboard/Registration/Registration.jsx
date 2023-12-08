// import React, { useEffect, useState } from "react";
// // import "./Employees.css";
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
//   Stack,
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import { Pagination } from "@mui/material";
// // import Stack from '@mui/material/Stack';
// const Registration = () => {
//   // use effect isiliye taaki page load hote hi data show ho

//   const [getdata, setGetData] = useState([]);
//   const [search , setSearch] =useState("");




 
//   useEffect(() => {
//     ShowData();
//   }, []);

//   const ShowData = async () => {
//     const config = {
//       method: "GET",
//       url: "http://localhost:5000/user/get_all_user",
//     };
//     const GetUserApiResponse = await axios(config);
//     console.log("get user ", GetUserApiResponse.data.User);
//     setGetData(GetUserApiResponse.data.User);
//   };


//   // xyz here call on each element of object matlab ye har element me jaake check krr rha hu..
//   // const filteredList = getdata.filter((xyz) =>
//   // //M.tolowercase===m
//   // //includes predefined function hai jo checkkrra hai har isme jaake
//   //   xyz.name.toLowerCase().includes(search.toLowerCase())
//   // );

//   const filteredList = getdata.filter((item) =>
//   item?.name?.toLowerCase().includes(search.toLowerCase())
// );


//   return (
//     <>
//       <Flex>
//         <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
//           Registration
//         </Box>
//         <NavLink to="/user/Registrationform">
//           <Button
//             marginLeft={"670px"}
//             _hover={{ background: "white", color: "gray" }}
//             padding={"1rem"}
//             color={"white"}
//             bg={"black"}
//           >
//             Add User
//           </Button>
//         </NavLink>
//       </Flex>
//       <InputGroup>
//         <InputLeftElement
//           pointerEvents="none"
//           children={<SearchIcon color="gray.300" />}
//         />
//         <Input width={"400px"} type="text" placeholder="Search..." 
//         value={search}
//         onChange={(e)=>{setSearch(e.target.value)}}
//         />
//       </InputGroup>
//       <div
//         className="table"
//         style={{  
//           marginTop: "1rem",
//           justifyContent: "center",
//           alignItems: "center",
//           width: "80%",
//           padding: "1rem",
//         }}
//       >
//         <div className="head">
//           <h5>Name </h5>
//           <h5>Mobile</h5>
//           <h5>Mail</h5> 
//           <h5>Status</h5> 
//         </div>
//         {filteredList.map((items) => {
//           return (
//             <>
//               <div className="details">
//                 <div className="user">
//                   <p>{items.name}</p>
//                   <h5>{items.mobile}</h5>
//                   <p>{items.email}</p>
//                   <NavLink to="/user/registeruserdetail">
//                     <button style={{ background: "black", width: "8.3rem" }}>
//                       View Detail
//                     </button>
//                   </NavLink>
//                 </div>
//               </div>
//             </>
//           );
//         })}

      
//       </div>
//       {/* </div> */}
//     </>
//   );
// };

// export default Registration;


// import React, { useEffect, useState } from "react";
// // import "./Employees.css";
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
//   Stack,
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import { Pagination } from "@mui/material";
// // import Stack from '@mui/material/Stack';
// const Registration = () => {
//   // use effect isiliye taaki page load hote hi data show ho

//   const [getdata, setGetData] = useState([]);
//   const [search, setSearch] = useState("");j

//   useEffect(() => {
//     ShowData();
//   }, []);

//   const ShowData = async () => {
//     const config = {
//       method: "GET",
//       url: "http://localhost:5000/user/get_all_user",
//     };
//     const GetUserApiResponse = await axios(config);
//     console.log("get user ", GetUserApiResponse.data.User);
//     setGetData(GetUserApiResponse.data.User);
//   };

//   // xyz here call on each element of object matlab ye har element me jaake check krr rha hu..
//   // const filteredList = getdata.filter((xyz) =>
//   // //M.tolowercase===m
//   // //includes predefined function hai jo checkkrra hai har isme jaake
//   //   xyz.name.toLowerCase().includes(search.toLowerCase())
//   // );

//   const filteredList = getdata.filter((item) =>
//     item?.name?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <Flex>
//         <Box marginBottom={"1rem"} fontSize={"2rem"} fontWeight={"700"}>
//           Registration
//         </Box>
//         <NavLink to="/user/Registrationform">
//           <Button
//             marginLeft={"670px"}
//             _hover={{ background: "white", color: "gray" }}
//             padding={"1rem"}
//             color={"white"}
//             bg={"black"}
//           >
//             Add User
//           </Button>
//         </NavLink>
//       </Flex>
//       <InputGroup>
//         <InputLeftElement
//           pointerEvents="none"
//           children={<SearchIcon color="gray.300" />}
//         />
//         <Input
//           width={"400px"}
//           type="text"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//         />
//       </InputGroup>
//       <div
//         className="table"
//         style={{
//           marginTop: "1rem",
//           justifyContent: "center",
//           alignItems: "center",
//           width: "80%",
//           padding: "1rem",
//         }}
//       >
//         <div className="head">
//           <h5>Name </h5>
//           <h5>Mobile</h5>
//           <h5>Mail</h5>
//           <h5>Status</h5>
//         </div>
//         {filteredList.map((items) => {
//           return (
//             <>
//               <div className="details">
//                 <div className="user">
//                   <p>{items.name}</p>
//                   <h5>{items.mobile}</h5>
//                   <p>{items.email}</p>
//                    {/* <NavLink to={`/user/registeruserdetail/${items._id}`}>  */}
//                   <NavLink to={`/user/registeruserdetail/${items._id}`}>
//                     <button style={{ background: "black", width: "8.3rem" }}>
//                       View Detail
//                     </button>
//                   </NavLink>  
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//      {/* </div>  */}
//     </>
//   );
// };

// export default Registration;

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
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import { Pagination } from "@mui/material";

// import "./Employees.css";

// import Stack from '@mui/material/Stack';
const Registration = () => {
  // use effect isiliye taaki page load hote hi data show ho

  const [getdata, setGetData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    ShowData();
  }, []);

  const ShowData = async () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/user/get_all_user",
    };
    const GetUserApiResponse = await axios(config);
    console.log("get user ", GetUserApiResponse.data.User);
    setGetData(GetUserApiResponse.data.User);
  };

  // xyz here call on each element of object matlab ye har element me jaake check krr rha hu..
  const filteredList = getdata.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  );

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
        {filteredList.map((items) => (
          <React.Fragment key={items.id}>
            <Box>{items.name}</Box>
            <Box>{items.mobile}</Box>
            <Box>{items.email}</Box>
            <Box>
            <NavLink to={`/user/registeruserdetail/${items._id}`}>
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
        ))}
      </Grid>
      {/* </div> */}
    </>
  );
};

export default Registration;
