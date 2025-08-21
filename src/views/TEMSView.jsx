import React from 'react';
import { useState } from 'react';   
import TEMSCanvas from '../components/Canvas/TEMSCanvas';
import TEMSInfo from '../components/Info/TEMSInfo';
import styles from '../styles/TEMS.module.css';

function TEMSView() {

  return (
    <div className='view-container'>
      <TEMSInfo />
      {/* <TEMSCanvas /> */}
    </div>
  );
}

export default TEMSView;