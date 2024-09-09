import styles from './app.module.css'
import Button from './components/Button'
import Date from './components/Date'
import Distance from './components/Distance'
import Table from './components/Table'

export default function App() {
  return (
    <div className={styles.container}>
      <Date/>
      <Distance/>
      <Button/>
      <Table/>
    </div>
  );
}