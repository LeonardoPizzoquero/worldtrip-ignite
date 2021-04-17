import { Box, Container, Heading, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box w="full" bgPosition="bottom" bgSize="cover" bgImage="url(/images/background.png)" bgRepeat="no-repeat">
      <Container maxW="1240px" px="4" py={["16", "5"]}>
        <SimpleGrid columns={[1, 2]} spacing={["16px", "16px", "16px", "100px",  "205px"]} alignItems="center">
          <Box>
            <Heading 
              fontWeight="500" 
              fontStyle="normal" 
              flex="1" as="h1"  
              fontSize={["xl", "4xl"]}
              color="white"
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>

            <Text 
              mt="5" 
              fontWeight="400" 
              fontSize={["sm", "md"]} 
              color="gray.500"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Box>
     
          {isWideVersion && (
            <Image 
              transform={["auto", "rotate(3deg) translateY(60px)"]}
              maxW="full" 
              height="auto" 
              src="/images/airplane.svg" 
              alt="5 Continentes, infinitas possibilidades." 
            />
          )}
        </SimpleGrid>
      </Container>
    </Box>
  )
}