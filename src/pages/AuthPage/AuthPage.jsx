import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../Components/AuthForm/AuthForm";
const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"contianer.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/*Left hand side*/}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone Image" />
          </Box>
          {/*Right hand side*/}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            
            <Box textAlign={"center"} >Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} alt="Playstore Logo" />
              <Image src="/microsoft.png" h={10} alt="Microsoft Logo" />
              <Image src="/app-store-logo.png" h={10} alt="Apple Logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
