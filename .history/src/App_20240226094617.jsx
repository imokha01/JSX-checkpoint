import { useState } from 'react'
import './App.css'
import ProductName from './components/ProductName'
import Image from './components/Image'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Image/>
        <ProductName />
        <Dis
      </div>
    </div>
  )
}

export default App
