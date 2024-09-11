import Button from './Button';
import styles from './form.module.css'

interface FormProps {
    date: {
        value: string
    }
    distance: {
        value: string
    }
    changeDateHandler: (e: React.ChangeEvent) => void
    changeDistanceHandler: (e: React.ChangeEvent) => void
    btnAddItem:  (e: React.MouseEvent<HTMLButtonElement>) => void
    children: React.ReactNode
}

export default function Form({date, distance, changeDateHandler, changeDistanceHandler, btnAddItem, children}: FormProps) {
 
    return (
        
        <form className={styles.cont}>
            <label className={styles.container}>
                <p className={styles.description}>Дата (ДД.ММ.ГГ)</p>
                <input type='date' onChange={changeDateHandler} value={date.value} className={styles.input}></input>
            </label>
            <label className={styles.container}>
                <p className={styles.description}>Пройдено км</p>
                <input onChange={changeDistanceHandler} value={distance.value} className={styles.input}></input>
            </label>
            <Button addItemHandler={btnAddItem}/>
            <div className={styles.table_container}>
                <div className={styles.description}>
                    {children}
        
                </div>
        
            </div>
        </form> 
        
        
    );
  }