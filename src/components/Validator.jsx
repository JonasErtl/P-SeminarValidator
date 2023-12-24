import React, { useState } from 'react'
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useEffect } from 'react';

function Validator() {
const [value1, setValue1] = useState();
const [value2, setValue2] = useState();
const [sum, setSum] = useState(0);

useEffect(() => {
 setSum(parseInt(value1, 10) + parseInt(value2, 10));
}, [value1, value2]);

let message = ''
let color = 'gray'

if (sum > 1 && sum < 60){
  message = 'Deine Werte sind im richtigen Bereich!'
  color = 'green'
}else if (isNaN(sum)){
  message = "Noch keine Werte Eingetragen!"
  color = 'gray'
}else {
  message = 'Deine Werte scheinen Falsch zu sein!'
  color = 'red'
}


  return (
    <>
      <p>Für die Impulserhaltung gilt:</p>
      <Latex>$m_1 \cdot v_1 + m_2 \cdot v_2 = m_1 \cdot v_1^\prime + m_2 \cdot v_2^\prime$</Latex><br></br>
      <Latex>$m_1$ = </Latex>
      <input type="number" value={value1} onChange={e => setValue1(e.target.value)}/><br></br>
      <Latex>$m_2$ = </Latex>
      <input type="number" value={value2} onChange={e => setValue2(e.target.value)} />
      <p style={{color: color, border: '1px solid', borderRadius: '10px'}}>{message}</p>
    </>
  )
}

export default Validator
