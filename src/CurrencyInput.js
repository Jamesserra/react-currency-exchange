import React from 'react';

export default function currencyInput(props) {
  const { currOptions } = props;
  return (
    <div>
      <input type="number" className='input' />
      <select>
        {currOptions.map(options => (
          <option key={options} value={options}>{options}</option>
        ))}
      </select>
    </div>
  )
}
