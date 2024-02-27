import { useState } from 'react'
import './App.css'
import CardList from './CardList'
import NavBar from './components/NavBar'



function App() {

  return (
    <div>
      <div>
        <NavBar />
        <hr className='bg-white w-[1220px] mt-5 '/>
        <CardList/>
      </div>
    </div>
  )
}

export default App
