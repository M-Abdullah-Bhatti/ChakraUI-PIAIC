import React from "react";
import { Inter } from "@next/font/google";
import { MdCheckCircle } from "react-icons/md";
// import { icon } from "/assets/Vector.png";
import { benefitCards } from "../data";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Spacer,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Wrap,
  WrapItem,
  Center,
  Image,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const PricingCard = () => {
  return (
    <Center>
      <Box
        mt={10}
        mx={"auto"}
        //   w={"994px"}
        //   h={"336px"}
        bg={"white"}
        // border="2px solid red"
        borderRadius={"10px"}
        color="black"
      >
        <Flex flexDirection={["column", "row"]}>
          {/* first card */}
          <Card
            align={"center"}
            // border="2px solid red"
            // flex={["1", "0.4"]}
            w={["100%", "350px"]}
            bg={"#f3f3f3"}
            p={5}

            // py={"5"}
          >
            <CardBody>
              <Heading fontSize={"24px"} fontWeight={"800"} align={"center"}>
                Premium PRO
              </Heading>
              <Heading size="3xl" my={"4"} fontWeight={"800"} align={"center"}>
                $329
              </Heading>
              <Text fontWeight={500} fontSize={"18px"} align={"center"}>
                billed just once
              </Text>
              <Button
                ml={3}
                mt={5}
                bg="#805AD5"
                color={"white"}
                // mx={"auto"}
                borderRadius={"5px"}
                fontSize={"16px"}
                height={"45px"}
                width={"220px"}
              >
                Get Started
              </Button>
            </CardBody>
          </Card>
          {/* second card */}

          <Card
            align={"center"}
            // border="2px solid red"
            // flex={["1", "0.4"]}
            // w={["100%", "unset"]}
            bg={"white"}
            color="#2D3748"
            p={5}
            // py={"5"}
          >
            <CardBody>
              <Text fontWeight={400} fontSize={"18px"}>
                Access these features when you get this pricing package for your
                business.
              </Text>

              {/* {boundDiscount.map((item) => (
            <Bond title={item.title} rate={item.rate} />
          ))} */}

              {benefitCards.map((item) => (
                <Flex align={"center"} pt={4}>
                  <MdCheckCircle color="#805AD5" fontSize={"20px"} />
                  <Text pl={3} fontSize={"18px"}>
                    {item.text}
                  </Text>
                </Flex>
              ))}

              {/* <Flex align={"center"} pt={4}>
                <MdCheckCircle color="#805AD5" fontSize={"20px"} />
                <Text pl={3} fontSize={"18px"}>
                  International calling and messaging API
                </Text>
              </Flex>
              <Flex align={"center"} pt={4}>
                <MdCheckCircle color="#805AD5" fontSize={"20px"} />
                <Text pl={3} fontSize={"18px"}>
                  Additional phone numbers
                </Text>
              </Flex>
              <Flex align={"center"} pt={4}>
                <MdCheckCircle color="#805AD5" fontSize={"20px"} />
                <Text pl={3} fontSize={"18px"}>
                  Additional phone numbers
                </Text>
              </Flex>
              <Flex align={"center"} pt={4}>
                <MdCheckCircle color="#805AD5" fontSize={"20px"} />
                <Text pl={3} fontSize={"18px"}>
                  24/7 support and consulting
                </Text>
              </Flex> */}
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </Center>
  );
};

export default PricingCard;
