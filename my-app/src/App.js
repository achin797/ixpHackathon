import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import logo from './logo.svg';
import data from './people.js';
import SearchBar from './components/SearchBar.js'
import './App.css';
//var data = require('json!./mock.json');

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
          <h1 className="App-title">Welcome to SAP</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <ul>
          {filteredData.map(x => <li>{x.name}</li>)}
        </ul>
        <PopupItem title="Some Information" info={data[0].moreInfo.location} />



      </div>
    );
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

function PopupItem(props) {
  console.log(props.info);
  var fields = "";
  var userInfo = "";
  for(var key in props.info){
    fields += key+'\n';
    userInfo += props.info[key]+'\n';
  };
  fields.split('\n');
  userInfo.split('\n');
  console.log(fields);
  console.log(userInfo);
  return (
    <div className="User-information">
      <div className="User-info-header">{props.title}</div>
      <hr></hr>
      <div className="User-info-left">
        {fields}
      </div>
      <div className="User-info-right">
        {userInfo}
      </div>
    </div>

    )
}


export default App;
