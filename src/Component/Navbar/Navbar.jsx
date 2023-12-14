// import {
//   Avatar,
//   Box,
//   Flex,
//   HStack,
//   Heading,
//   Icon,
//   Image,
//   Spacer,
//   Text,
//   WrapItem,
// } from "@chakra-ui/react";

// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { BellIcon } from "@chakra-ui/icons";
// import Dataentry from "../../Images/logo.png";

// // import { ChevronDownIcon } from '@chakra-ui/icons'
// // import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   // const auth = useAuth()
//   return (
//     <div>
//       <Flex justifyContent="space-between" alignItems="center">
//         <Box display="flex" alignItems="center">
//           <Image
//            marginLeft={'1.3rem'}
//             boxSize="100px"
//             objectFit="cover"
//             src={Dataentry}
//             width="100px"
//           />
//           <Heading fontSize={"3rem"} marginLeft="10.5rem">
//             Dashboard
//           </Heading>
//         </Box>

//         <Box textAlign="center" marginRight={"1rem"}>
//           <Avatar
//             borderRadius="50%"
//             width="3rem"
//             height="3rem"
//             src="Avatarimage.jpg"
//             marginRight="1.5"
//           />
//           <AccountCircleIcon
//             style={{ width: "3.5rem", height: "3rem", textAlign: "center" }}
//           />
//         </Box>
//       </Flex>
//     </div>
//   );
// }

import { Avatar, Box, Flex, Heading, Image } from "@chakra-ui/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Dataentry from "../../Images/logo.png";
import Dataentry from "../../Images/Group 1000004815.svg";

export default function Navbar() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Stack vertically on small screens and horizontally on medium and larger screens
      justifyContent="space-between"
      alignItems="center"
      paddingX={{ base: "4", md: "8" }} // Add padding on small screens and larger screens
      paddingY="4"
    >
      <Box
        display="flex"
        alignItems="center"
        marginBottom={{ base: "4", md: "0" }}
      >
        <Image
          marginLeft={{ base: "0", md: "0rem" }}
          boxSize={{ base: "70px", md: "100px" }}
          objectFit="cover"
          src={Dataentry}
          // width="20px"
        />
        <Heading
          fontSize={{ base: "2xl", md: "5xl" }}
          marginLeft={{ base: "2", md: "9.5rem" }}
        >
          Dashboard
        </Heading>
      </Box>

      <Box textAlign="center">
        <Avatar
          borderRadius="50%"
          width={{ base: "2.5rem", md: "3.5rem" }}
          height={{ base: "2.4rem", md: "3rem" }}
          src="Avatarimage.jpg"
          marginRight="1.5"
        />
        {/* <AccountCircleIcon
          style={{ width: { base: "2.5rem", md: "16.5rem" }, height: { base: "2.5rem", md: "16rem" } }}
        />  */}
        {/* <AccountCircleIcon
          boxSize={{ base: "2.5rem", md: "16.5rem" }}
          height={{ base: "2.5rem", md: "16rem" }}
        /> */}
      </Box>
    </Flex>
  );
}
