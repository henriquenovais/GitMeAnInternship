import React, { Component } from 'react';
import logo from './nyancat.gif';
import Displaysearch from './components/displaysearch/displaysearch'
import Insertsite from './components/insertsite/insertsite';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Insertsite />
        <Displaysearch/>
      </div>
    );
  }
}

export default App;
