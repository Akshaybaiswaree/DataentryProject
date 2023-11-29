import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react"; // Import Box and Flex from Chakra UI

import SideBar from "../Sidebar/Sidebar";

function RootLayout() {
  return (
    <Flex direction="column" height="100vh">
      {/* Navbar */}
      <Box>
        <Navbar />
      </Box>

      {/* Main Content */}
      <Flex flexGrow={1}>
        {/* Sidebar */}
        <Box flexBasis={{ base: "100%", md: "20%" }}>
          <SideBar />
        </Box>

        {/* Main Content */}
        <Box
        marginLeft={'1rem'}
        flexBasis={{ base: "100%", md: "80%" }}>
          <Outlet 
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default RootLayout;
