import React from 'react';
import { useState } from 'react'; 
import styles from '../../styles/AESS.module.css';
import { Link } from "react-router-dom";

function AESSInfo() {

  return (
    <div className={styles.info_container}>
        <div className={styles.header_info}>
            <p>Capitulos</p>
            <div></div>
            <a 
                href="https://www.instagram.com/aess_un/" 
                className={styles.ig_info}
            >
                @aess_un
                <img src='/icons/instagram.svg' alt="Instagram icon" className={styles.ig_icon}></img>
            </a>
        </div>
        <div className={styles.body_info}>
            <p className={styles.title}>AESS</p>
            <p className={styles.subtitle}>Aerospace and Electronics Systems Society</p>
            <p className={styles.text}>AESS UN es uno de los capítulos de la Rama
                Estudiantil IEEE UN. Somos un grupo de
                estudiantes motivados por querer
                comprender el cosmos, el lenguaje del
                universo, el arte de la ingeniería aplicada a
                la industria aeroespacial. Trabajamos en
                proyectos que nos permitan adentrarnos en
                el campo de la astronomía, la astrofísica y
                las ciencias del espacio desde una
                perspectiva técnica y divulgativa. La
                industria aeroespacial es la frontera del
                conocimiento humano y podemos ser los
                próximos en aportar significativamente, la
                pasión mueve montañas.
            </p>
        </div>
        <div className={styles.footer}>
            <Link to="/capitulos">
                <button className={styles.back_button} >Regresar</button>
            </Link>
            <img src='/images/qr_aess.png' alt="QR Instagram AESS" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default AESSInfo;