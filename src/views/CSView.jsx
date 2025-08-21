import React from 'react';
import { useState } from 'react';   
import CSCanvas from '../components/Canvas/CSCanvas';
import CSInfo from '../components/Info/CSInfo';
import styles from '../styles/CS.module.css';

function CSView() {

  return (
    <div className='view-container'>
      <CSInfo />
      <CSCanvas />
    </div>
  );
}

export default CSView;