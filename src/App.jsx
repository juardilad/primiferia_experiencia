import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import TEMSView from './views/TEMSView'
import WIEView from './views/WIEView'
import PESView from './views/PESView'
import RASView from './views/RASView'

function App() {

  return (
    
    <Router>
        <Routes>
          <Route path="/capitulos/tems" element={<TEMSView />} />
          <Route path="/capitulos/wie" element={<WIEView />} />
          <Route path="/capitulos/pes" element={<PESView />} />
          <Route path="/capitulos/ras" element={<RASView />} />
        </Routes>
    </Router>
      
  )
}

export default App
