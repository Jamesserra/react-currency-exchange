import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyInput from './CurrencyInput';

const curr_API = 'https://altexchangerateapi.herokuapp.com/latest'

function App() {
  const [currOptions, setCurrOptions] = useState([])
  console.log(currOptions)
  useEffect(() => {
    fetch(curr_API)
      .then(res => res.json())
      .then(data =>
        setCurrOptions([data.base, ...Object.keys(data.rates)]))
  }, [])

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyInput currOptions={currOptions}
      />
      <div className='equal'>=</div>
      <CurrencyInput currOptions={currOptions}
      />
    </>
  );
}

export default App;
