import React from 'react';
import TableInput from './TableInput'
import { checkStatus, json } from '../utils/fetchUtils';
import { Link } from "react-router-dom";

const curr_API = 'https://altexchangerateapi.herokuapp.com/latest';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      base: 'USD',
      rates: '',
    }
  }
  componentDidMount() {
    this.getRates(this.state.base);
  }
  setBase = (e) => {
    this.setState({ base: e.value });
    this.getRates(e.target.value);
  }

  getRates = (base) => {
    fetch(`${curr_API}?from=${base}`)
      .then(checkStatus)
      .then(json)
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
        this.setState({ rates: data.rates });
      })
      .catch(error => console.error(error.message));
  }

  render() {
    const { base, rates } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-12">
            <h1 className="title">Currency Table</h1>
            <form className='d-inline-flex justify-content-center'>
              <h4 className='mt-3'>1</h4>
              <select value={base} onChange={this.setBase} className="form-control text-center w-75 mb-2">
                {Object.keys(TableInput).map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </form>
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
                      <td>{code}</td>
                      <td>{rates[code] * 1}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }
}
export default Table;
