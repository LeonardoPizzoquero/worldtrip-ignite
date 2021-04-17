import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Flex 
      w="full"
      as="header" 
      p="7" 
      bg="white" 
      align="center" 
      justify="center"
    >
      <Link href="/">
        <ChakraLink>
          <Image maxW="full" h="auto" src="/images/logo.svg" alt="worldtrip" />
        </ChakraLink>
      </Link>
    </Flex>
  )
}
