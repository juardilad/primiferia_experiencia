import React from 'react';
import { useState } from 'react'; 
import styles from '../../styles/APS.module.css';
import { Link } from "react-router-dom";

function APSInfo() {

  return (
    <div className={styles.info_container}>
        <div className={styles.header_info}>
            <p>Capitulos</p>
            <div></div>
            <a 
                href="https://www.instagram.com/aps.unal/" 
                className={styles.ig_info}
            >
                @aps.unal
                <img src='/icons/instagram.svg' alt="Instagram icon" className={styles.ig_icon}></img>
            </a>
        </div>
        <div className={styles.body_info}>
            <p className={styles.title}>APS</p>
            <p className={styles.subtitle}>Antennas & Propagation Society</p>
            <p className={styles.text}>APS es un capítulo perteneciente a la
                Rama Estudiantil IEEE UN creado con la
                finalidad de estudiar el mundo de las
                ondas electromagnéticas y desarrollar
                antenas capaces de recepcionarlas.
            </p>
            <p className={styles.text}>Buscamos a través de la
                experimentación
                y el desarrollo de
                habilidades prácticas,
                lógico
                matemáticas e intuitivas incentivar
                a los
                estudiantes a crear nuevas formas de
                captar señales electromagnéticas y dar
                soluciones a los diferentes problemas
                de optimización y espacio que existen
                actualmente.
            </p>
        </div>
        <div className={styles.footer}>
            <Link to="/capitulos">
                <button className={styles.back_button} >Regresar</button>
            </Link>
            <img src='/images/qr_aps.png' alt="QR Instagram APS" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default APSInfo;