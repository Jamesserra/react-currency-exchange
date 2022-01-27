
import React, { useEffect, useState } from 'react';
import TableInput from './TableInput';

const curr_API = 'https://altexchangerateapi.herokuapp.com/latest'

const Table = () => {
  const [base, setBase] = useState([])
  const [exchangeRate, setRates] = useState([])
  console.log(base)
  console.log(exchangeRate)
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
            <TableInput />
            <table className="table table-striped table-hover">
              <thead>
                <tr className='text-center'>
                  <th>Currency</th>
                  <th>Exchange Rate</th>
                </tr>
              </thead>
              <tbody>
                {
                  base.map((item) => (
                    <tr className='text-center'>
                      <td>{item}</td>
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

