import './App.css'
import NavBar from './components/NavBar'
import CardList from '..CardList/src/components/CardL

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
