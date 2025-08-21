import React from 'react';
import { useState } from 'react';   
import RamaCanvas from '../components/Canvas/RamaCanvas';
import RamaInfo from '../components/Info/RamaInfo';
import styles from '../styles/Rama.module.css';
import ScrollToTopButton from "../components/ScrollToTopButton";

function RamaView() {

  return (
    <div className='view-container'>
      <RamaInfo />
      <RamaCanvas />
      <ScrollToTopButton />
    </div>
  );
}

export default RamaView;