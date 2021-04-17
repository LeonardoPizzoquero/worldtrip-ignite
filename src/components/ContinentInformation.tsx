import { Flex, Text, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons'

interface ContinentInformationProps {
  title: string;
  subTitle: string;
  tipMessage?: string;
}

export function ContinentInformation({ title, subTitle, tipMessage }: ContinentInformationProps) {
  return (
    <Flex 
      position="relative" 
      flexDir="column" 
      alignItems={["flex-start", "center"]}
      justifyContent="center"
    >
      <Text  
        fontWeight="600"
        fontSize={["2xl", "5xl"]}
        as="strong"
        color="highlight"
      >
        {title}
      </Text>
      <Text 
        display="flex"
        alignItems={["flex-start", "center"]}
        justifyItems="center"
        fontWeight="400"
        fontSize={["lg", "2xl"]}
        as="span"
      >
        {subTitle}
      </Text>

      {!!tipMessage && (
        <Tooltip 
          label={tipMessage} 
          aria-label={tipMessage}
          hasArrow
        >
          <InfoOutlineIcon 
            display={["none", "block"]}
            position="absolute"
            bottom="11px"
            right="-24px"
            ml="5px" 
            w={["10px", 4]} 
            h={["10px", 4]}  
            color="rgba(153, 153, 153, 0.5)" 
          />
        </Tooltip>
      )}
    </Flex>
  )
}