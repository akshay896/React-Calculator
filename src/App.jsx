import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("0");

  const handleNumberClick = (number) => {
    if (inputValue === "0") {
      setInputValue(number);
    } else {
      setInputValue(prevValue => prevValue + number);
    }
  };

  const handleClear = () => {
    setInputValue('0');
  };

  const handleDelete = () => {
    setInputValue(prevValue => prevValue.slice(0, -1) || '0');
  };

  const handleEqual = () => {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <div className='page'>
      <div className='calculator-container'>
        <div className='calculator-box'>
          <input
            value={inputValue === "" ? "0" : inputValue}
            className='input input-value'
            type="text"
            readOnly
          />
          <div className='first-row'>
            <button onClick={handleClear} className='ac'>AC</button>
            <button onClick={handleDelete} className='del'>DEL</button>
            <button onClick={() => handleNumberClick('/')} className='devide'><i className="fa-solid fa-divide"></i></button>
          </div>

          <div className='second-part'>
            <button onClick={() => handleNumberClick('7')} className='num'>7</button>
            <button onClick={() => handleNumberClick('8')} className='num'>8</button>
            <button onClick={() => handleNumberClick('9')} className='num'>9</button>
            <button onClick={() => handleNumberClick('*')} className='num'><i className="fa-solid fa-xmark"></i></button>
            <button onClick={() => handleNumberClick('4')} className='num'>4</button>
            <button onClick={() => handleNumberClick('5')} className='num'>5</button>
            <button onClick={() => handleNumberClick('6')} className='num'>6</button>
            <button onClick={() => handleNumberClick('+')} className='num'><i className="fa-solid fa-plus"></i></button>
            <button onClick={() => handleNumberClick('1')} className='num'>1</button>
            <button onClick={() => handleNumberClick('2')} className='num'>2</button>
            <button onClick={() => handleNumberClick('3')} className='num'>3</button>
            <button onClick={() => handleNumberClick('-')} className='num'><i className="fa-solid fa-minus"></i></button>
          </div>
          <div className='third-part'>
            <button onClick={() => handleNumberClick('0')} className='num'>0</button>
            <button onClick={() => handleNumberClick('.')} className='num'>.</button>
            <button onClick={handleEqual} className='equal-to'><i className="fa-solid fa-equals"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;