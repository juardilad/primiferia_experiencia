import React from 'react';
import { useState } from 'react';   
import EDSCanvas from '../components/Canvas/EDSCanvas';
import EDSInfo from '../components/Info/EDSInfo';
import styles from '../styles/EDS.module.css';

function EDSView() {

  return (
    <div className='view-container'>
      <EDSInfo />
      {/* <EDSCanvas /> */}
    </div>
  );
}

export default EDSView;