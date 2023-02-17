import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Heading, Text, Flex, Spacer } from "@chakra-ui/react";
import PricingCard from "../components/PricingCard";
import PricingFooter from "../components/PricingFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box bg="#6B46C1" w="100%" color="white" height={"320px"}>
      <Center color="white" pt={10}>
        <Flex direction={{ base: "column" }}>
          <Heading mt={5} fontFamily={inter} pl={"50px"} alignItems={"center"}>
            Simple Pricing for your Business
          </Heading>
          <Spacer />
          <Text
            mt={5}
            fonStize={"30px"}
            align="center"
            fontWeight={"200"}
            color={"#F7FAFC"}
            opacity={"0.9"}
            pl={"40px"}
          >
            Plans that are carefully crafted to suit your business.
          </Text>
        </Flex>
      </Center>
      <PricingCard />
      <PricingFooter />
    </Box>
  );
}
