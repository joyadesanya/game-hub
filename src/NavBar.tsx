import React from "react";
import { Image, HStack } from "@chakra-ui/react";
import logo from "./assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <button>Submit</button>
    </HStack>
  );
};

export default NavBar;
