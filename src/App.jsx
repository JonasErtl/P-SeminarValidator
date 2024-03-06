import './App.css'
import Validator from './components/Validator.jsx'
import Validator1 from './components/Validator1.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Validator/>}/>
            <Route path="/alt" element={<Validator1/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
