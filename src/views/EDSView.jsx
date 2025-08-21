import React from 'react';
import { useState } from 'react';   
import EDSCanvas from '../components/Canvas/EDSCanvas';
import EDSInfo from '../components/Info/EDSInfo';
import styles from '../styles/EDS.module.css';
import ScrollToTopButton from "../components/ScrollToTopButton";

function EDSView() {

  return (
    <div className='view-container'>
      <EDSInfo />
      <EDSCanvas />
      <ScrollToTopButton />
    </div>
  );
}

export default EDSView;