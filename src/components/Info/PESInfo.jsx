import React from 'react';
import { useState } from 'react'; 
import styles from '../../styles/PES.module.css';
import { Link } from "react-router-dom";

function PESInfo() {

  return (
    <div className={styles.info_container}>
        <div className={styles.header_info}>
            <p>Capitulos</p>
            <div></div>
            <a 
                href="https://www.instagram.com/pes_unal/" 
                className={styles.ig_info}
            >
                @pes_unal
                <img src='/icons/instagram.svg' alt="Instagram icon" className={styles.ig_icon}></img>
            </a>
        </div>
        <div className={styles.body_info}>
            <p className={styles.title}>PES</p>
            <p className={styles.subtitle}>Power & Energy Society</p>
            <p className={styles.text}>La energia electrica es parte fundamental en nuestra vida diaria,
                desde que nos levantamos y encendemos las luces hasta que las
                apagamos en la noche; en PES tenemos el objetivo de que todos aquellos
                interesados en el maravilloso mundo de la electricidad tengan un mayor
                conocimiento de la electricidad y sus ventajas. Desde generación y 
                transmición hasta uso final de la energía, aqui en PES existe
                el espacio que buscas para aprender.
            </p>
            <p className={styles.list_title}>Proyectos:</p>
            <p className={styles.text}>- Talleres de StepWatt.</p>
            <Link to="/eventos">
                <p className={styles.text}>- Mujeres en potencia (Ver eventos)</p>
            </Link>
        </div>
        <div className={styles.footer}>
            <Link to="/capitulos">
                <button className={styles.back_button} >Regresar</button>
            </Link>
            <img src='/images/qr_pes.png' alt="QR Instagram PES" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default PESInfo;