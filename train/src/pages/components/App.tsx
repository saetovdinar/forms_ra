import styles from './app.module.css'
import Button from './Button'
import Date from './Date'
import Distance from './Distance'
import Table from './Table'

import { useState } from 'react';


export default function App() {
  const [inputDate, setInputDate] = useState({
    value: '12.06.98',
  })
  const [inputDistance, setInputDistance] = useState({
    value: '12km',
  })
  const onClickHandler = () => {
    setInputDistance({value: ''});
    setInputDate({value: ''});
  }
  
  return (
    <div className={styles.container}>
      <Date item={inputDate}/>
      <Distance item={inputDistance} />
      <Button handler={onClickHandler}/>
      <Table />
        
    
      
    </div>
  );
}