import React from 'react';
import './App.css';
import CurrencyInput from './CurrencyInput';

function App() {
  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyInput />
      <div className='test'>=</div>
      <CurrencyInput />

    </>
  );
}

export default App;
