import { Flex, Image, Text } from "@chakra-ui/react";
const GoogleAuth = () => {


  return (
    <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
      <Image src="/google.png" w={5} alt="Google Logo" />
      <Text mx={5} color={"blue.500"}>
        Log In With Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
