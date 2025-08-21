import React from 'react';
import { useState } from 'react'; 
import styles from '../../styles/TEMS.module.css';
import { Link } from "react-router-dom";

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
            <p className={styles.list_title}>Proyectos:</p>
            <p className={styles.text}>- Sistema de información: Una aplicación web subdividida en 3, 
                una página web del capítulo, un sistema para la automatización 
                de la gestión de proyectos y una plataforma de capacitaciones.
                Con este aprendemos habilidades de planeación y diseño.
            </p>
            <Link to="/eventos">
                <p className={styles.text}>- STEM Escribe (Ver eventos)</p>
            </Link>
            <Link to="/eventos">
                <p className={styles.text}>- Impactando El Colectivo (Ver eventos)</p>
            </Link>
        </div>
        <div className={styles.footer}>
            <Link to="/capitulos">
                <button className={styles.back_button} >Regresar</button>
            </Link>
            <img src='/images/qr_tems.png' alt="QR Instagram TEMS" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default TEMSInfo;