import React from 'react';
import { Flex, Heading, Text, Icon} from '@chakra-ui/react';
import { PiShootingStar } from "react-icons/pi";
import { RiUserStarLine } from "react-icons/ri";
import { TbSunset } from "react-icons/tb";

import Button from './button';

const DreamHome = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt="24">
      <Heading
        as="h3"
        mb="20"
        fontSize={['2xl', '2xl', '3xl', '3xl', '3xl']}
        textAlign="center"
        marginX="auto"
      >
        All the more reasons to get your dream home interiors now
      </Heading>
      <Flex
        width="90%"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Icon 
            as={PiShootingStar} 
            color="green.300"          
            width="50px"
            height="50px"
            mr="18px"
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Free online consultation</Text>
            <Text fontSize="sm">
              Talk to our designers online and start planning your interiors
              from the comfort of your home.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Icon 
            as={RiUserStarLine} 
            color="green.300"          
            width="50px"
            height="50px"
            mr="18px"
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Pay just 5% to book</Text>
            <Text fontSize="sm">
              We’ve dropped our booking fees. Now book your projects by paying
              just 5% instead 10%.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Icon 
            as={TbSunset} 
            color="green.300"          
            width="50px"
            height="50px"
            mr="18px"
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Hassle-free cancellation</Text>
            <Text fontSize="sm">
              Get 100% refund on cancellations done within 15 days of booking.
              Valid till 30th June, 2020.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Button>Consult online now</Button>
    </Flex>
  )
}
export default DreamHome;
