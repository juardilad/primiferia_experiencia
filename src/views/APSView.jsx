import React from 'react';
import { useState } from 'react';   
import APSCanvas from '../components/Canvas/APSCanvas';
import APSInfo from '../components/Info/APSInfo';
import styles from '../styles/APS.module.css';

function APSView() {

  return (
    <div className='view-container'>
      <APSInfo />
      {/* <APSCanvas /> */}
    </div>
  );
}

export default APSView;