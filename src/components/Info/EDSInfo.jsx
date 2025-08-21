import React from 'react';
import { useState } from 'react'; 
import styles from '../../styles/EDS.module.css';
import { Link } from "react-router-dom";

function EDSInfo() {

  return (
    <div className={styles.info_container}>
        <div className={styles.header_info}>
            <p>Capitulos</p>
            <div></div>
            <a 
                href="https://www.instagram.com/edsunal/" 
                className={styles.ig_info}
            >
                @edsunal
                <img src={import.meta.env.BASE_URL + '/icons/instagram.svg'} alt="Instagram icon" className={styles.ig_icon}></img>
            </a>
        </div>
        <div className={styles.body_info}>
            <p className={styles.title}>EDS</p>
            <p className={styles.subtitle}>Technology and Engineering Management Society</p>
            <p className={styles.text}>¡Electrónica para todos! Ese es nuestro
                objetivo como capítulo EDS UN, pertenciente
                a la Rama Estudiantil IEEE UN. Desde nuestro
                grupo queremos que todas las personas, de
                todas las carreras y aún más allá vean los
                grandes beneficios que tiene el uso de
                dispositivos electrónicos y como integrarlos
                en cada campo de conocimiento.
            </p>
            <p className={styles.text}>La electrónica es un mundo amplio y lleno de
                posibilidades, ven a descubrirlas con nosotros,
                con nuestro gran equipo y familia EDS. Las
                ideas se vuelven proyectos y estos se hacen
                realidad acá. Que venga la próxima
                experiencia
            </p>
        </div>
        <div className={styles.footer}>
            <Link to="/capitulos">
                <button className={styles.back_button} >Regresar</button>
            </Link>
            <img src={import.meta.env.BASE_URL + '/images/qr_eds.png'} alt="QR Instagram EDS" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default EDSInfo;