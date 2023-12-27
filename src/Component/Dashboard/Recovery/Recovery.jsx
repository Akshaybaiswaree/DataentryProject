import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Employees/Employees.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import { Box, Button, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
const Recovery = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotlePage] = useState(1);
  const [userData , setUserData] = useState([])

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    
    try {
      const config = {
        methode: "GET",
        url: `${apiUrl}/user/recovery_user?page=${currentPage}`,
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

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <>

    <Flex  >
      <Box
    
     
     fontSize={'2rem'} fontWeight={'700'}>Recovery</Box>
   
    </Flex>
    <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input width={"400px"} type="text" placeholder="Search..." />
      </InputGroup>
    <div className="table" style={{justifyContent:"center", alignItems:'center',width:"80%", padding:"1rem"}}>
      <div className="user" style={{color:'black'}}><b>
        <h5>User Name</h5></b>
        <b><h5>Number</h5></b>
        <b><h5>Start Date</h5></b>
        <b><h5>Amount</h5></b>
      </div>
      <div className="details">
      {userData.map((user) => (
        <div className="user" key={user._id}>
          <h5>{user.name}</h5>
          <h5>{user.mobile}</h5>
          <h5>{new Date(user.startDate).toLocaleDateString()}</h5>
          <h5>{user.amount}</h5>
          <NavLink to={`/recoveryprofile/${user._id}`}>
          <button 
          style={{background:"black" , width:"8.3rem"}}>View Detail</button>
          </NavLink>
        </div>
      ))}
        <br />
        <div className="numbers">
            <ChevronLeftIcon />
            {Array.from({ length: totalPage }, (_, index) => (
              <span
                key={index + 1}
                className="num"
                onClick={() => handlePagination(index + 1)}
              >
                {index + 1}
              </span>
            ))}
            <ChevronRightIcon />
          </div>
      </div>
    </div>
    </>
  );
};

export default Recovery;
