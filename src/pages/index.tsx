import { Divider, Container, SimpleGrid, Heading } from '@chakra-ui/react';

import { Feature } from '../components/Feature';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Slider } from '../components/Slider';
import { CountrySlide } from '../components/CountrySlide';

export default function Home() {
  return (
    <>
      <Header />

      <Banner />
      
      <Container maxW="1240px" pt={["36px", "88px"]} px={["36px", "initial"]}>
        <SimpleGrid 
          flex="1" 
          gap="4" 
          minChildWidth={["100px", "158px"]}
          alignItems="center"
          as="aside"
          justifyContent="center"
        >
          <Feature title="vida noturna" image="cocktail.svg" />
          <Feature title="praia" image="surf.svg" />
          <Feature title="moderno" image="building.svg" />
          <Feature title="clássico" image="museum.svg" />
          <Feature title="e mais..." image="earth.svg" />
        </SimpleGrid>

        <Divider
          w={["60px", "90px"]} 
          mt={["36px", "20"]} 
          mb="52px" 
          variant="solid" 
          orientation="horizontal" 
          borderColor="gray.700" 
          borderBottomWidth="2px"
          mx="auto"
        />

        <Heading 
          mx="auto" 
          fontWeight="500" 
          fontStyle="normal" 
          as="h2" 
          fontSize={["xl", "4xl"]}
          textAlign="center"
          mb="52px"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>
      </Container>  

      <Container maxW="1240px" pb="10" px={["0", "initial"]}>
        <Slider>
          <CountrySlide title="Europa" description="O continente mais antigo." href="/continente/europa" image="/images/europe.png" />
        </Slider>
      </Container>
    </>
  )
}
