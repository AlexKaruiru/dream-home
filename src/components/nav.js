import React, { useState } from 'react';
import { Box, Flex, Link, Button, Stack, Icon } from '@chakra-ui/react';
import { HiMenu } from "react-icons/hi";

import Logo from './logo';

const MenuItems = ({ children, link }) => (
  <Link
    href={link}
    mt={[4, 4, 0, 0]}
    mr={'36px'}
    display="block"
    fontWeight="medium"
    fontSize="md"
  >
    {children}
  </Link>
);

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      zIndex="999"
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      paddingY="1.5em"
      bg="rgba(255,255,255,.8)"
      color="black"
      textTransform="uppercase"
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>

      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
        <Icon as={HiMenu} color="green.300" w='6' h='10' mr={4}></Icon>
      </Box>

      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex',
        ]}
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', 'auto', 'auto']}
        textAlign="center"
        alignItems="center"
      >
        <MenuItems>Home</MenuItems>
        <MenuItems>About</MenuItems>
        <MenuItems>Services</MenuItems>
        <MenuItems>Gallery</MenuItems>
        <MenuItems>Blog</MenuItems>
        <MenuItems>Contact</MenuItems>
        <Stack spacing={0} direction="row" align="center" marginLeft={20}>
          <Button variantColor="yellow">Create an account</Button>
          <Button variantColor="yellow" variant="ghost">
            Sign in
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Nav;
