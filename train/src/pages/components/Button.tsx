import styles from './button.module.css'


export default function Button({addItemHandler}: {addItemHandler: () => void}) {


    return (
      <div className={styles.container}>
        <button onClick={addItemHandler} className={styles.btn}>OK</button>
      </div>
    );
  }