import React from 'react';
import { useState } from 'react';   
import { Link } from "react-router-dom";
import styles from "../styles/Menu.module.css";

function MenuCapitulos() {

  return (
    <div className={styles.menu_container}>
        <div className={styles.menu_columna_inicial}>
            <Link to='/capitulos/tems' className={styles.link}>TEMS <img src={import.meta.env.BASE_URL +'/icons/TEMS.svg'} className={styles.logo}></img></Link>
            <Link to='/capitulos/wie' className={styles.link}>WIE <img src={import.meta.env.BASE_URL +'/icons/WIE.svg'} className={styles.logo}></img></Link>
            <Link to='/capitulos/ras' className={styles.link}>RAS <img src={import.meta.env.BASE_URL +'/icons/RAS.svg'} className={styles.logo}></img></Link>
        </div>
        <div className={styles.menu_columna}>
            <Link to='/capitulos/embs' className={styles.link}>EMBS <img src={import.meta.env.BASE_URL +'/icons/EMBS.svg'} className={styles.logo}></img></Link>
            <Link to='/capitulos/eds' className={styles.link}>EDS <img src={import.meta.env.BASE_URL +'/icons/EDS.svg'} className={styles.logo}></img></Link>
             <Link to='/capitulos/computer_society' className={styles.link}>CS <img src={import.meta.env.BASE_URL +'/icons/Computer.svg'} className={styles.logo}></img></Link>
        </div>
        <div className={styles.menu_columna}>
            <Link to='/capitulos/pes' className={styles.link}>PES <img src={import.meta.env.BASE_URL +'/icons/PES.svg'} className={styles.logo}></img></Link>
            <Link to='/capitulos/aps' className={styles.link}>APS <img src={import.meta.env.BASE_URL +'/icons/APS.svg'} className={styles.logo}></img></Link>
            <Link to='/capitulos/aess' className={styles.link}>AESS <img src={import.meta.env.BASE_URL +'/icons/AESS.svg'} className={styles.logo}></img></Link>
        </div>
    </div>
  );
}

export default MenuCapitulos;