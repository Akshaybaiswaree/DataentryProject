import { Avatar, Box, Flex, Heading, Image } from "@chakra-ui/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Dataentry from "../../Images/logo.png";
import Dataentry from "../../Images/ZEMEX LOGO.png";

export default function Navbar() {
  return (
    <Flex
      direction={{ base: "row", md: "row" }} // Stack vertically on small screens and horizontally on medium and larger screens
      justifyContent="space-between"
      // alignItems="center"
      paddingX={{ base: "3", md: "8" }} // Add padding on small screens and larger screens
      paddingY="4"
    >
      <Box
        display="flex"
        alignItems="center"
        marginBottom={{ base: "4", md: "0" }}
      >
        <Image
          marginLeft={{ base: "0", md: "0rem" }}
          boxSize={{ base: "60px", md: "120px" }}
         
          src={Dataentry}
          // width="20px"
        />
        <Heading
          fontSize={{ base: "2xl", md: "5xl" }}
          marginLeft={{ base: "1rem", md: "10rem" }}
        >
          Zemix Services
        </Heading>
      </Box>
      <Box>
        <Avatar
          marginTop={"1rem"}
          borderRadius="50%"
          width={{ base: "2.5rem", md: "3.5rem" }}
          height={{ base: "2.4rem", md: "3rem" }}
          src="Avatarimage.jpg"
          marginRight="1.5"
        />
      </Box>
    </Flex>
  );
}
