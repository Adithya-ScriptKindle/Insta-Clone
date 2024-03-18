import React from "react";
import { useState } from "react";
import {
  Box,
  VStack,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";
const AuthForm = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const handleClick = () => setShow(!show);
  const [inputs, setInputs] = useState({
    email: "",
    passowrd: "",
    confirmpassword: "",
  });

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={5} padding={5}>
        <VStack spacing={4}>
        <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />
          {isLogin ? <Login/> : <Signup/>}
          
          {/* -----OR text ----*/}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text max={1} color={"black"}>
              {" "}
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
         <GoogleAuth prefix={isLogin ? "Log In" : "Sign Up"}/>
        </VStack>
      </Box>
      {/* Switch between Log In and Sign Up */}
      <Box border={"1px solid gray"} borderRadius={5} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </Box>
          <Box
            onClick={() => setLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? " Sign Up" : " Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
