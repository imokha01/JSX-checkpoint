import './App.css'
import CardList from './components/CardList'
import NavBar from './components/CardList'



function App() {
  return (
    <div>
      <div>
        <NavBar/>
        <hr className='bg-white w-[1220px] mt-5 '/>
        <CardList/>
      </div>
    </div>
  )
}

export default App
