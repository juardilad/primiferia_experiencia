import React from 'react';
import { useState } from 'react'; 
import styles from '../styles/TEMS.module.css';

function TEMSInfo() {

  return (
    <div className={styles.info_container}>
        <div className={styles.header_info}>
            <p>Capitulos</p>
            <div></div>
            <a 
                href="https://www.instagram.com/temsunal/" 
                className={styles.ig_info}
            >
                @temsunal
                <img src='/icons/instagram.svg' alt="Instagram icon" className={styles.ig_icon}></img>
            </a>
        </div>
        <div className={styles.body_info}>
            <p className={styles.title}>TEMS</p>
            <p className={styles.subtitle}>Technology and Engineering Management Society</p>
            <p className={styles.text}>Es un capítulo estudiantil que pertenece a la Rama IEEE 
                de la Universidad Nacional de Colombia. Busca promover el aprendizaje y práctica de las habilidades blandas en la 
                comunidad universitaria. Asimismo, busca mejorar los conocimientos en la 
                gestión de proyectos de los estudiantes, promoviendo su éxito.</p>
        </div>
        <div className={styles.footer}>
            <button className={styles.back_button}>Regresar</button>
            <img src='/images/qr_tems.png' alt="QR Instagram TEMS" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default TEMSInfo;