import React, { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import "../Employees/Employees.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Grid } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
const Recovery = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const [searchQuary, setSearchQuary] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotlePage] = useState(1);
  const [userData , setUserData] = useState([])
=======
import DataTable from "react-data-table-component";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";

const Recovery = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [userData, setUserData] = useState([]);
>>>>>>> 3c99fd86e4b85f3237a600c908b3cac3aa783a03

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
<<<<<<< HEAD
    
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
=======
    try {
      const config = {
        method: "GET",
        url: `${apiUrl}/user/recovery_user?page=${currentPage}`,
      };
      const response = await axios(config);
      setTotalPages(response.data.totalPages);
      setUserData(response?.data?.users);
>>>>>>> 3c99fd86e4b85f3237a600c908b3cac3aa783a03
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

<<<<<<< HEAD
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
        url:  `${apiUrl}/user/search_user_recovery`,
        data: handlePaylode,
      };

      const responces = await axios(config);
      console.log(responces, "Search Result");
      setUserData(responces.data.users);
    } catch (error) {
      console.log(error, "Error");
    }
=======
  const columns = [
    { name: "User Name", selector: "name", sortable: true },
    { name: "Number", selector: "mobile", sortable: true },
    {
      name: "Start Date",
      selector: "startDate",
      sortable: true,
      format: (row) => new Date(row.startDate).toLocaleDateString(),
    },
    { name: "Amount", selector: "amount", sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <NavLink to={`/recoveryprofile/${row._id}`}>
          
          <button 
            style={{
              background: "black",
              width: "6.3rem",
              color: "white",
              borderRadius: "0.7rem",
              height: "2rem",
            }}
          >
            View Detail
          </button>
        </NavLink>
      ),
    },
  ];

  const paginationOptions = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
>>>>>>> 3c99fd86e4b85f3237a600c908b3cac3aa783a03
  };

  return (
    <>
<<<<<<< HEAD

    <Flex  >
      <Box
    
     
     fontSize={'2rem'} fontWeight={'700'}>Recovery</Box>
   
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
          value={searchQuary}
          onChange={(e) => {
            setSearchQuary(e.target.value);
          }}
        />
        <Button
          className="employee-btn"
          colorScheme="teal"
          mt="0"
          style={{marginLeft: '20px'}}
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputGroup>
     
      <div className="table" style={{ display: 'grid', gridTemplateColumns: '1fr', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '1rem' }}>

      <div style={{ display: 'flex', alignItems: 'center' }}>
              <h5 style={{ width: '25%' }}>User Name</h5>
              <h5 style={{ width: '25%' }}>Number</h5>
              <h5 style={{ width: '25%' }}>Start Date</h5>
              <h5 style={{ width: '25%' }}>Amount</h5>
              <h5 style={{ width: '20%' }}></h5>
            </div>
      <div className="details" style={{width:'100%'}}>
      {userData.map((user) => (
        <div className="user" key={user._id}style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
             <h5 style={{ width: '25%' }}>{user.name}</h5>
              <h5 style={{ width: '25%' }}>{user.mobile}</h5>
              <h5 style={{ width: '25%' }}>{new Date(user.startDate).toLocaleDateString()}</h5>
              <h5 style={{ width: '25%' }}>{user.amount}</h5>
              <div style={{ width: '25%' }}>
          <NavLink to={`/recoveryprofile/${user._id}`}>
          <button 
          style={{background:"black" , width:"8.3rem"}}>View Detail</button>
          </NavLink>
          </div>
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
=======
      <Box margin={'1rem'}>
        <InputGroup 
        ml={{base:"1rem"}}
        mb={4}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input width={{base:"320px",md:"400px"}} type="text" placeholder="Search..." />
        </InputGroup>
        <Box width={{ base: "81vw", md: "80vw" }} overflowX="auto" p={4}>
        <DataTable
          title=""
          columns={columns}
          data={userData}
          pagination
          paginationServer
          paginationTotalRows={totalPages * 10} // Assuming 10 items per page
          onChangePage={(page) => handlePagination(page)}
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          paginationComponentOptions={paginationOptions}
        />
        {/* <div className="numbers">
          <ChevronLeftIcon
            onClick={() => handlePagination(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index + 1}
              className="num"
              onClick={() => handlePagination(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <ChevronRightIcon
            onClick={() => handlePagination(currentPage + 1)}
          />
        </div> */}
        </Box>
      </Box>
>>>>>>> 3c99fd86e4b85f3237a600c908b3cac3aa783a03
    </>
  );
};

export default Recovery;
