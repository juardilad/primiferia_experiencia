import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import TEMSView from './views/TEMSView'

function App() {

  return (
    
    <Router>
        <Routes>
          <Route path="/tems" element={<TEMSView />} />
        </Routes>
    </Router>
      
  )
}

export default App
