import { useState } from 'react'
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useEffect } from 'react';


function Validator() {
const [value1, setValue1] = useState();
const [value2, setValue2] = useState();
const [value3, setValue3] = useState();
const [value4, setValue4] = useState();
const [value5, setValue5] = useState();
const [value6, setValue6] = useState();

const [sum, setSum] = useState(0);
const [sum2, setSum2] = useState(0);

useEffect(() => {
 setSum(parseFloat(value1) * parseFloat(value3) + parseFloat(value2) * parseFloat(value4)); 
 setSum2(parseFloat(value1) * parseFloat(value5) + parseFloat(value2) * parseFloat(value6));
}, [value1, value2, value3, value4, value5, value6]);

let range = 0.1
let message = ''
let color = 'gray'

if (sum - sum2 < sum*range && sum2 - sum < sum*range){ //Hardcoded Values sind vielleicht sinnvoller 
  message = 'Deine Werte sind im richtigen Bereich!'
  color = 'green'
}else if (isNaN(sum)|| isNaN(sum2)){
  message = "Noch keine Werte Eingetragen!"
  color = 'gray'
}else {
  message = 'Deine Werte scheinen Falsch zu sein!'
  color = 'red'
}


  return (
    <>
      <form action="https://p-seminar-validator.netlify.app/alt"><input type="submit" value="Elastischer Stoß" /></form>
      <p>Für die Impulserhaltung gilt:</p>
      <Latex>$m_1 \cdot v_1 + m_2 \cdot v_2 = m_1 \cdot v_1^\prime + m_2 \cdot v_2^\prime$</Latex><br></br>
      <Latex>$m_1$ = </Latex>
      <input type="text" value={value1} onChange={e => setValue1(e.target.value.replace(',', '.'))} />
      <Latex>$kg$</Latex>
      <Latex> </Latex>
      <Latex>$m_2$ = </Latex>
      <input type="number" value={value2} onChange={e => setValue2(e.target.value.replace(',', '.'))} />
      <Latex>$kg$</Latex>
      <br></br>
      <Latex>$v_1$ = </Latex>
      <input type="number" value={value3} onChange={e => setValue3(e.target.value.replace(',', '.'))} />
      <Latex>$\frac m s$</Latex>
      <Latex> </Latex>
      <Latex>$v_2$ = </Latex>
      <input type="number" value={value4} onChange={e => setValue4(e.target.value.replace(',', '.'))} />
      <Latex>$\frac m s$</Latex>
      <br></br>
      <Latex>$v_1^\prime$ = </Latex>
      <input type="number" value={value5} onChange={e => setValue5(e.target.value.replace(',', '.'))} />
      <Latex>$\frac m s$</Latex>
      <Latex> </Latex>
      <Latex>$v_2^\prime$ = </Latex>
      <input type="number" value={value6} onChange={e => setValue6(e.target.value.replace(',', '.'))} />
      <Latex>$\frac m s$</Latex>
      {!isNaN(sum) && !isNaN(sum2) ? <p>{sum}  {color == 'red' ? '≠' : '≈'} {sum2}</p> : ''}
      <p style={{ color: color, border: '1px solid', borderRadius: '10px' }}>{message}</p>
    </>
  )
}

export default Validator
