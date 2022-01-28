import React from 'react';

export default function TableInput(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
  } = props

  return (
    <div className='element'>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
