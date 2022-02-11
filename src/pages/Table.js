import React from 'react';
import TableInput from './TableInput';
import { checkStatus, json } from '../utils/fetchUtils';

import CurrencyTable from './CurrencyTable'
const curr_API = 'https://altexchangerateapi.herokuapp.com/latest';

class Table extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.search);
    this.state = {
      base: 'USD',
      rates: '',
    }
  }
  componentDidMount() {
    this.getRates(this.state.base);
  }
  setBase = (e) => {
    this.setState({ base: e.target.value });
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
            <h1 className="text-center">Currency Table</h1>
            <form className='d-flex justify-content-center'>
              <select value={base} onChange={this.setBase} className="form-control text-center mb-2">
                {Object.keys(TableInput).map(option => <option key={option} value={option}>{option} - {TableInput[option].name}</option>)}
              </select>
            </form>
            <CurrencyTable base={base} rates={rates} />
          </div>
        </div>
      </>
    )
  }
}
export default Table;
