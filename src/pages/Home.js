import React from 'react';
import { checkStatus, json } from '../utils/fetchUtils';
import TableInput from './TableInput';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 1,
      baseAcronym: 'USD',
      baseValue: 1,
      quoteAcronym: 'EUR',
      quoteValue: 1,
      loading: false,
    };
  }
  componentDidMount() {
    const { baseAcronym, quoteAcronym } = this.state;
    this.getRate(baseAcronym, quoteAcronym);
  }

  getRate = (base, quote) => {
    this.setState({ loading: true });
    fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${base}&to=${quote}`)
      .then(checkStatus)
      .then(json)
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
        const rate = data.rates[quote];
        this.setState({
          rate,
          baseValue: 1,
          quoteValue: Number((1 * rate).toFixed(3)),
          loading: false,
        });
      })
      .catch(error => console.error(error.message));
  }
  toBase(amount, rate) {
    return amount * (1 / rate);
  }
  toQuote(amount, rate) {
    return amount * rate;
  }
  convert(amount, rate, equation) {
    const input = parseFloat(amount);
    if (Number.isNaN(input)) {
      return '';
    }
    return equation(input, rate).toFixed(3);
  }
  changeBaseAcronym = (event) => {
    const baseAcronym = event.target.value;
    this.setState({ baseAcronym });
    this.getRate(baseAcronym, this.state.quoteAcronym)
  }
  changeBaseValue = (event) => {
    const quoteValue = this.convert(event.target.value, this.state.rate, this.toQuote);
    this.setState({
      baseValue: event.target.value,
      quoteValue,
    });
  }
  changeQuoteAcronym = (event) => {
    const quoteAcronym = event.target.value;
    this.setState({ quoteAcronym });
    this.getRate(this.state.baseAcronym, quoteAcronym);
  }
  changeQuoteValue = (event) => {
    const baseValue = this.convert(event.target.value, this.state.rate, this.toBase);
    this.setState({
      quoteValue: event.target.value,
      baseValue,
    });
  }
  render() {
    const { rate, baseAcronym, baseValue, quoteAcronym, quoteValue, loading } = this.state;
    const currencyOptions = Object.keys(TableInput).map(currencyAcronym => <option key={currencyAcronym} value={currencyAcronym}>{currencyAcronym} - {TableInput[currencyAcronym].name}</option>);

    return (
      <React.Fragment>
        <div className="text-center p-3">
          <h2 className="mb-2">Currency Converter</h2>
          <h4>1 {TableInput[baseAcronym].name}  = {rate.toFixed(4)} {TableInput[quoteAcronym].name}</h4>
        </div>
        <form className="row p-3 bg-light exchange justify-content-center">
          <div className="form-group col-md-5 mb-0">
            <select value={baseAcronym} onChange={this.changeBaseAcronym} className="form-control form-control-lg mb-2" disabled={loading}>
              {currencyOptions}
            </select>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">{TableInput[baseAcronym].symbol}</div>
              </div>
              <input id="base" className="form-control" value={baseValue} onChange={this.changeBaseValue} type="number" />
            </div>
          </div>
          <div className="col-md-2 py-3 d-flex justify-content-center align-items-center">
            <h3>=</h3>
          </div>
          <div className="form-group col-md-5 mb-0">
            <select value={quoteAcronym} onChange={this.changeQuoteAcronym} className="form-control form-control-lg mb-2" disabled={loading}>
              {currencyOptions}
            </select>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">{TableInput[quoteAcronym].symbol}</div>
              </div>
              <input id="quote" className="form-control" value={quoteValue} onChange={this.changeQuoteValue} type="number" />
            </div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default Home;

