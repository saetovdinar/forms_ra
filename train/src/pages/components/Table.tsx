import TableData from './TableData';
import styles from './table.module.css'
export default function Table() {
 
    return (
      <div className={styles.container}>
        <p className={styles.description}>
          <TableData></TableData>
          <TableData></TableData>
          <TableData></TableData>
        </p>
        
      </div>
    );
  }