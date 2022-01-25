import React, { useEffect, useState } from 'react';
import TableInput from './TableInput';

const curr_API = 'https://altexchangerateapi.herokuapp.com/latest'

const Table = () => {
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
            <h1 className="title">Currency Table</h1>
            <TableInput />
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Exchange Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Table;

