import React from 'react';
import { useState } from 'react';   
import WIECanvas from '../components/WIECanvas';
import WIEInfo from '../components/WIEInfo';
import styles from '../styles/WIE.module.css';

function WIEView() {

  return (
    <div className='view-container'>
      <WIEInfo />
      <WIECanvas />
    </div>
  );
}

export default WIEView;