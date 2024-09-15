import styles from './app.module.css';
import Form from './Form';
import TableData from './TableData';
import    { useState } from 'react';

interface Item {
  date: string;
  distance: string;
  id: number;
}

export default function App() {

 
  const [inputDate, setInputDate] = useState({
    value: '',

  })
  const [inputDistance, setInputDistance] = useState({
    value: '',
   
  })

  const [itemInfo, setItemInfo] = useState <Item[]>([])

  const putTableHandler = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    event.preventDefault();
    const compare = (a: Item, b: Item) => {
      if(a.date > b.date) {
        return 1;
      } else if(a.date < b.date) {
        return -1;
      } else {
        return 0;
      }
    }
    const continueIter = {value: true};
    setItemInfo((): Item[] => {
      if(inputDate.value === '' || inputDistance.value === '' || isFinite(inputDistance.value)  === false) {
        return itemInfo;
      }
      
      
      const newArr = itemInfo.map((item) => {
       
        if(item.date === inputDate.value) {
          item = {...item, distance: String(parseInt(item.distance) + (+inputDistance.value))}
          continueIter.value = false;
          
        }
        return item
        
      })
      if(continueIter.value) {
        
        return [...itemInfo,
          {
            date: inputDate.value,
            distance: inputDistance.value,
            id: Math.random()
          }
        ].sort(compare)
       
      }  else {
        continueIter.value = true;
        return newArr.sort(compare)
      } 
       
    })
    setInputDistance({value: ''});
    setInputDate({value: ''});
  
  }
  const changeDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate({value: e.target.value});
  }

  const changeDistanceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDistance({value: e.target.value});
  }
  return (
    <div className={styles.container}>
      <Form date={inputDate} distance={inputDistance} changeDateHandler={changeDateHandler} changeDistanceHandler={changeDistanceHandler} btnAddItem={putTableHandler}>
        {
          
          itemInfo.map((item, index) => {
            return <TableData id={String(item.id)} key={index} item={item} clickHandler={
              (e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
               
                setItemInfo((): Item[] => {
                  return itemInfo.filter((item) => +item.id !== +(e.target as HTMLButtonElement).id)
                })
              }
              
            }/>
        })
        }
      </Form>
        
    </div>
  );
}