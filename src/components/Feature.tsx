import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  image: string;
}

export function Feature({ title, image }: FeatureProps) {
  return (
    <Flex flexDir={["row", "column"]} justify="center" align="center">
      <Image display={["none", "block"]} maxW="75px" mb="6" height="auto" src={`/images/${image}`} alt={title} />
      <Box display={["block", "none"]} mr="2" w="2" h="2" bg="highlight" rounded="full" />
      <Text fontSize={["lg", "2xl"]}>
        {title}
      </Text>
    </Flex>
  )
}