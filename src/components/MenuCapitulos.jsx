import React from 'react';
import { useState } from 'react';   
import { Link } from "react-router-dom";
import styles from "../styles/Menu.module.css";

function MenuCapitulos() {

  return (
    <div className={styles.menu_container}>
        <div className={styles.menu_columna_inicial}>
            <Link to='/capitulos/tems' className={styles.link}>TEMS <img src='/icons/TEMS.svg' className={styles.logo}></img></Link>
            <Link to='/capitulos/wie' className={styles.link}>WIE <img src='/icons/WIE.svg' className={styles.logo}></img></Link>
            <Link to='/capitulos/ras' className={styles.link}>RAS <img src='/icons/RAS.svg' className={styles.logo}></img></Link>
        </div>
        <div className={styles.menu_columna}>
            <Link to='/capitulos/embs' className={styles.link}>EMBS <img src='/icons/EMBS.svg' className={styles.logo}></img></Link>
            <Link to='/capitulos/eds' className={styles.link}>EDS <img src='/icons/EDS.svg' className={styles.logo}></img></Link>
             <Link to='/capitulos/computer_society' className={styles.link}>CS <img src='/icons/Computer.svg' className={styles.logo}></img></Link>
        </div>
        <div className={styles.menu_columna}>
            <Link to='/capitulos/pes' className={styles.link}>PES <img src='/icons/PES.svg' className={styles.logo}></img></Link>
            <Link to='/capitulos/aps' className={styles.link}>APS <img src='/icons/APS.svg' className={styles.logo}></img></Link>
            <Link to='/capitulos/aess' className={styles.link}>AESS <img src='/icons/AESS.svg' className={styles.logo}></img></Link>
        </div>
    </div>
  );
}

export default MenuCapitulos;