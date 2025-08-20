import React from 'react';
import { useState } from 'react';   
import LogoCanvas from '../components/LogoCanvas';
import TEMSInfo from '../components/TEMSInfo';
import styles from '../styles/TEMS.module.css';

function TEMSView() {

  return (
    <div className='view-container'>
      <TEMSInfo />
      <LogoCanvas />
    </div>
  );
}

export default TEMSView;