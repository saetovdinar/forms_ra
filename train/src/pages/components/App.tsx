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
    
    const continueIter = {value: true};
    setItemInfo((prevItems: Item[]): Item[] => {
      if(inputDate.value === '' || inputDistance.value === '') {
        return prevItems;
      }
      
      
      const newArr = prevItems.map((item) => {
        //почему-то прибавляет два раза дистанцию
        if(item.date === inputDate.value) {
          item['distance'] = String(parseInt(item['distance']) + (+inputDistance.value));
          continueIter.value = false;
          
        }
        return item
        
      })
      if(continueIter.value) {
        
        return [...newArr,
          {
            date: inputDate.value,
            distance: inputDistance.value,
            id: Math.random()
          }
        ]
       
      }  else {
        continueIter.value = true;
        return newArr
      } 
       
    })
    setInputDistance({value: ''});
    setInputDate({value: ''});
  
  }
  const changeDateHandler = (e: React.ChangeEvent) => {
    setInputDate({value: (e.target as HTMLInputElement).value});
  }

  const changeDistanceHandler = (e: React.ChangeEvent   ) => {
    setInputDistance({value: (e.target as HTMLInputElement).value});
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