import { Box, Image, Flex, Text } from '@chakra-ui/react';

interface CityCardProps {
  image: string;
  city: string;
  country: string;
  countryFlag: string;
}

export function CityCard({ image, city, country, countryFlag }: CityCardProps) {
  return (
    <Box rounded={1}>
      <Box w="full" h="173px">
        <Image 
          src={image}
          objectFit="cover" 
          objectPosition="center" 
          roundedTop={1} 
          alt={city}
          w="full" 
          h="full" 
        />
      </Box>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={5}
        px={6}
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="#ffba0880"
        borderLeftWidth="1px"
        borderLeftStyle="solid"
        borderLeftColor="#ffba0880"
        borderRightWidth="1px"
        borderRightStyle="solid"
        borderRightColor="#ffba0880"
      >
        <Box>
          <Text
            fontWeight="600"
            fontSize="2xl"
            mb={3}
          >
            {city}
          </Text>
          <Text
            fontSize="md"
            color="gray.600"
          >
            {country}
          </Text>
        </Box>
        <Image 
          src={countryFlag} 
          alt={country} 
          rounded="full" 
          w="30" 
          h="30" 
          objectFit="cover" 
          objectPosition="center"
        />
      </Flex>
    </Box>
  )
}