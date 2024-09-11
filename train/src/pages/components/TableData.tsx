import styles from './table.data.module.css'
interface TableDataProps {
  id: string
  item: {
    date: string
    distance: string
  }
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}


export default function TableData({id, item, clickHandler}: TableDataProps) {

    return (
      
      <div  className={styles.container}>
        <p className={styles.date}>
          {item.date}
        </p>
        <p className={styles.distance}>
          {item.distance + 'km'}
        </p>
        <p className={styles.btn_cont}>
          <button  id={id}  onClick={clickHandler} className={styles.cancel_btn}>x</button>
        </p>
       
        
      </div>
    );
  }