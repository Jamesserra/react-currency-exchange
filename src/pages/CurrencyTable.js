
import React from 'react';
import { Link } from "react-router-dom";
import TableInput from './TableInput';

const CurrencyTable = (props) => {
  const { base, rates } = props;
  if (!rates) {
    return null;
  }
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr className='text-center'>
          <th>Currency</th>
          <th>Exchange Rate</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(rates).map((code) => (
            <tr key={code} className='text-center'>
              <td><Link className='text-dark' to={`/?base=${base}&quote=${code}`}>{TableInput[code].name}</Link></td>
              <td>{TableInput[code].symbol} {rates[code] * 1}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default CurrencyTable