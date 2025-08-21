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
import APSView from './views/APSView'
import AESSView from './views/AESSView'
import MenuCapitulosView from './views/MenuCapitulosView'
import EventosView from './views/EventosView'
import RamaView from './views/RamaView'

function App() {

  return (
    
        <Routes>
          <Route path="/" element={<RamaView />} />
          <Route path="/capitulos" element={<MenuCapitulosView />} />
          <Route path="/capitulos/tems" element={<TEMSView />} />
          <Route path="/capitulos/wie" element={<WIEView />} />
          <Route path="/capitulos/pes" element={<PESView />} />
          <Route path="/capitulos/ras" element={<RASView />} />
          <Route path="/capitulos/embs" element={<EMBSView />} />
          <Route path="/capitulos/computer_society" element={<CSView />} />
          <Route path="/capitulos/eds" element={<EDSView />} />
          <Route path="/capitulos/aps" element={<APSView />} />
          <Route path="/capitulos/aess" element={<AESSView />} />
          <Route path="/eventos" element={<EventosView />} />
        </Routes>
      
  )
}

export default App
