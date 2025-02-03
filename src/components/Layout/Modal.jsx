import Button from "./LinkButton";
import React from "react";
import styles from "./Modal.module.css";

function Modal() {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        
       
        <div className={styles.titleCloseBtn}>
          <button onClick={() => closeModal(false)}>×</button>
        </div>

        <div className={styles.title}>
          <h1>Olá, meu amigo!</h1>
        </div>

        <div className={styles.body}>
          <p>A próxima página é maneira!</p>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={() => closeModal(false)}>Cancelar</button>
          <button className={styles.proceedBtn}>Prosseguir</button>
        </div>

      </div>
    </div>
  );
}

export default Modal;
