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
  useDisclosure,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
  Flex,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  IconButton,
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
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useUserContext } from "../Context/UserContext";

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const { getUser } = useUserContext();
  const userRole = getUser();
  console.log(userRole);
  const isAdmin = userRole === "Admin" ? true : false;
  const isUser = userRole === "User" ? true : false;
  console.log(isAdmin, isUser);
  const toast = useToast();
  const navigate = useNavigate();



  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSignout = () => {
    localStorage.clear();
    toast({
      title: "Logout Success.",
      // description: "We've created your account for you.",
      position: "top",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <>
      <List p="10px" bg="">
        {isMobileView && (
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            display={{ base: "block", md: "none" }}
          />
        )}
        {!isMobileView && (
          <Box>
            {isAdmin && (
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
            )}

            <Divider
              style={{ marginTop: "1.5rem" }}
              borderWidth="2px"
              borderColor={"gray"}
            />
            {/* {showDashboard && ( */}
            {isAdmin && (
              <Stack>
                <Accordion allowToggle width={"90%"}>
                  <ListItem
                    className="listItem"
                    p="0px"
                    borderRadius="10px"
                    m="0px"
                  >
                    <NavLink to="user">
                      <AccordionItem _hover={{ bg: "#F0F0F0" }}>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton>
                                <AccountCircleIcon
                                  style={{
                                    background: "black",
                                    borderRadius: "50%",
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
                                  <MinusIcon color={"black"} ml="10px" />
                                ) : (
                                  <AccordionIcon ml="10px" />
                                )}
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <ListItem
                                className="listItem"
                                p="5px"
                                borderRadius="10px"
                              >
                                <ListIcon
                                  as={BsAmd}
                                  color="gray.500"
                                  ml="10px"
                                />
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
                                <ListIcon
                                  as={CiMoneyBill}
                                  color="gray.500"
                                  ml="10px"
                                />
                                <NavLink to="/user/userAgreement">
                                  <Text
                                    as="span"
                                    pl="10px"
                                    fontSize={{ base: "0.6rem", md: "1rem" }}
                                    color="black"
                                  >
                                    User Agreement
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
                <ListItem
                  style={{ marginTop: "2rem" }}
                  className="listItem"
                  p="10px"
                  borderRadius="10px"
                >
                  <PersonOffIcon className="sidebaricon" />

                  <Text
                    as="span"
                    color="black"
                    fontSize="rem"
                    marginLeft="8px" // Add some margin for spacing between icon and text
                    _hover={{ textDecoration: "underline" }}
                  >
                    Assignment Report
                  </Text>
                </ListItem>

                <ListItem
                  style={{ marginTop: "1.5rem" }}
                  className="listItem"
                  p="10px"
                  borderRadius="10px"
                >
                  <MovingIcon className="sidebaricon" />

                  <Text
                    as="span"
                    color="black"
                    fontSize="rem"
                    marginLeft="8px" // Add some margin for spacing between icon and text
                    _hover={{ textDecoration: "underline" }}
                    onClick={handleSignout}
                  >
                    SignOut
                  </Text>
                </ListItem>
              </Stack>
            )}
          </Box>
        )}

        {isMobileView && (
          <Drawer isOpen={isOpen} onClose={onClose} placement="left">
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                  <DrawerHeader>DashBoard</DrawerHeader>
                <DrawerBody>
                  {isAdmin && (
                    <Stack>
                      <Accordion allowToggle width={"90%"}>
                       
                          <NavLink to="user">
                            <AccordionItem _hover={{ bg: "#F0F0F0" }}>
                              {({ isExpanded }) => (
                                <>
                                  <h2>
                                    <AccordionButton>
                                      <AccountCircleIcon
                                        style={{
                                          background: "black",
                                          borderRadius: "50%",
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
                                        <MinusIcon color={"black"} ml="10px" />
                                      ) : (
                                        <AccordionIcon ml="10px" />
                                      )}
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel pb={4}>
                                    <ListItem
                                      className="listItem"
                                      p="5px"
                                      borderRadius="10px"
                                    >
                                      <ListIcon
                                        as={BsAmd}
                                        color="gray.500"
                                        ml="10px"
                                      />
                                      <NavLink to="/user/registration">
                                        <Text
                                          as="span"
                                          pl="10px"
                                          fontSize={{
                                            base: "0.6rem",
                                            md: "1rem",
                                          }}
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
                                          fontSize={{
                                            base: "0.6rem",
                                            md: "1rem",
                                          }}
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
                                      <ListIcon
                                        as={CiMoneyBill}
                                        color="gray.500"
                                        ml="10px"
                                      />
                                      <NavLink to="/user/userAgreement">
                                        <Text
                                          as="span"
                                          pl="10px"
                                          fontSize={{
                                            base: "0.6rem",
                                            md: "1rem",
                                          }}
                                          color="black"
                                        >
                                          User Agreement
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
                                          fontSize={{
                                            base: "0.6rem",
                                            md: "1rem",
                                          }}
                                          color="black"
                                        >
                                          Plan
                                        </Text>
                                      </NavLink>
                                    </ListItem>

                                    <Divider
                                      borderWidth="1px"
                                      borderColor={"gray"}
                                    />
                                  </AccordionPanel>
                                </>
                              )}
                            </AccordionItem>
                          </NavLink>
                       
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
                      <ListItem
                        style={{ marginTop: "2rem" }}
                        className="listItem"
                        p="10px"
                        borderRadius="10px"
                      >
                        <PersonOffIcon className="sidebaricon" />

                        <Text
                          as="span"
                          color="black"
                          fontSize="rem"
                          marginLeft="8px" // Add some margin for spacing between icon and text
                          _hover={{ textDecoration: "underline" }}
                        >
                          Assignment Report
                        </Text>
                      </ListItem>

                      <ListItem
                        style={{ marginTop: "1.5rem" }}
                        className="listItem"
                        p="10px"
                        borderRadius="10px"
                      >
                        <MovingIcon className="sidebaricon" />

                        <Text
                          as="span"
                          color="black"
                          fontSize="rem"
                          marginLeft="8px" // Add some margin for spacing between icon and text
                          _hover={{ textDecoration: "underline" }}
                          onClick={handleSignout}
                        >
                          SignOut
                        </Text>
                      </ListItem>
                    </Stack>
                  )}
                </DrawerBody>
               
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        )}

        {/* )} */}
        {/* User Data */}
        {isUser && (
          <Stack>
            <Accordion allowToggle width={"90%"}>
              <ListItem
                className="listItem"
                p="0px"
                borderRadius="10px"
                m="0px"
              >
                <AccordionItem _hover={{ bg: "#F0F0F0" }}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <AccountCircleIcon
                            style={{
                              background: "black",
                              borderRadius: "50%",
                              width: "3.5rem",
                              height: "3rem",
                              textAlign: "center",
                            }}
                          />
                          <NavLink to="/assignment">
                            <Text
                              as="span"
                              color="black"
                              fontSize="1.5rem"
                              marginLeft={"0.7rem"}
                              // Remove the hover red color
                            >
                              Assignment
                            </Text>
                          </NavLink>

                          {isExpanded ? (
                            <MinusIcon color={"black"} ml="10px" />
                          ) : (
                            <AccordionIcon ml="10px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <ListItem
                          className="listItem"
                          p="5px"
                          borderRadius="10px"
                        >
                          <ListIcon as={BsAmd} color="gray.500" ml="10px" />
                          <NavLink to="/newassignment">
                            <Text
                              as="span"
                              pl="10px"
                              fontSize={{ base: "0.6rem", md: "1rem" }}
                              color="black"
                            >
                              New Assignment
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

                          <Text
                            as="span"
                            pl="10px"
                            fontSize={{ base: "0.6rem", md: "1rem" }}
                            color="black"
                          >
                            Filled Assignment
                          </Text>
                        </ListItem>

                        <Divider borderWidth="1px" borderColor={"gray"} />
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </ListItem>
            </Accordion>

            <Divider borderWidth="1px" borderColor={"gray"} />
          </Stack>
        )}
        {/* {isAdmin && (
          <ListItem
            style={{ marginTop: "2rem" }}
            className="listItem"
            p="10px"
            borderRadius="10px"
          >
            <PersonOffIcon className="sidebaricon" />

            <Text
              as="span"
              color="black"
              fontSize="rem"
              marginLeft="8px" // Add some margin for spacing between icon and text
              _hover={{ textDecoration: "underline" }}
            >
              Assignment Report
            </Text>
          </ListItem>
        )} */}
        {/* <ListItem
          style={{ marginTop: "1.5rem" }}
          className="listItem"
          p="10px"
          borderRadius="10px"
        >
          <MovingIcon className="sidebaricon" />

          <Text
            as="span"
            color="black"
            fontSize="rem"
            marginLeft="8px" // Add some margin for spacing between icon and text
            _hover={{ textDecoration: "underline" }}
            onClick={handleSignout}
          >
            SignOut
          </Text>
        </ListItem>  */}
      </List>
    </>
  );
}
