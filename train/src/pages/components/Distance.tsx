import styles from './distance.module.css'


export default function Distance({item}: any) {

  const {value} = item;

    return (
      <div className={styles.container}>
        <p className={styles.description}>Пройдено км</p>
        <input value={value} className={styles.input}></input>
      </div>
    );
  }