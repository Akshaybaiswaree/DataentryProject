import { Box, Flex } from "@chakra-ui/react";

import React from "react";

const Assignment = () => {
  const assignmentData = [
    { color: "#ffcab0", label: "Total Assignment" },
    { color: "#c7b198", label: "Submitted Assignment" },
    { color: "#cadefc", label: "Pending Assignment" },
  ];

  return (
    <Flex
      alignItems="center"
      width="100%"
      justifyContent="space-between"
      marginLeft="auto"
      marginRight="auto"
    >
      {assignmentData.map((assignment, index) => (
        <Box
          key={index}
          backgroundColor={assignment.color}
          border="#ebe9eb"
          margin="20px"
          padding="10px"
          width="50%"
          maxWidth="300px"
          height="150px"
          fontWeight="600"
          borderRadius="10px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="#333"
        >
          <span
            style={{
              fontSize: "24px",
              background: assignment.color, // Use the color from assignmentData
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            100
          </span>
          <p
            style={{
              fontSize: "18px",
              padding: "10px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            {assignment.label}
          </p>
        </Box>
      ))}
    </Flex>
  );
};

export default Assignment;
