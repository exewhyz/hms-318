import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Navbar from "./components/Navbar.jsx"
import Booking from './pages/Booking.jsx';
import Prescriptions from './pages/Prescriptions.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main className='h-screen p-8'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/appointment-booking' element={<Booking />} />
          <Route path='/prescriptions' element={<Prescriptions />} />
        </Routes>
      </main>
    </>
  )
}
