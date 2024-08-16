import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaCartShopping } from "react-icons/fa6";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box> <Text as='b'
            fontSize='3xl'>
            The Super Bus
          </Text>
            <Menu>
              <MenuButton as={Button} colorScheme='pink' ml={3} mb={2} variant='ghost'>
                Inicio
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton as={Button} colorScheme='pink' ml={0} mb={2} variant='ghost'>
                Rutas & Mapas
              </MenuButton>
              <MenuList>
                <MenuItem>Rutas</MenuItem>
                <MenuItem>Sitios de Interes</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} colorScheme='pink' ml={0} mb={2} variant='ghost'>
                Comprar Pasajes
              </MenuButton>
              <MenuList>
                <MenuItem>Tours</MenuItem>
                <MenuItem>Empresas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} colorScheme='pink' ml={3} mb={2} variant='ghost'>
                Eventos
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton as={Button} colorScheme='pink' ml={3} mb={2} variant='ghost'>
                Ayuda
              </MenuButton>
            </Menu>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <CartWidget />
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
};

export default NavBar;