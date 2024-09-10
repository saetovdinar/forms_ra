
import styles from './date.module.css'


export default function Date({item}: any) {

    const {value} = item;
    return (
      <div className={styles.container}>
        <p className={styles.description}>Дата (ДД.ММ.ГГ)</p>
        <input value={value} className={styles.input}></input>
      </div>
    );
  }