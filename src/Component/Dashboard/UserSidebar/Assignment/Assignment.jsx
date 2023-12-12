// import { Box, Flex } from "@chakra-ui/react";
// import axios from "axios";

// import React from "react";

// const Assignment = () => {
//   const assignmentData = [
//     { color: "#ffcab0", label: "Total Assignment" },
//     { color: "#c7b198", label: "Submitted Assignment" },
//     { color: "#cadefc", label: "Pending Assignment" },
//   ];

//   // fetchDetails of assingment
//   const fetchDetails = async () => {
//     const response = await axios.get(
//       `http://localhost:5000/user/get_totalAssignment`
//     );
//     const data = response.data;
//     console.log(data);
//     setData(data);
//     // console.log(data?.total);
//   };
//   return (
//     <Flex
//       alignItems="center"
//       width="100%"
//       justifyContent="space-between"
//       marginLeft="auto"
//       marginRight="auto"
//     >
//       {assignmentData.map((assignment, index) => (
//         <Box
//           key={index}
//           backgroundColor={assignment.color}
//           border="#ebe9eb"
//           margin="20px"
//           padding="10px"
//           width="50%"
//           maxWidth="300px"
//           height="150px"
//           fontWeight="600"
//           borderRadius="10px"
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           color="#333"
//         >
//           <span
//             style={{
//               fontSize: "24px",
//               background: assignment.color, // Use the color from assignmentData
//               padding: "5px",
//               borderRadius: "5px",
//             }}
//           >
//             100
//           </span>
//           <p
//             style={{
//               fontSize: "18px",
//               padding: "10px",
//               borderRadius: "5px",
//               marginTop: "10px",
//             }}
//           >
//             {assignment.label}
//           </p>
//         </Box>
//       ))}
//     </Flex>
//   );
// };

// export default Assignment;
import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";

const Assignment = () => {
  // for data
  const [data, setData] = useState();

  //  for fetch total assingment details in Dashboard
  useEffect(() => {
    fetchDetails();
  }, []);

  // fetchDetails of assingment
  const fetchDetails = async () => {
    const response = await axios.get(
      `http://localhost:5000/user/get_totalAssignment`
    );
    const data = response.data;
    console.log(data);
    setData(data);
    // console.log(data?.total);
  };
  return (
    <Flex alignItems="center">
      {/* Total Assingment */}
      <Flex gap="15%" textAlign="center">
        <Box
          backgroundColor="#ffe6ff"
          border="#ebe9eb"
          margin="20px"
          padding="40px"
          fontWeight="800"
          borderRadius="10px"
          width="150px"
          height="150px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <span
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              height: "10px",
              fontSize: "20px",
              marginRight: "0%",
            }}
          >
            {data?.total}
          </span>
          <p
            style={{
              color: "gray",
              fontWeight: "600",
              flexDirection: "row",
              marginLeft: "0px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Total Assingment
          </p>
        </Box>
      </Flex>

      {/* Submitted Assingment */}
      <Flex gap="15%" textAlign="center">
        <Box
          backgroundColor="#EBE9EB"
          border="#ebe9eb"
          margin="20px"
          padding="40px"
          fontWeight="800"
          borderRadius="10px"
          width="150px"
          height="150px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <span
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              height: "10px",
              fontSize: "20px",
              marginRight: "0%",
            }}
          >
            {data?.submitted}
          </span>
          <p
            style={{
              color: "gray",
              fontWeight: "600",
              flexDirection: "row",
              marginLeft: "0px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Submitted Assingment
          </p>
        </Box>
      </Flex>

      {/* Pending Assingment */}
      <Flex gap="15%" textAlign="center">
        <Box
          backgroundColor="#e6ffe6"
          border="#ebe9eb"
          margin="20px"
          padding="40px"
          fontWeight="800"
          borderRadius="10px"
          width="150px"
          height="150px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <span
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              height: "10px",
              fontSize: "20px",
              marginRight: "0%",
            }}
          >
            {data?.pending}
          </span>
          <p
            style={{
              color: "gray",
              fontWeight: "600",
              flexDirection: "row",
              marginLeft: "0px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Pending Assingment
          </p>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Assignment;
