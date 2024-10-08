'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Badge,

} from '@chakra-ui/react';
import {CartIcon} from "./icon/CartIcon";

import { HamburgerIcon, CloseIcon, AddIcon, SearchIcon, } from '@chakra-ui/icons'

import { NavLink} from './NavLink.jsx';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext.jsx';

// interface Props {
//   children: React.ReactNode
// }

const Links = ['Dashboard', 'Projects', 'Team']

export default function Header() {  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {cart} = useContext (CartContext);
  // const[cartQty, setCartQty] = useState(0);

  // useEffect(()=>{
  //   setCartQty(cart.products.reduce((a,b) => a + b.qty, 0));
  // }, [cart]);

  return (
    <>
      <Box as="header" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>

<Box pos="relative" me={4}>
            <IconButton
            p={2}
              colorScheme='teal'
              aria-label='Search database'
              icon={<CartIcon/>}
            />

            <Badge colorScheme="green" pos="absolute" top={-2} right={-2} >
            {cart.totalQty}
            </Badge>
</Box>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

     
    </>
  )
}