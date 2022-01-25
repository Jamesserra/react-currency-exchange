import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="../pages/Table">Table</Link>
        </li>
        <li>
          <Link to="../pages/Graph">Graph</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;