import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FSTree from 'react-fs-tree'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <FSTree tree={[
          { name: 'a' },
          { name: 'b' },
          { name: 'c', mode: 'a' },
          { name: 'd', children: [ { name: 'e' } ] }
        ]} />
      </div>
    );
  }
}

export default App;
