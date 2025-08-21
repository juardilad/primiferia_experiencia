import React from 'react';
import { useState } from 'react';   
import AESSCanvas from '../components/Canvas/AESSCanvas';
import AESSInfo from '../components/Info/AESSInfo';
import styles from '../styles/AESS.module.css';

function AESSView() {

  return (
    <div className='view-container'>
      <AESSInfo />
      {/* <AESSCanvas /> */}
    </div>
  );
}

export default AESSView;