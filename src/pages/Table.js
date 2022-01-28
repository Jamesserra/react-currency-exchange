
import React, { useEffect, useState } from 'react';
import TableInput from './TableInput';

const curr_API = 'https://altexchangerateapi.herokuapp.com/latest'

const Table = () => {
  const [base, setBase] = useState([])
  const [exchangeRate, setRates] = useState([])

  useEffect(() => {
    fetch(curr_API)
      .then(res => res.json())
      .then(data => {
        setBase([data.base, ...Object.keys(data.rates)])
        setRates(data.rates)
      })

  }, [])

  return (
    <>
      <div className="container">
        <div className="row card1">
          <div className="col-12">
            <h1 className="title">Currency Table</h1>
            {/* <TableInput /> */}
            <select value={base} onChange={base} className="form-control mb-2 text-center">
              {base.map((item) => <option key={item}>{item}</option>)}</select>
            <table className="table table-striped table-hover">
              <thead>
                <tr className='text-center'>
                  <th>Exchange Rate</th>
                  {/* <th>Exchange Rate</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  Object.keys(exchangeRate).map((code) => (
                    <tr key={code} className='text-center'>
                      <td>{code} {exchangeRate[code] * 1}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Table;

