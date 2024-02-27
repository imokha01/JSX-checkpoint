import { useState } from 'react'
import './App.css'
import ProductName from './components/ProductName'
import Image from './components/Image'
import Discription from './components/Description'
import Price from './components/Price'



function App() {

  return (
    <div>
      <div>
        <Image/>
        <ProductName />
        <Description/>
        <Price/>
      </div>
    </div>
  )
}

export default App
