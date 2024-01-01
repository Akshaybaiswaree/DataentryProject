import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import { Box, Button, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Recovery = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/user/recovery_user?page=${currentPage}`);
      setTotalPage(response.data.totalPages);
      setUserData(response?.data?.users);
    } catch (error) {
      console.error(error, "Error");
    }
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    if (searchQuery) {
      searchResponse();
      setCurrentPage(1);
      setSearchQuery("");
    } else {
      fetchData();
    }
  };

  const searchResponse = async () => {
    try {
      const payload = {
        name: searchQuery,
      };

      const response = await axios.post(`${apiUrl}/user/search_user_recovery`, payload);
      setUserData(response.data.users);
    } catch (error) {
      console.error(error, "Error");
    }
  };

  const columns = [
    {
      name: "User Name",
      selector: "name",
    },
    {
      name: "Number",
      selector: "mobile",
    },
    {
      name: "Start Date",
      selector: "startDate",
      format: (row) => new Date(row.startDate).toLocaleDateString(),
    },
    {
      name: "Amount",
      selector: "amount",
    },
    {
      name: "Action",
      cell: (row) => (
        <NavLink to={`/recoveryprofile/${row._id}`}>
        <Button colorScheme="blackAlpha" backgroundColor="black" width="80%">
            View Detail
          </Button>
        </NavLink>
      ),
    },
  ];

  const paginationOptions = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  return (
    <>
      <Flex>
        <Box fontSize="2rem" fontWeight="700">
          Recovery
        </Box>
      </Flex>

      <InputGroup mt="1rem" ml={["0rem", "0.5rem"]} width={["100%", "400px"]}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
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

      <Box width={{ base: "100%", md: "80vw" }} overflowX="auto" p={4}>
        <DataTable
          title=""
          columns={columns}
          data={userData}
          pagination
          paginationServer
          paginationTotalRows={totalPage * 10} // Assuming 10 items per page
          onChangePage={(page) => handlePagination(page)}
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          paginationComponentOptions={paginationOptions}
        />
      </Box>
    </>
  );
};

export default Recovery;
