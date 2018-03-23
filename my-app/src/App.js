import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import logo from './logo.svg';
import data from './people.js';
import './App.css';

const KEYS_TO_FILTERS = ['name'];

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  render() {
    const filteredData = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Egypt</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredData.map(x => <li>{x.name}</li>)}
      </div>
    );
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}
export default App;