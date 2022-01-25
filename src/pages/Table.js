import React, { useEffect, useState } from 'react';

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
          </div>
        </div>
      </div>
    </>
  );
}
export default Table;

