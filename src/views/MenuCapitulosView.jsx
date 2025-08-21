import React from 'react';
import { useState } from 'react';   
import { useNavigate } from 'react-router-dom';
import MenuCapitulos from '../components/MenuCapitulos';
import styles from '../styles/Menu.module.css';

function EMBSView() {
  const navigate = useNavigate();

  return (
    <div className={styles.view_menu_container}>
        <button className={styles.back_button} onClick={() => navigate("/")}>
            Ir al inicio
        </button>
        <MenuCapitulos />
    </div>
  );
}

export default EMBSView;