import styles from './distance.module.css'

interface DistanceProps {
  distanceChangeHandler: () => void
  item: {
    value:string
  }
}
export default function Distance({distanceChangeHandler, item}: DistanceProps) {

  const {value} = item;

    return (
      <div className={styles.container}>
        <p className={styles.description}>Пройдено км</p>
        <input onChange={distanceChangeHandler} value={value} className={styles.input}></input>
      </div>
    );
  }