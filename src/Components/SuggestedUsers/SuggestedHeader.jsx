import { Avatar, Box, Flex, Text, textDecoration } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar name="Adithya Suresh" size={"lg"} src="\profilepic.png" />
          <Box fontSize={14} fontWeight={"bold"}>
            Adithya Suresh
          </Box>
        </Flex>
        <Link to={"/auth"}>
          <Text fontSize={14} fontWeight={"bold"} color={"blue.400"} cursor={"pointer"} _hover={{color:"white"}} transition={"0.3s"}>
            Log Out
          </Text>
        </Link>
      </Flex>
    </>
  );
};

export default SuggestedHeader;
