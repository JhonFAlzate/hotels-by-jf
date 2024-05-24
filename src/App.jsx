
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HotelIdPage from './pages/HotelIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import GeneralHeader from './components/Shared/GeneralHeader'

function App() {
  

  return (
   <div>

    <GeneralHeader />

    <Routes>

      <Route path= '/' element = {<HomePage/>} />
      <Route path='/hotel/:id' element= {<HotelIdPage />} />
      <Route path= '/register' element = {<RegisterPage />} />
      <Route path='/login' element = {<LoginPage />} />

    </Routes>

   </div>
  )
}

export default App
