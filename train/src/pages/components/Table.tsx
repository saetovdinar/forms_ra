
import styles from './table.module.css';

export default function Table({children}: any) {
 
    return (
      <div className={styles.container}>
        <div className={styles.description}>
          {children}
        
        </div>
        
      </div>
    );
  }