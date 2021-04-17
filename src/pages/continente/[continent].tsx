import { Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentInformation } from "../../components/ContinentInformation";
import { CityCard } from "../../components/CityCard";

export default function Continent() {
  return (
    <>
      <Header />

      <Flex 
        bgImage="url('/images/europe_background.png')" 
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        h={["150px", "500px"]}
        w="full" 
        pb={["0", "60px"]}
        alignItems={["center", "flex-end"]}
        justify={["center", "flex-start"]}
      >
        <Container maxWidth="1240px">
          <Heading textAlign={["center", "left"]} as="h1" fontSize="5xl" color="gray.200">
            Europa
          </Heading>
        </Container>
      </Flex>

      <Container as="main" maxWidth="1240px" pb="35px" mt={[6, 20]}>
        <Grid as="section" templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
          <Text textAlign="justify" fontSize={["sm", "2xl"]}>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Grid justifyItems={["flex-start", "center"]} alignItems="center" templateColumns="repeat(3, 1fr)" gap={[1, 6]}>
            <ContinentInformation title="50" subTitle="países" />
            <ContinentInformation title="60" subTitle="línguas" />
            <ContinentInformation title="27" subTitle="cidades +100" tipMessage="254" />
          </Grid>
        </Grid>
        <Heading fontSize="4xl" mt={20}>
          Cidades +100
        </Heading>
        <Grid 
          mt={10}
          as="section"
          justifyItems="center" 
          alignItems="center" 
          templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
          gap="45px"
        >
          <CityCard 
            city="Londres" 
            country="Reino unido" 
            image="/images/london.png" 
            countryFlag="/images/london_flag.png" 
          />
        </Grid>
      </Container>
    </>
  )
}