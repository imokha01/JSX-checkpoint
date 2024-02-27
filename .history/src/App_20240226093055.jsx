import { useState } from 'react'
import './App.css'
import ProductName from './components/ProductName'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <ProductName/>
    </div>
  )
}

export default App
