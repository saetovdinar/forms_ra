import styles from './change.color.module.css'
import { useState, useRef } from 'react';

export default function ChangeColor() {
  //доступ к форме
  const formRef = useRef();
  //доступ к лейблу
  const labelRef = useRef();
  //состояние поля ввода для манипуляций значением
  const [form, setForm] = useState({
    name: '',
  })
  //конвертирование в RGB
  function hexToRgb(hex: string) {
    //удаление решетки 
    const hexReplaced = hex.replace("#", "");
    const bigint = parseInt(hexReplaced, 16);
    if(isNaN(bigint)) {
      return false
    }
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return r + "," + g + "," + b;
}

 
//обработчик события ввода зачения в поле ввода
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const {value} = e.target;
    //проверка на ошибочное значение без решетки
    if(value[0] !== '#'  && value.length === 7) {
      labelRef.current.innerText = `Ошибка`;
      formRef.current.style.backgroundColor = 'red';
      setForm({
        name: value
      })
      return;
    }
    //проверка на ошибочное значение
    if(!hexToRgb(value) && value[0] === '#'  && value.length === 7) {
      labelRef.current.innerText = `Ошибка`;
      formRef.current.style.backgroundColor = 'red';
      setForm({
        name: value
      })
      return;
    }
    //успешное значение
    if(value[0] === '#'  && value.length === 7) {
      labelRef.current.innerText = `rgb(${hexToRgb(value)})`;

      formRef.current.style.backgroundColor = value;
    } 
    setForm({
      name: value
    })
  }

  //обработчик события отправки формы
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }

    return (
      <div ref={formRef} className={styles.container}>
        <form  onSubmit={handleSubmit} className={styles.form_cont}>
            <input className={styles.input}  onChange={handleChange} value={form.name}></input>
            <label ref={labelRef} className={styles.answer}></label>
        </form>
      </div>
    );
  }