import { useState } from 'react'
import './App.css'
import ProductName from './components/ProductName'
import Image from './components/Image'
import Discription from './components/Description'
import Price from './components/Price'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Image/>
        <ProductName />
        <Discription/>
        <Price/>
      </div>
    </div>
  )
}

export default App
