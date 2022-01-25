import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './pages/Home.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Table from './pages/Table';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pages/Table' exact component={Table} />
      </Switch>
    </Router>
  );
}

export default App;
