import React from 'react';
import { useState } from 'react';   
import TEMSCanvas from '../components/Canvas/TEMSCanvas';
import TEMSInfo from '../components/Info/TEMSInfo';
import styles from '../styles/TEMS.module.css';
import ScrollToTopButton from "../components/ScrollToTopButton";

function TEMSView() {

  return (
    <div className='view-container'>
      <TEMSInfo />
      <TEMSCanvas /> 
      <ScrollToTopButton />
    </div>
  );
}

export default TEMSView;