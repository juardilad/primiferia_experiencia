import React from 'react';
import { useState } from 'react';   
import APSCanvas from '../components/Canvas/APSCanvas';
import APSInfo from '../components/Info/APSInfo';
import styles from '../styles/APS.module.css';
import ScrollToTopButton from "../components/ScrollToTopButton";

function APSView() {

  return (
    <div className='view-container'>
      <APSInfo />
      <APSCanvas />
      <ScrollToTopButton />
    </div>
  );
}

export default APSView;