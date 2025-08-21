import React from 'react';
import { useState } from 'react'; 
import styles from '../styles/WIE.module.css';
import { Link } from "react-router-dom";

function WIEInfo() {

  return (
    <div className={styles.info_container}>
        <div className={styles.header_info}>
            <p>Capitulos</p>
            <div></div>
            <a 
                href="https://www.instagram.com/wie_unal/" 
                className={styles.ig_info}
            >
                @wie_unal
                <img src='/icons/instagram.svg' alt="Instagram icon" className={styles.ig_icon}></img>
            </a>
        </div>
        <div className={styles.body_info}>
            <p className={styles.title}>WIE</p>
            <p className={styles.subtitle}>Women In Engineering</p>
            <p className={styles.text}>El grupo de afinidad WIE es una red global de miembros IEEE y voluntari@s que nos
                dedicamos a promover la equidad de género en las carreras de STEM, celebrar las 
                mujeres ingenieras y científicas, e inspirar a niñas y jóvenes alrededor del
                mundo para que sigan sus intereses académicos en una carrera en ingeniería y
                ciencia.
</p>
            <p className={styles.list_title}>Proyectos:</p>
            <Link to="/eventos">
                <p className={styles.text}>- Impactando El Colectivo (Ver eventos)</p>
            </Link>
            <Link to="/eventos">
                <p className={styles.text}>- Mujeres En Potencia (Ver eventos)</p>
            </Link>
            <Link to="/eventos">
                <p className={styles.text}>- Tejido Violeta (Ver eventos)</p>
            </Link>
            <p className={styles.text}>- Tierra Nueva: Actividades con niños de Soacha.</p>
            <p className={styles.text}>- Nodoz Velocistas: Taller de velocistas con jóvenes de Ciudad Bolívar.</p>
            <p className={styles.text}>- Fieeeliz Navidad con Tierra Nueva: Actividades y regalos para niños de Soacha.</p>
            <p className={styles.text}>- App de la mujer: estudio y análisis sobre las aplicaciones sobre salud sexual y menstruación.</p>
        </div>
        <div className={styles.footer}>
            <Link to="/capitulos">
                <button className={styles.back_button} >Regresar</button>
            </Link>
            <img src='/images/qr_wie.png' alt="QR Instagram WIE" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default WIEInfo;