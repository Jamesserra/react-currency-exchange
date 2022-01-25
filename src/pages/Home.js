import React, { useEffect, useState } from 'react';
import CurrencyInput from './CurrencyInput';

const curr_API = 'https://altexchangerateapi.herokuapp.com/latest'

const Home = () => {
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
      <div className="container">
        <div className="row card1">
          <div className="col-12">
            <h1 className="title">Currency Converter</h1>
            <CurrencyInput currOptions={currOptions} />
            <div className='equal text-center'>=</div>
            <CurrencyInput currOptions={currOptions} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

