import React from 'react';
import { useState } from 'react'; 
import styles from '../../styles/RAS.module.css';
import { Link } from "react-router-dom";

function RASInfo() {

  return (
    <div className={styles.info_container}>
        <div className={styles.header_info}>
            <p>Capitulos</p>
            <div></div>
            <a 
                href="https://www.instagram.com/ceimtun_ras/" 
                className={styles.ig_info}
            >
                @ceimtun_ras
                <img src='/icons/instagram.svg' alt="Instagram icon" className={styles.ig_icon}></img>
            </a>
        </div>
        <div className={styles.body_info}>
            <p className={styles.title}>RAS</p>
            <p className={styles.subtitle}>Robotics and Automation Society</p>
            <p className={styles.text}>Nuestro propósito es crear y difundir conocimiento, 
                abriendo espacios para que cualquier persona pueda acercarse a la tecnología a 
                través de talleres, charlas y actividades prácticas abiertas al público. 
                Dentro del grupo, desarrollamos proyectos que une diferentes ramas de 
                ingeniería: desde robots de competencia como minisumos y seguidores de línea, 
                hasta robots de exploración en terrenos difíciles como el cuadrúpedo Enigma o 
                el robot de exploración Rover, además de ello, trabajamos en diferentes 
                proyectos que buscan despertar este amor por la robótica. </p>
            <p className={styles.list_title}>Proyectos:</p>
            <Link to="/eventos">
                <p className={styles.text}>- UNRobot (Ver eventos)</p>
            </Link>
            <p className={styles.text}>- Minisumo </p>
            <p className={styles.text}>- Velocista </p>
            <p className={styles.text}>- CNC </p>
            <p className={styles.text}>- Brazo Robótico </p>
            <p className={styles.text}>- Enigma </p>
            <p className={styles.text}>- Reconocimiento de letra de señas </p>
        </div>
        <div className={styles.footer}>
            <Link to="/capitulos">
                <button className={styles.back_button} >Regresar</button>
            </Link>
            <img src='/images/qr_ras.png' alt="QR Instagram RAS" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default RASInfo;