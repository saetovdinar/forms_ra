import styles from './app.module.css'
import Button from './Button'
import Date from './Date'
import Distance from './Distance'
import Table from './Table'
import TableData from './TableData'
import    { useState } from 'react';
import { ReactElement } from 'react';


export default function App() {


  const [tableData, setTableData] = useState<ReactElement[]>([]);



  const [inputDate, setInputDate] = useState({
    value: '12.06.98',

  })
  const [inputDistance, setInputDistance] = useState({
    value: '12km',
   
  })

  const tableClickHandler = (e: any) => {
    const filteredTable = tableData.filter((item) => {
      console.log(+item.id !== +e.target.id)
      return +item.id !== +e.target.id

    }
    
  );
  console.log(tableData)
  setTableData(filteredTable)
 
  }
  const onClickHandler = () => {
   
    const temporaryId = Math.random();
    setTableData((prevData) => [
      ...prevData,
       {
        elem: <TableData id={temporaryId} clickHandler={tableClickHandler} date={inputDate.value} distance={inputDistance.value} />,
        id: temporaryId,
      }
    ]);
    setInputDistance({value: ''});
    setInputDate({value: ''});

  }
  const changeHandlerDate = (e: any) => {
    setInputDate({value: e.target.value});
  }

  const changeHandlerDistance = (e: any) => {
    setInputDistance({value: e.target.value});
  }
  return (
    <div className={styles.container}>
      <Date dateChangeHandler={changeHandlerDate}  item={inputDate}/>
      <Distance distanceChangeHandler={changeHandlerDistance} item={inputDistance} />
      <Button handler={onClickHandler}/>
      <Table>
        {tableData.map(({elem}) => elem)}
      </Table >
        
    </div>
  );
}