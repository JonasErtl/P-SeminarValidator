import React from 'react'
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

function Validator() {
  return (
    <>
      <p>Für die Impulserhaltung gilt:</p>
      <Latex>$m_1 \cdot v_1 + m_2 \cdot v_2 = m_1 \cdot v_1^\prime + m_2 \cdot v_2^\prime$</Latex>
    </>
  )
}

export default Validator
