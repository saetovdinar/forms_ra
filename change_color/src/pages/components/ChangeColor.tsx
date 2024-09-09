import styles from './change.color.module.css'


export default function ChangeColor() {
    return (
      <div className={styles.container}>
        <form className={styles.form_cont}>
            <input className={styles.input}></input>
            <label className={styles.answer}></label>
        </form>
      </div>
    );
  }