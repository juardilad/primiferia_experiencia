import React from 'react';
import { useState } from 'react';   
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Menu.module.css';

function MenuPrincipal() {
  const navigate = useNavigate();

  return (
    <div className={styles.menu_principal_container}>
        <p className={styles.title}>Rama IEEE</p>
        <p className={styles.text}>La Rama Estudiantil IEEE de la
            Universidad Nacional de Colombia es un
            grupo estudiantil, asociado a el Institute
            of Electrical and Electronics Engineers
            (IEEE), perteneciente a la región 9
            comprendida por Latinoamérica y el
            Caribe, e igualmente a Sección
            Colombia.
        </p>
        <p className={styles.text}>Actualmente contamos con más de 150
            voluntarios.
        </p >
        <p className={styles.text}>
            Nuestra objetivo es es fomentar la
            divulgación, formación e Innovación en
            Ingeniería y todos los aspectos relacionados
            a ella. Esto a través de eventos, actividades
            y proyectos que inspiren a los voluntarios,
            miembros y cualquiera con interés a usar el
            conocimiento tecnológico en beneficio de la
            sociedad y la humanidad.
            Estamos conformados por 8 capítulos
            técnicos y 1 grupo de afinidad, los cuales
            trabajan en distintas áreas especificas de
            la Ingeniería
        </p>
        <button className={styles.option_button} onClick={() => navigate("/capitulos")}>
            Capitulos
        </button>
        <button className={styles.option_button} onClick={() => navigate("/eventos")}>
            Eventos
        </button>
    </div>
  );
}

export default MenuPrincipal;