import Button from './Button';
import styles from './form.module.css'


export default function Form({date, distance, changeDateHandler, changeDistanceHandler, btnAddItem, children}: any) {
 
    return (
        
        <form className={styles.cont}>
            <label className={styles.container}>
                <p className={styles.description}>Дата (ДД.ММ.ГГ)</p>
                <input onChange={changeDateHandler} value={date.value} className={styles.input}></input>
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