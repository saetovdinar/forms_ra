import styles from './app.module.css'
import Form from './Form'
import    { useState } from 'react';



export default function App() {


  const [inputDate, setInputDate] = useState({
    value: '12.06.98',

  })
  const [inputDistance, setInputDistance] = useState({
    value: '12km',
   
  })


 
  
  const putTableHandler = (event: any) => {
   
    event.preventDefault()
    setInputDistance({value: ''});
    setInputDate({value: ''});

  }
  const changeDateHandler = (e: any) => {
    setInputDate({value: e.target.value});
  }

  const changeDistanceHandler = (e: any) => {
    setInputDistance({value: e.target.value});
  }
  return (
    <div className={styles.container}>
      <Form date={inputDate} distance={inputDistance} changeDateHandler={changeDateHandler} changeDistanceHandler={changeDistanceHandler} btnAddItem={putTableHandler}/>
        
    </div>
  );
}