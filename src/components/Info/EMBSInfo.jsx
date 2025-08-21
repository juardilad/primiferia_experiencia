import React from 'react';
import { useState } from 'react'; 
import styles from '../../styles/EMBS.module.css';
import { Link } from "react-router-dom";

function EMBSInfo() {

  return (
    <div className={styles.info_container}>
        <div className={styles.header_info}>
            <p>Capitulos</p>
            <div></div>
            <a 
                href="https://www.instagram.com/embsunal/" 
                className={styles.ig_info}
            >
                @embsunal
                <img src='/icons/instagram.svg' alt="Instagram icon" className={styles.ig_icon}></img>
            </a>
        </div>
        <div className={styles.body_info}>
            <p className={styles.title}>EMBS</p>
            <p className={styles.subtitle}>Engineering in Medicine and Biology Society</p>
            <p className={styles.text}>Nuestro objetivo es formar a los futuros ingenieros y profesionales en el campo de 
                la ingeniería aplicada a la medicina y la biología. Estamos dedicados a fomentar 
                el aprendizaje y la creación de una comunidad laboral sólida y colaborativa.
                No importa si eres estudiante de ingeniería biomédica, biología, o simplemente 
                estás interesado en estas áreas, ¡eres bienvenido a unirte a nuestra comunidad! </p>
            <p className={styles.list_title}>Proyectos:</p>
            <p className={styles.text}>- Aura: Sistema de monitoreo de signos vitales en tiempo real mediante dispositivos electrónicos personalizados. 
            </p>
            <p className={styles.text}>- GymMio: Monitoreador de señales myoelectricas para fatiga. 
            </p>
            <p className={styles.text}>- Horty smart: Invernadero automatizado.               
            </p>
            <Link to="/eventos">
                <p className={styles.text}>- EMBS Meetup (Ver eventos)</p>
            </Link>
        </div>
        <div className={styles.footer}>
            <Link to="/capitulos">
                <button className={styles.back_button} >Regresar</button>
            </Link>
            <img src='/images/qr_embs.png' alt="QR Instagram EMBS" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default EMBSInfo;