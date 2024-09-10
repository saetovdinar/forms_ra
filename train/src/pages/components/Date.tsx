
import styles from './date.module.css'
interface DateProps {
  dateChangeHandler: () => void
  item: {
    value:string
  }
}


export default function Date({dateChangeHandler, item}: DateProps) {

    const {value} = item;
    return (
      <div className={styles.container}>
        <p className={styles.description}>Дата (ДД.ММ.ГГ)</p>
        <input onChange={dateChangeHandler} value={value} className={styles.input}></input>
      </div>
    );
  }