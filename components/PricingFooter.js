import React from "react";
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
  Container,
} from "@chakra-ui/react";
import { icon1 } from "../data";
import { icon2 } from "../data";
import { icon3 } from "../data";

import { footerData } from "../data";

const PricingFooter = () => {
  return (
    <Center>
      <Box
        mt={10}
        width={"1000px"}
        // h={"200px"}
        // border="2px solid red"
        color={"black"}
        //   align={"center"}
      >
        <Flex flexDirection={["column", "row"]}>
          {footerData.map((item) => (
            <Box
              display={"flex"}
              alignItems={"center"}
              mx={5}
              mt={["20px", "0px"]}
            >
              <Image mr={4} src={item.icon} w={6} />
              <Text fontSize={"18px"} fontWeight={700}>
                {item.text}
              </Text>
            </Box>
          ))}

          {/* <Box
            display={"flex"}
            alignItems={"center"}
            mx={5}
            mt={["20px", "0px"]}
          >
            <Image mr={4} src={icon1} w={6} />
            <Text fontSize={"18px"} fontWeight={700}>
              30 days money back Guarantee
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mx={5}
            mt={["20px", "0px"]}
          >
            <Image mr={4} src={icon2} w={6} />
            <Text fontSize={"18px"} fontWeight={700}>
              No setup fees 100% hassle-free
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mx={5}
            mt={["20px", "0px"]}
          >
            <Image mr={4} src={icon3} w={6} />
            <Text fontSize={"18px"} fontWeight={700}>
              No monthly subscription Pay once and for all
            </Text>
          </Box> */}
        </Flex>
      </Box>
    </Center>
  );
};

export default PricingFooter;
