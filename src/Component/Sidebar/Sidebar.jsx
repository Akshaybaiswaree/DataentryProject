import {
  List,
  ListItem,
  Box,
  Image,
  Container,
  ListIcon,
  Icon,
  Button,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
  Flex,
} from "@chakra-ui/react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import MovingIcon from "@mui/icons-material/Moving";
import GroupsIcon from "@mui/icons-material/Groups";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { AddIcon, MinusIcon, WarningTwoIcon } from "@chakra-ui/icons";
import {
  BsGrid,
  BsFlagFill,
  BsFileEarmarkSpreadsheet,
  BsAmd,
  BsFillFileEarmarkSpreadsheetFill,
  BsChevronRight,
} from "react-icons/bs";
import { CiLogout, CiMoneyBill } from "react-icons/ci";

//   import { useAuth } from "../context/AuthContext";

export default function SideBar() {
  return (
    <>
      <List p="10px" bg="">
        <ListItem className="listItem" p="10px" borderRadius="10px">
          <Flex alignItems="center">
            <DashboardIcon style={{ marginTop: "0rem" }} />
            <NavLink
              to="dashboard"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Text
                as={"span"}
                color="black"
                fontSize={"1.5rem"}
                marginLeft="8px" // Add some margin for spacing between icon and text
                _hover={{ textDecoration: "underline" }}
              >
                Dashboard
              </Text>
            </NavLink>
          </Flex>
        </ListItem>

        <Divider
          style={{ marginTop: "1.5rem" }}
          borderWidth="2px"
          borderColor={"gray"}
        />
        <Accordion allowToggle width={"90%"}>
          <ListItem className="listItem" p="0px" borderRadius="10px" m="0px">
            <NavLink to="user">
              <AccordionItem _hover={{ bg: "#F0F0F0" }}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <AccountCircleIcon
                          style={{
                            background:"black",
                            borderRadius:"50%",
                            width: "3.5rem",
                            height: "3rem",
                            textAlign: "center",
                          }}
                        />
                        <Text
                          as="span"
                          color="black"
                          fontSize="1.5rem"
                          marginLeft={"0.7rem"}
                          // Remove the hover red color
                        >
                          User
                        </Text>

                        {isExpanded ? (
                          <MinusIcon 
                          color={'black'}
                          ml="10px" />
                        ) : (
                          <AccordionIcon ml="10px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel 
                  
                    pb={4}>
                      <ListItem
                        className="listItem"
                        p="5px"
                        borderRadius="10px"
                      >
                        <ListIcon as={BsAmd} color="gray.500" ml="10px" />
                        <NavLink to="/user/registration">
                          <Text
                            as="span"
                            pl="10px"
                            fontSize={{ base: "0.6rem", md: "1rem" }}
                            color="black"
                          >
                            Registration
                          </Text>
                        </NavLink>
                      </ListItem>

                      <ListItem
                        className="listItem"
                        p="5px"
                        borderRadius="10px"
                      >
                        <ListIcon
                          as={BsFileEarmarkSpreadsheet}
                          color="gray.500"
                          ml="10px"
                        />
                        <NavLink to="/user/pending">
                          <Text
                            as="span"
                            pl="10px"
                            fontSize={{ base: "0.6rem", md: "1rem" }}
                            color="black"
                          >
                            Pending
                          </Text>
                        </NavLink>
                      </ListItem>

                      <ListItem
                        className="listItem"
                        p="5px"
                        borderRadius="10px"
                      >
                        <ListIcon as={CiMoneyBill} color="gray.500" ml="10px" />
                        <NavLink to="/user/cancel">
                          <Text
                            as="span"
                            pl="10px"
                            fontSize={{ base: "0.6rem", md: "1rem" }}
                            color="black"
                          >
                            Cancel
                          </Text>
                        </NavLink>
                      </ListItem>

                      <ListItem
                        className="listItem"
                        p="5px"
                        borderRadius="10px"
                      >
                        <ListIcon
                          as={BsFillFileEarmarkSpreadsheetFill}
                          ml="10px"
                        />
                        <NavLink to="/user/plan">
                          <Text
                            as="span"
                            pl="10px"
                            fontSize={{ base: "0.6rem", md: "1rem" }}
                            color="black"
                          >
                            Plan
                          </Text>
                        </NavLink>
                      </ListItem>

                      <Divider borderWidth="1px" borderColor={"gray"} />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </NavLink>
          </ListItem>
        </Accordion>

        <ListItem
          style={{ marginTop: "2rem" }}
          className="listItem"
          p="10px"
          borderRadius="10px"
        >
          <PersonOffIcon className="sidebaricon" />
          <NavLink to="/blockeduser">
            <Text
              as="span"
              color="black"
              fontSize="rem"
              marginLeft="8px" // Add some margin for spacing between icon and text
              _hover={{ textDecoration: "underline" }}
            >
              Blocked Services
            </Text>
          </NavLink>
        </ListItem>

        <ListItem
          style={{ marginTop: "1.5rem" }}
          className="listItem"
          p="10px"
          borderRadius="10px"
        >
          <MovingIcon className="sidebaricon" />
          <NavLink to="/report">
            <Text
              as="span"
              color="black"
              fontSize="rem"
              marginLeft="8px" // Add some margin for spacing between icon and text
              _hover={{ textDecoration: "underline" }}
            >
              Report
            </Text>
          </NavLink>
        </ListItem>

        <Divider borderWidth="1px" borderColor={"gray"} />

        <ListItem
          style={{ marginTop: "1.5rem" }}
          className="listItem"
          p="10px"
          borderRadius="10px"
        >
          <MultilineChartIcon className="sidebaricon" />
          <NavLink to="/recovery">
            <Text
              as="span"
              color="black"
              fontSize="rem"
              marginLeft="8px" // Add some margin for spacing between icon and text
              _hover={{ textDecoration: "underline" }}
            >
              Recovery
            </Text>
          </NavLink>
        </ListItem>

        <ListItem
          style={{ marginTop: "1.5rem" }}
          className="listItem"
          p="10px"
          borderRadius="10px"
        >
          <GroupsIcon className="sidebaricon"></GroupsIcon>
          <NavLink to="/employees">
            <Text
              as="span"
              color="black"
              fontSize="rem"
              marginLeft="8px" // Add some margin for spacing between icon and text
              _hover={{ textDecoration: "underline" }}
            >
              Employees
            </Text>
          </NavLink>
        </ListItem>
      </List>
    </>
  );
}
