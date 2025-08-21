import React from 'react';
import { useState } from 'react';   
import RASCanvas from '../components/Canvas/RASCanvas';
import RASInfo from '../components/Info/RASInfo';
import styles from '../styles/RAS.module.css';

function RASView() {

  return (
    <div className='view-container'>
      <RASInfo />
      {/* <RASCanvas /> */}
    </div>
  );
}

export default RASView;