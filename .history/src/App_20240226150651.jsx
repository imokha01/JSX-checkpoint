import { useState } from 'react'
import './App.css'
import CardList from './CardList'
import NavBar from './components/NavBar'



function App() {

  return (
    <div>
      <div>
        <NavBar />
        <hr className='bg-white w-[120px] '/>
        <CardList/>
      </div>
    </div>
  )
}

export default App
