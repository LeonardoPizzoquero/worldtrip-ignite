import Link from 'next/link';
import { Text, Link as ChakraLink, Heading } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react';

export function CountrySlide({ href, title, description, image }) {
  return (
    <SwiperSlide>
      <Link href={href}>
        <ChakraLink 
          display="flex"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          bgImage={`url(${image})`}
          align="center" 
          justifyContent="center" 
          flexDir="column" 
          minH={["250px", "450px"]}
          textDecor="none"
          _hover={{
            textDecoration: "none"
          }}
        >
          <Heading 
            fontSize={["2xl", "5xl"]}
            color="gray.200"
            fontWeight="bold" 
            mb="4" 
          >
            {title}
          </Heading>
          <Text 
            fontSize={["sm", "2xl"]}
            color="gray.500" 
            fontWeight="bold"
          >
            {description}
          </Text>
        </ChakraLink>
      </Link>
    </SwiperSlide>
  );
}