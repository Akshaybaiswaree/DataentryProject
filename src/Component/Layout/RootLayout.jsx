import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react"; // Import Box and Flex from Chakra UI
//import {useState} from 'react'
import SideBar from "../Sidebar/Sidebar";
//import UserSidebar from "../Dashboard/UserSidebar/UserSidebar"; 

function RootLayout() {
  // const [currentSidebar, setCurrentSidebar] = useState(null);

  // const toggleSidebar = (role) => {
  //   setCurrentSidebar(role);
  // };

  // let SidebarComponent = SideBar; // Default to regular sidebar

  // if (currentSidebar === "user") {
  //   SidebarComponent = UserSidebar;
  // } else if (currentSidebar === "admin") {
  //   SidebarComponent = SideBar;
  // }


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
