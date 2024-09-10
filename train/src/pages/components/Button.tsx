import styles from './button.module.css'


export default function Button({handler}: any) {


    return (
      <div className={styles.container}>
        <button onClick={handler} className={styles.btn}>OK</button>
      </div>
    );
  }