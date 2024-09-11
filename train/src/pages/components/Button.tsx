import styles from './button.module.css'


export default function Button({ addItemHandler }: { addItemHandler: (e: React.MouseEvent<HTMLButtonElement>) => void }) {


    return (
      <div className={styles.container}>
        <button onClick={addItemHandler} className={styles.btn}>OK</button>
      </div>
    );
  }