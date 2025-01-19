import './App.css'
import Header from './Component/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Registration from './Component/Registration'
import Dashboard from './Component/Dashboard'
import Footer from './Component/Footer'
import About from './Component/About'
import Contact from './Component/Contact'
import Profile from './Component/Profile'

function App() {

  return (
    <>
     
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
    </>
  )
}

export default App
