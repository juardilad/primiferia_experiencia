import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import TEMSView from './views/TEMSView'
import WIEView from './views/WIEView'

function App() {

  return (
    
    <Router>
        <Routes>
          <Route path="/tems" element={<TEMSView />} />
          <Route path="/wie" element={<WIEView />} />
        </Routes>
    </Router>
      
  )
}

export default App
