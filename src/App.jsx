import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Navbar from "./components/Navbar.jsx"
import Booking from './pages/Booking.jsx';
import Prescriptions from './pages/Prescriptions.jsx';
import { useAuth } from './context/authContext.jsx';

export default function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Navbar />
      <main className='h-screen p-8'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/'
            element={isAuthenticated ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path='/appointment-booking'
            element={isAuthenticated ? <Booking /> : <Navigate to={"/login"} />}
          />
          <Route
            path='/prescriptions'
            element={isAuthenticated ? <Prescriptions /> : <Navigate to={"/login"} />}
          />
        </Routes>
      </main> :
    </>
  )
}
