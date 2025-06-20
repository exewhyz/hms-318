import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'

import App from './App.jsx'

import { AuthProvider } from './context/authContext.jsx';
import { DataProvider } from './context/dataContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
