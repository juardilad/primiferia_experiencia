import React from 'react';
import { useState } from 'react';   
import CSCanvas from '../components/Canvas/CSCanvas';
import CSInfo from '../components/Info/CSInfo';
import styles from '../styles/CS.module.css';
import ScrollToTopButton from "../components/ScrollToTopButton";

function TEMSView() {

  return (
    <div className='view-container'>
      <CSInfo />
      <CSCanvas />
      <ScrollToTopButton />
    </div>
  );
}

export default TEMSView;