import React from 'react';
import { useState } from 'react';   
import WIECanvas from '../components/Canvas/WIECanvas';
import WIEInfo from '../components/Info/WIEInfo';
import styles from '../styles/WIE.module.css';
import ScrollToTopButton from "../components/ScrollToTopButton";

function WIEView() {

  return (
    <div className='view-container'>
      <WIEInfo />
      <WIECanvas />
      <ScrollToTopButton />
    </div>
  );
}

export default WIEView;