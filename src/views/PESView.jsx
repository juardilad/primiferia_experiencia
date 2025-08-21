import React from 'react';
import { useState } from 'react';   
import PESCanvas from '../components/Canvas/PESCanvas';
import PESInfo from '../components/Info/PESInfo';
import styles from '../styles/PES.module.css';

function PESView() {

  return (
    <div className='view-container'>
      <PESInfo />
      <PESCanvas />
    </div>
  );
}

export default PESView;