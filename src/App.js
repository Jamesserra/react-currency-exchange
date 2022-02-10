import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './pages/Layout';
import './App.css';
import Home from './pages/Home';
import Table from './pages/Table';


const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pages/Table' component={Table} />
          <Route render={() => <h1>404 Not found</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
