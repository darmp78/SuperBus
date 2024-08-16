import {
    Text,
    Button,
    useColorMode
  } from '@chakra-ui/react'
  import { FaCartShopping } from "react-icons/fa6";


const CartWidget = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Button onClick={toggleColorMode}>
                 <FaCartShopping size={30}/><Text ml={1}>(0)</Text>
            </Button>
        </>
    )

};

export default CartWidget