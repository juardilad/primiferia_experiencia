import React from 'react';
import { useState } from 'react';   
import EMBSCanvas from '../components/Canvas/EMBSCanvas';
import EMBSInfo from '../components/Info/EMBSInfo';
import styles from '../styles/EMBS.module.css';
import ScrollToTopButton from "../components/ScrollToTopButton";

function EMBSView() {

  return (
    <div className='view-container'>
      <EMBSInfo />
      <EMBSCanvas />
      <ScrollToTopButton />
    </div>
  );
}

export default EMBSView;