import React from 'react';
import { useState } from 'react'; 
import styles from '../../styles/CS.module.css';
import { Link } from "react-router-dom";

function CSInfo() {

  return (
    <div className={styles.info_container}>
        <div className={styles.header_info}>
            <p>Capitulos</p>
            <div></div>
            <a 
                href="https://www.instagram.com/computersocietyun/" 
                className={styles.ig_info}
            >
                @computersocietyun
                <img src='/icons/instagram.svg' alt="Instagram icon" className={styles.ig_icon}></img>
            </a>
        </div>
        <div className={styles.body_info}>
            <p className={styles.title}>CS</p>
            <p className={styles.subtitle}>Computer Society</p>
            <p className={styles.text}>Somos el capítulo estudiantil Computer Society de la Rama 
                IEEE de la Universidad Nacional de Colombia sede Bogotá, conformado por estudiantes 
                de pregrado de varios programas de ingeniería y ciencias exactas, el capítulo 
                estudia los campos de programación y computación desde la ingeniería para construir 
                soluciones de la vida cotidiana, mejora de procesos, proyectos interactivos y proyectos 
                sociales que aporten a la comunidad.
            </p>
            <p className={styles.list_title}>Proyectos:</p>
            <p className={styles.text}>- Un sistema potenciado con inteligencia artificial para detectar 
                fraude financiero en transacciones bancarias. 
            </p>
            <p className={styles.text}>- Competencias cortas en diferente áreas de programación
                donde pueden ganar premios en efectivo o bonos.
            </p>
            <p className={styles.text}>- ⁠Relación de variables con pruebas psicológicas y detector 
                de métrica en griego antiguo. </p>
            <p className={styles.text}>- Curso de desarrollo web mediante creacion de portafolio personal. 
            </p>
            <p className={styles.text}>- Curso de python. 
            </p>
            <Link to="/eventos">
                <p className={styles.text}>- Hackathon con Whitestack (Ver eventos)</p>
            </Link>
            <Link to="/eventos">
                <p className={styles.text}>- Finanzas y emprendimiento con Women in AI (Ver eventos)</p>
            </Link>
        </div>
        <div className={styles.footer}>
            <Link to="/capitulos">
                <button className={styles.back_button} >Regresar</button>
            </Link>
            <img src='/images/qr_cs.png' alt="QR Instagram CS" className={styles.qr_code}></img>
        </div>
        
    </div>
  );
}

export default CSInfo;