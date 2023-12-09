import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
  WrapItem,
} from "@chakra-ui/react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BellIcon } from "@chakra-ui/icons";
import Dataentry from "../../Images/logo.png";

// import { ChevronDownIcon } from '@chakra-ui/icons'
// import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  // const auth = useAuth()
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Image
           marginLeft={'1.3rem'}
            boxSize="100px"
            objectFit="cover"
            src={Dataentry}
            width="100px"
          />
          <Heading fontSize={"3rem"} marginLeft="10.5rem">
            Dashboard
          </Heading>
        </Box>

        <Box textAlign="center" marginRight={"1rem"}>
          <Avatar
            borderRadius="50%"
            width="3rem"
            height="3rem"
            src="Avatarimage.jpg"
            marginRight="1.5"
          />
          <AccountCircleIcon
            style={{ width: "3.5rem", height: "3rem", textAlign: "center" }}
          />
        </Box>
      </Flex>
    </div>
  );
}
