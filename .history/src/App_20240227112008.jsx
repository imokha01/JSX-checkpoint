import './App.css'
import NavBar from './components/NavBar'
import CardList from '../src/components/CardList'



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
