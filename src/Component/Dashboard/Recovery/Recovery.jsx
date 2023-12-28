import React, { useEffect, useState } from "react";
import axios from "axios";
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

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const config = {
        method: "GET",
        url: `${apiUrl}/user/recovery_user?page=${currentPage}`,
      };
      const response = await axios(config);
      setTotalPages(response.data.totalPages);
      setUserData(response?.data?.users);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

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
              width: "8.3rem",
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
  };

  return (
    <>
      <Box>
        <InputGroup mb={4}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input width={"400px"} type="text" placeholder="Search..." />
        </InputGroup>
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
    </>
  );
};

export default Recovery;
