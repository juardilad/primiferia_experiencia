import React from 'react';
import styles from '../../styles/Rama.module.css';
import { Link } from "react-router-dom";

function RamaInfo() {
  return (
    <div className={styles.info_container}>
      <div className={styles.header_info}>
        <p>Capitulos</p>
        <div></div>
        <a
          href="https://www.instagram.com/ieeeunal/"
          className={styles.ig_info}
          target="_blank"
          rel="noopener noreferrer"
        >
          @ieeeunal
          <img
            src={import.meta.env.BASE_URL + '/icons/instagram.svg'}
            alt="Instagram icon"
            className={styles.ig_icon}
          />
        </a>
      </div>

      <div className={styles.body_info}>
        <p className={styles.title}>Rama IEEE</p>
        <p className={styles.subtitle}>Technology and Engineering Management Society</p>
        <p className={styles.text}>
          La Rama Estudiantil IEEE de la Universidad Nacional de Colombia es un grupo estudiantil, asociado al Institute of Electrical and Electronics Engineers (IEEE), perteneciente a la región 9 comprendida por Latinoamérica y el Caribe, e igualmente a Sección Colombia.
          Actualmente contamos con más de 150 voluntarios.
        </p>
        <p className={styles.text}>
          Nuestro objetivo es fomentar la divulgación, formación e innovación en Ingeniería y todos los aspectos relacionados a ella. Esto a través de eventos, actividades y proyectos que inspiren a los voluntarios, miembros y cualquier persona interesada en usar el conocimiento tecnológico en beneficio de la sociedad y la humanidad.
          Estamos conformados por 8 capítulos técnicos y 1 grupo de afinidad, los cuales trabajan en distintas áreas específicas de la Ingeniería.
        </p>

        <div className={styles.buttons_container}>
          <Link to="/capitulos">
            <button className={styles.back_button}>Capitulos</button>
          </Link>
          <Link to="/eventos">
            <button className={styles.back_button}>Eventos</button>
          </Link>
        </div>
      </div>

      <div className={styles.footer}>
        <img
          src={import.meta.env.BASE_URL + '/images/qr_rama.png'}
          alt="QR Instagram Rama"
          className={styles.qr_code}
        />
      </div>
    </div>
  );
}

export default RamaInfo;
