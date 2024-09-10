import styles from './button.module.css'


export default function Button({handler}: {handler: () => void}) {


    return (
      <div className={styles.container}>
        <button onClick={handler} className={styles.btn}>OK</button>
      </div>
    );
  }