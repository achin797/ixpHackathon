import React, { Component } from 'react';
import logo from './logo.svg';
import Data from './people.js';
import SearchBar from './components/SearchBar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Egypt</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <SearchBar 
          onUserInput={SearchBar.handleUserInput}
        />

        <ul>
          {Data.map(x => <li>{x.name}</li>)}
        </ul>
      </div>
    );
  }
}
export default App;