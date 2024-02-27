import { useState } from 'react'
import './App.css'
import CardList from './CardList'
import Navbar from './components/NavBar'



function App() {

  return (
    <div>
      <div>
        <NavBar/>
        <CardList/>
      </div>
    </div>
  )
}

export default App
