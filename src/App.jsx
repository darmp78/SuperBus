import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  )
}

export default App
