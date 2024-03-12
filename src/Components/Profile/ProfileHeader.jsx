import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <>
      <Flex
        py={10}
        gap={{ base: 2, sm: 10 }}
        direction={{ base: "column", sm: "row" }}
      >
        <AvatarGroup
          size={{ base: "lg", md: "xl" }}
          justifySelf={"center"}
          mx={"auto"}
          alignSelf={"flex-start"}
        >
          <Avatar
            src="/profilepic.png"
            name="Adithya Suresh "
            alt="Adithya Suresh Pic"
          />
        </AvatarGroup>

        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            gap={4}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }}>Adithya Suresh</Text>
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.300" }}
                size={{ base: "xs", md: "sm" }}
              >
                Edit Profile
              </Button>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
            <Text fontSize={{base:"xs",md:"sm"}}>
              <Text as="span" fontWeight={"bold"} mr={1}>
                4{" "}
              </Text>
              Posts
            </Text>
            <Text fontSize={{base:"xs",md:"sm"}}>
              <Text as="span" fontWeight={"bold"} mr={1}>
                149
              </Text>
              Followers
            </Text>
            <Text fontSize={{base:"xs",md:"sm"}}>
              <Text as="span" fontWeight={"bold"} mr={1}>
                500
              </Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
            ஆதித்யா சுரேஷ்
            </Text>
          </Flex>
          <Text fontSize={"sm"}>EVERYMAN DIES NOT EVERYMAN LIVES</Text>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileHeader;
