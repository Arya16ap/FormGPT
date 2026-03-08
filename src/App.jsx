import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './screens/home';
import DigiLocker from './screens/digilocker';
import Form from './screens/form';

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digilocker" element={<DigiLocker />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default App
