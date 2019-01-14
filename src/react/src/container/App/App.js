import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <header>
        <div className="drizzle-o-Layout__header sprk-u-mbn sprk-u-pvl drizzle-c-AngularHeader">
          <h1 className="drizzle-b-h1">
            Spark Core React
            <img width="50" alt="React Logo" src={logo} />
          </h1>
        </div>
      </header>
    );
  }
}

export default App;
