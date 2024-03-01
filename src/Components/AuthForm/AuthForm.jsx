import React from "react";
import { useState } from "react";
import {
  Box,
  VStack,
  Image,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const [inputs, setInputs] = useState({
    email: "",
    passowrd: "",
    confirmpassword: "",
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.passowrd) {
        alert("Please fill all the fields");
        return 
    }
    navigate("/");
  };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={5} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={24}
            cursor={"pointer"}
            alt="FakeGram"
          />
          <Input
            placeholder="Enter email address"
            fontSize={14}
            cursor={"pointer"}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs,email : e.target.value })}
          ></Input>
          <InputGroup size="md">
            <Input
              fontSize={14}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              cursor={"pointer"}
              value={inputs.passowrd}
              onChange={(e) =>
                setInputs({ ...inputs,passowrd : e.target.value })
              }
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!isLogin ? (
            <InputGroup size="md">
              <Input
                fontSize={14}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter confirm password"
                cursor={"pointer"}
                value={inputs.confirmpassword}
                onChange={(e) =>
                  setInputs({ ...inputs,confirmpassword : e.target.value })
                }
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          ) : null}
          ;
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log In" : " Sign Up"}
          </Button>
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
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="Google Logo" />
            <Text mx={5} color={"blue.500"}>
              Log In With Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      {/* Switch between Log In and Sign Up */}
      <Box border={"1px solid gray"} borderRadius={5} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
