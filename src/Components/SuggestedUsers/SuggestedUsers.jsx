import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import { Link } from "@chakra-ui/react";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested Users for You
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.500" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name="Dan Adbrahmov" followers={250} avatar="https://bit.ly/dan-abramov"/>
      <SuggestedUser name='Ryan Florence' followers={1345} avatar="https://bit.ly/ryan-florence"/>
      <SuggestedUser name='Christain Nwamba' followers={1545} avatar="https://bit.ly/code-beast"/>
      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2024 Built By{" "}
        <Link
          href="https://resume.adithyasuresh.net/"
          taget="_blank"
          color="blue.500"
          fontSize={14}
          style={{ textDecoration: "none" }}
          _hover={{ color: "white" }}
          transition={"0.3s ease-in-out"}
        >
          Adithya Suresh
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
