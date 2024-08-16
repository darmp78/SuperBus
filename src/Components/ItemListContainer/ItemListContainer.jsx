import { Text, Flex } from '@chakra-ui/react'
import { MdWarning } from "react-icons/md";

const ItemListContainer = ({label}) =>{

    return(
        <>
        <Flex>
        <MdWarning size={25} />
        <Text ml={3}>{label}</Text>
        </Flex>
        </>
    )
};

export default ItemListContainer;