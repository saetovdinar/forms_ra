import styles from './table.data.module.css'
interface TableDataProps {

  date: string
  distance: string
  clickHandler: () => void
}

export default function TableData({ date , distance, clickHandler}: TableDataProps) {

    return (
      
      <div className={styles.container}>
        <p className={styles.date}>
          {date}
        </p>
        <p className={styles.distance}>
          {distance}
        </p>
        <p className={styles.btn_cont}>
          <button  onClick={clickHandler} className={styles.cancel_btn}>x</button>
        </p>
       
        
      </div>
    );
  }