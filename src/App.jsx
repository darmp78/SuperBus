import { useState } from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <NavBar />
      <Flex h={20} alignItems={'center'} pl={3}>
      <ItemListContainer label="Pagina en construccion"/>
      </Flex>
    </ChakraProvider>
  )
}

export default App
