import React from 'react';
import TableInput from './TableInput'

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
      .then(res => res.json())
      .then(data => {
        this.setState({ rates: data.rates });
      })
  }

  render() {
    const { base, rates } = this.state;
    return (
      <>
        <div className="container">
          <div className="row card1">
            <div className="col-12">
              <h1 className="title">Currency Table</h1>
              <div className='element'>
                <form className='d-inline-flex justify-content-center'>
                  <h4 className='mt-3'>1</h4>
                  <select value={base} onChange={this.setBase} className="form-control text-center w-75 mb-2">
                    {Object.keys(TableInput).map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
                </form>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr className='text-center'>
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
          </div>
        </div>
      </>
    )
  }
}
export default Table;
