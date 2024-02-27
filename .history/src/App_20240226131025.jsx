import { useState } from 'react'
import './App.css'
import ProductName from './components/ProductName'
import Image from './components/Image'
import Discription from './components/Description'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Image/>
        <ProductName />
        <Discription/>
        <Pr
      </div>
    </div>
  )
}

export default App
