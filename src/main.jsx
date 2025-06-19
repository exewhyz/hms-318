import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Navbar from "./components/Navbar.jsx"
import Booking from './pages/Booking.jsx';
import Prescriptions from './pages/Prescriptions.jsx';

import { AuthProvider } from './context/authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <main className='h-screen p-8'>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/appointment-booking' element={<Booking />} />
            <Route path='/prescriptions' element={<Prescriptions />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
