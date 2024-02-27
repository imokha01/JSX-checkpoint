import { useState } from 'react'
import './App.css'
import CardList from './CardList'
import NavBar from './components/NavBar'



function App() {

  return (
    <div>
      <div>
        <NavBar />
        <br className='bg-white w-9 h-9'/>
        <CardList/>
      </div>
    </div>
  )
}

export default App
