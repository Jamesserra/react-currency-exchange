import React from 'react';
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div id="page-container">
        <div id="content-wrap">
          <nav className="navbar navbar-dark bg-dark" id="nav">
            <span className="navbar-brand mb-0 h1 title">Currency Exchange Rates</span>
            <ul className="nav__links">
              <li className="nav__item">
                <Link className='nav__link' to="/">Home</Link>
              </li>
              <span className="divider" />
              <li className="nav__item">
                <Link className='nav__link' to="../pages/Table">Table</Link>
              </li>
            </ul>
          </nav>
          <div className="container py-3">
            {props.children}
          </div>
        </div>
        <footer className="p-3 bg-dark" id='footer'>
          <div className="mb-2">
            <a className="badge bg-secondary text-decoration-none" href="https://github.com/Jamesserra/react-currency-exchange" target="_blank">GitHub</a>
            <a className="badge bg-info text-decoration-none" href="https://www.linkedin.com/in/jamesserra4/" target="_blank">LinkedIn</a>
          </div>
          <div>
            <span className="mr-3 text-secondary">Built by  <a className='text-secondary' href="https://github.com/Jamesserra" target="_blank">James Serra</a></span>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
export default Layout;


