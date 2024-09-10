import styles from './table.data.module.css'


export default function TableData() {
    return (
      <div className={styles.container}>
        <p className={styles.date}>
          12
        </p>
        <p className={styles.distance}>
          34
        </p>
        <p className={styles.btn_cont}>
          <button className={styles.cancel_btn}>x</button>
        </p>
        
      </div>
    );
  }