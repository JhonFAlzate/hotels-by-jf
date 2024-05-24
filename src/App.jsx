
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HotelIdPage from './pages/HotelIdPage'

function App() {
  

  return (
   <div>
    <Routes>
      <Route path= '/' element = {<HomePage/>} />
      <Route path='/hotel/:id' element= {<HotelIdPage />} />
    </Routes>
   </div>
  )
}

export default App
