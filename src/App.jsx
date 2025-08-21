import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import TEMSView from './views/TEMSView'
import WIEView from './views/WIEView'
import PESView from './views/PESView'
import RASView from './views/RASView'
import EMBSView from './views/EMBSView'
import CSView from './views/CSView'
import EDSView from './views/EDSView'

function App() {

  return (
    
    <Router>
        <Routes>
          <Route path="/capitulos/tems" element={<TEMSView />} />
          <Route path="/capitulos/wie" element={<WIEView />} />
          <Route path="/capitulos/pes" element={<PESView />} />
          <Route path="/capitulos/ras" element={<RASView />} />
          <Route path="/capitulos/embs" element={<EMBSView />} />
          <Route path="/capitulos/computer_society" element={<CSView />} />
          <Route path="/capitulos/eds" element={<EDSView />} />
        </Routes>
    </Router>
      
  )
}

export default App
